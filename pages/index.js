import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/home.module.scss';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Chat UI</title>
            </Head>
            <main>
                <h1 className={styles.title}>Chat UI App</h1>
                <hr />
                <p className={styles.subtitle}>List of screens to test:</p>
                <ul className={styles.list}>
                    <li>
                        <Link href="/team">Team screen (#002)</Link>
                    </li>
                    <li>
                        <Link href="/message">Msg screen (#004)</Link>
                    </li>
                </ul>
            </main>
            <footer></footer>
        </div>
    );
}
