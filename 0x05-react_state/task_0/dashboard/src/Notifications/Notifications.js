import React, { Component } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";
import closeIcon from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";


const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const opacityAnimation = {
  from: {
    opacity: 0.5,
  },

  to: {
    opacity: 1,
  },
};

const bounceAnimation = {
  "0%": {
    transform: "translateY(0)",
  },

  "50%": {
    transform: "translateY(-5px)",
  },

  "75%": {
    transform: "translateY(5px)",
  },

  "100%": {
    transform: "translateY(0)",
  },
};


const styles = StyleSheet.create({
  menuItem: {
    position: "fixed",
    right: "20px",
    top: "20px",
    backgroundColor: "#fff8f8",
    ":hover": {
      cursor: "pointer",
      animationName: [bounceAnimation, opacityAnimation],
      animationDuration: "500ms, 1000ms",
      animationIterationCount: 3,
    },
  },

  menuItemTextHidden: {
    marginRight: "8px",
    display: "none",
  },

  menuItemTextShown: {
    marginRight: "8px",
  },

  notifications: {
    margin: "10px 30px",
    paddingLeft: "10px",
    border: "1px dashed red",
    position: "fixed",
    top: "20px",
    right: 0,
    backgroundColor: "white",
    [screenSize.small]: {
      width: "100vw",
      height: "100vh",
      margin: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      zIndex: 1,
      fontSize: "20px",
    },
  },

  closeButtonImage: {
    width: "10px",
  },

  notificationsTitle: {
    margin: 0,
    marginTop: "15px",
  },

  notificationsUL: {
    margin: "20px",
    [screenSize.small]: {
      padding: 0,
      margin: 0,
      listStyle: "none",
    },
  },
});

class Notifications extends Component {
  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length >
        this.props.listNotifications.length ||
      nextProps.displayDrawer !== this.props.displayDrawer
    );
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
    } = this.props;

    const menuTextStyle = css(
      displayDrawer ? styles.menuItemTextHidden : styles.menuItemTextShown
    );

    return (
      <>
        <div
          className={css(styles.menuItem)}
          id="menuItem"
          onClick={handleDisplayDrawer}
        >
          <p className={menuTextStyle}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} id="Notifications">
            <button
              style={{
                marginRight: '10px',
                background: "white",
                border: "1px solid lightgrey",
                borderRadius: "5px",
                padding: '3px',
                position: "absolute",
                right: '30px',
                top: '15px',
              }}
              aria-label="close"
              onClick={handleHideDrawer}
              id="closeNotifications"
            >
              <img
                src={closeIcon}
                alt="close-icon"
                className={css(styles.closeButtonImage)}
              />
            </button>
            <p className={css(styles.notificationsTitle)}>
              Here is the list of notifications
            </p>
            <ul className={css(styles.notificationsUL)}>
              {listNotifications.length === 0 && (
                <NotificationItem value="No new notification for now" />
              )}

              {listNotifications.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={this.markAsRead}
                />
              ))}
            </ul>
          </div>
        )}
      </>
    );
  }
}

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
  handleDisplayDrawer: () => {},
  handleHideDrawer: () => {},
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
};

export default Notifications;
