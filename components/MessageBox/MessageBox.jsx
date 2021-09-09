import styles from './MessageBox.module.scss';
import PropTypes from 'prop-types';
import { messageShape } from '../../shapes';
import { renderDate } from '../../utils/helpers';
const messageBox = ({ msg, messages, index }) => {
    const renderDateEl = (date, currentMessage, previousMessage) => {
        return (
            <p className={styles.date}>
                {renderDate(date, currentMessage, previousMessage)}
            </p>
        );
    };

    return (
        <div key={`msg-${index}`}>
            {renderDateEl(msg.date, msg, messages[index - 1])}
            <div
                className={`${styles.msgBox} ${
                    msg.person === 0
                        ? styles.messageFirst
                        : styles.messageSecond
                }`}
            >
                {msg.content}
            </div>
        </div>
    );
};

messageBox.propTypes = {
    msg: PropTypes.shape(messageShape),
    messages: PropTypes.arrayOf(PropTypes.shape(messageShape)),
    index: PropTypes.number.isRequired,
};

messageBox.defaultProps = {
    messages: [],
};

export default messageBox;
