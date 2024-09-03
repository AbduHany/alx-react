import React from 'react'
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';


const styles = StyleSheet.create({
    defaultData: {
        color: "blue",
    },
    urgentData: {
        color: "red",
    },
});

class NotificationItem extends React.PureComponent {

    constructor(props) {
        super(props);
    };

    render() {
        return (
            <li className={css(this.props.type === "default" ? styles.defaultData : styles.urgentData)} onClick={() => { this.props.markAsRead(this.props.id); }} data={this.props.type} dangerouslySetInnerHTML={this.props.html}>
                {this.props.value}
            </li>
        );
    }
};

NotificationItem.defaultProps = {
    type: "default",
    markAsRead: () => { },
    id: 0
};

NotificationItem.propTypes = {
    html: PropTypes.shape({ __html: PropTypes.string }),
    type: PropTypes.string.isRequired,
    value: PropTypes.string,
    markAsRead: PropTypes.func,
    id: PropTypes.number
};

export default NotificationItem;