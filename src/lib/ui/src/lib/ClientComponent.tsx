"use client"

import styles from './ClientComponent.module.scss';
import { SubComponent } from './SubComponent';
import { useState } from 'react';
import clsx from 'clsx';
import { flushSync } from 'react-dom';

export const ClientComponent = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={styles.container}>
      <h2 className={clsx(styles.title, {[styles.open]: open})}>Client Component</h2>
      <button onClick={() => {
        document.startViewTransition(() => {
          flushSync(() => setOpen(!open))
        })
      }}>Toggle Open ({open?"open":"closed"})</button>
      <SubComponent />
    </div>
  );
}