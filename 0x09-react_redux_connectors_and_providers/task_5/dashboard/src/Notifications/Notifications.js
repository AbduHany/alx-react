import React, { Component, PureComponent } from "react";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import closeIcon from "../assets/close-icon.png";
import { StyleSheet, css } from "aphrodite";
import { fetchNotifications } from "../actions/notificationActionCreators";
import { connect } from "react-redux";


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
    margin: "8px",
    display: "none",
  },

  menuItemTextShown: {
    margin: "8px",
  },

  notifications: {
    margin: "10px 30px",
    paddingLeft: "10px",
    border: "1px dashed red",
    position: "fixed",
    top: "20px",
    right: 0,
    backgroundColor: "white",
    "@media screen and (max-width: 900px)": {
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
    "@media screen and (max-width: 900px)": {
      padding: 0,
      margin: 0,
      listStyle: "none",
    },
  },
});

class Notifications extends PureComponent {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchNotifications();
  }

  render() {
    const {
      displayDrawer,
      listNotifications,
      handleDisplayDrawer,
      handleHideDrawer,
      markNotificationAsRead
    } = this.props;

    return (
      <>
        <div
          className={css(styles.menuItem)}
          id="menuItem"
          onClick={handleDisplayDrawer}
        >
          <p className={css(displayDrawer ? styles.menuItemTextHidden : styles.menuItemTextShown)}>Your notifications</p>
        </div>
        {displayDrawer && (
          <div className={css(styles.notifications)} id="Notifications">
            <button
              style={{
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

              {listNotifications.map((notification, index) => (
                <NotificationItem
                  key={notification.id}
                  id={notification.id}
                  type={notification.type}
                  value={notification.value}
                  html={notification.html}
                  markAsRead={markNotificationAsRead}
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
  handleDisplayDrawer: () => { },
  handleHideDrawer: () => { },
  markNotificationAsRead: () => { },
};

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  markNotificationAsRead: PropTypes.func,
};

const mapStateToProps = (state) => {
  console.log(Object.values(state.notifications.get('notifications').entities.messages))
  return {
    listNotifications: Object.values(state.notifications.get('notifications').entities.messages)
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotifications: () => {
      dispatch(fetchNotifications());
    }
  };
};

export { Notifications };

export default connect(mapStateToProps, mapDispatchToProps)(Notifications); // export default Notifications;
