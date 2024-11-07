import styles from './not-found.module.scss';
import { clsx } from 'clsx';

export default function NotFound() {
  return (
    <div className={styles.container}>
      <div className={styles.background}></div>
      <div className={styles.content}>
        <h1 className={styles.title}>
        </h1>
        <h2 className={styles.subtitle}>Page Not Found</h2>
        <p className={styles.message}>
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <p className={clsx([styles.message, styles.secondary])}>
          Claim this Link on <a href="https://www.launch.app">Launch.app</a>
        </p>
      </div>
    </div>

  );
}