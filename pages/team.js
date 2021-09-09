import { useState, useEffect } from 'react';
import Head from 'next/head';
import TeamMember from '../components/TeamMember/TeamMember';
import styles from '../styles/team.module.scss';
import { getUserData } from '../services/userApi';

const Home = () => {
    const [members, setMembers] = useState([]);
    useEffect(() => {
        const getUsers = async () => {
            const data = await getUserData(6);
            data.results[1].isSpecial = true;
            setMembers(data.results);
        };
        getUsers();
    }, []);

    const addUser = async () => {
        const data = await getUserData(1);
        setMembers([...members, data.results[0]]);
    };

    const handleOnRemove = (id) => {
        const newData = members.filter((el) => el.phone !== id);
        setMembers(newData);
    };

    const renderUsers = () =>
        members.map((member) => (
            <TeamMember
                name={`${member.name.first} ${member.name.last}`}
                picture={member.picture}
                isSpecial={member.isSpecial}
                onRemove={handleOnRemove}
                key={member.phone}
                id={member.phone}
            />
        ));

    return (
        <div className={styles.container}>
            <Head>
                <title>Chat UI - Team Screen</title>
            </Head>
            <h1 className={styles.title}>Chatroom</h1>
            <div className={styles.buttons}>
                <button className="button blueBg" onClick={addUser}>
                    new user
                </button>
                <button className="button orangeBg"> delete chatroom</button>
            </div>

            <h2 className={styles.title}>Team</h2>
            <div>
                {members.length > 0 ? renderUsers() : 'No users to display'}
            </div>
        </div>
    );
};

export default Home;
