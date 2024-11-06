"use client"

import styles from './ClientComponent.module.scss';
import { SubComponent } from './SubComponent';

export const ClientComponent = () => {
  return (
    <div className={styles.container}>
      <h2>Client Component</h2>
      <SubComponent />
    </div>
  );
}