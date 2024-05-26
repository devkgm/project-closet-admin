import styles from "./Card.module.scss";

interface CardDTO {
    title: string;
    dayAmount: number;
    weekAmount: number;
    monthAmount: number;
}
interface Props {
    data: CardDTO;
}
function Card({ data }: Props) {
    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div className={styles.main__content}>
                    <span className={styles.main__content__title}>
                        {data.title}
                    </span>
                    <span className={styles.main__content__type}>오늘</span>
                </div>
                <span className={styles.main__amount}>{data.dayAmount}</span>
            </div>
            <div className={styles.sub}>
                <div className={styles.sub__item}>
                    <span className={styles.sub__item__type}>일주일</span>
                    <span className={styles.sub__item__amount}>
                        {data.weekAmount}
                    </span>
                </div>
                <div className={styles.sub__item}>
                    <span className={styles.sub__item__type}>한달</span>
                    <span className={styles.sub__item__amount}>
                        {data.monthAmount}
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Card;
