import styles from './layout.module.scss';

const Layout = ({ children }) => (
    <div className={styles.layout}>
        <main>{children}</main>
    </div>
);

export default Layout;
