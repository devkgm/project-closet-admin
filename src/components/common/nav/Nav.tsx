import styles from "./Nav.module.scss";
function Nav() {
    return (
        <div className={styles.container}>
            <div className={styles.menu}>
                <div className={styles.menu__item}>
                    <button>회원관리</button>
                </div>
                <div className={styles.menu__item}>
                    <button className={styles.active}>상품관리</button>
                </div>
                <div className={styles.menu__item}>
                    <button>주문/배송</button>
                </div>
                <div className={styles.menu__item}>
                    <button>리뷰/문의</button>
                </div>
                <div className={styles.menu__item}>
                    <button>게시판</button>
                </div>
                <div className={styles.menu__item}>
                    <button>디자인</button>
                </div>
            </div>
        </div>
    );
}

export default Nav;
