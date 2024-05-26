import styles from "./Header.module.scss";

function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>
                <span className={styles.logo__text}>Admin</span>
            </div>
            <div className={styles.menu}>
                <div className={styles.menu__item}>
                    <button className={styles.menu__item__logout}>
                        Logout
                    </button>
                </div>
                <div className={styles.menu__item}>
                    <button className={styles.menu__item__store}>
                        <span className='material-symbols-outlined'>
                            storefront
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;
