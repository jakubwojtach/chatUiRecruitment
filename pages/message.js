import { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import { getUserData } from '../services/userApi';
import Image from 'next/image';
import styles from '../styles/message.module.scss';
import { messagesMock } from '../mocks/messagesMock';
import camPic from '../public/CameraIcon.svg';
import messagePic from '../public/BobbleIcon.svg';
import MessageBox from '../components/MessageBox/MessageBox';

const Message = () => {
    const [names, setNames] = useState([]);
    const [avatars, setAvatars] = useState([]);
    const [messages, setMessages] = useState(messagesMock);
    const [message, setMessage] = useState('');
    const messagesEndRef = useRef();

    const setUsersData = async () => {
        const data = await getUserData(2);
        const users = data.results;
        const names = users.map((el) => `${el.name.first} ${el.name.last}`);
        const avatars = users.map((el) => el.picture.medium);

        setNames(names);
        setAvatars(avatars);
    };

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    useEffect(() => {
        setUsersData();
    }, []);

    const addMessage = () => {
        setMessages([
            ...messages,
            {
                person: 1,
                content: message,
                date: new Date().toISOString(),
            },
        ]);
        setMessage('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            addMessage();
        }
    };

    const renderMessages = () =>
        messages.map((msg, index) => (
            <MessageBox
                msg={msg}
                messages={messages}
                index={index}
                key={`message-${index}`}
            />
        ));

    const renderAvatars = () =>
        avatars.map((avatar, index) => (
            <div className={styles.avatar} key={`avatar-${index}`}>
                <Image src={avatar} alt="person" width={44} height={44} />
            </div>
        ));

    const renderNames = () =>
        names.map((name, index) => (
            <p className={styles.name} key={`name-${index}`}>
                {name}
            </p>
        ));

    const renderUsers = () => (
        <div className={styles.users}>
            <div className={styles.userAvatars}>{renderAvatars()}</div>
            <div className={styles.userNames}>{renderNames()}</div>
        </div>
    );

    return (
        <div className={styles.container}>
            <Head>
                <title>Chat UI - Message Screen</title>
            </Head>
            {renderUsers()}
            <div className={styles.messages}>
                {renderMessages()}
                <div ref={messagesEndRef} />
            </div>

            <div className={styles.messengerFooter}>
                <div className={styles.messageBox}>
                    <input
                        placeholder="Write"
                        value={message}
                        onChange={(e) => setMessage(e.currentTarget.value)}
                        onKeyPress={handleKeyPress}
                        name="messageBox"
                        id="messageBox"
                    />
                    <button className="darkGrayBg" onClick={addMessage}>
                        <Image src={messagePic} alt="Send" />
                    </button>
                </div>
                <button className="greenBg">
                    <Image src={camPic} alt="Open camera" />
                </button>
            </div>
        </div>
    );
};

export default Message;
