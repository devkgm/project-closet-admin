import Card from "./components/card/Card";
import styles from "./index.module.scss";
function index() {
    const data = {
        title: "결제완료",
        dayAmount: 0,
        weekAmount: 0,
        monthAmount: 0,
    };
    return (
        <div className={styles.container}>
            <div className={styles.title}>
                <span className={styles.title__text}>Dashboard</span>
            </div>
            <div className={styles.article}>
                <div className={styles.article__item}>
                    <div className={styles.article__item__card}>
                        <Card data={data} />
                        <Card data={data} />
                        <Card data={data} />
                        <Card data={data} />
                    </div>
                    <div className={styles.article__item__chart}></div>
                </div>
                <div className={styles.board}>
                    <div className={styles.board__item}></div>
                </div>
            </div>
        </div>
    );
}

export default index;
