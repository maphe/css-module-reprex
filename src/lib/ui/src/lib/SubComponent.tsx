import styles from './SubComponent.module.scss';

const formatCount = (num: number): string => {
  if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M"
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "k"
  } else {
    return num.toString()
  }
}

export const SubComponent = () => {
  return (
    <div className={styles.container}>
      <h3>SubComponent {formatCount(8364893746)}</h3>
    </div>
  );
}