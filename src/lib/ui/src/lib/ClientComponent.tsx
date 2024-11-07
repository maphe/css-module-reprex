'use client';

import styles from './ClientComponent.module.scss';
import { useState } from 'react';
import { clsx } from 'clsx';

type ClientComponentProps = {
  prop1: string;
};

export const ClientComponent = (props: ClientComponentProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.container}>
      <h2 className={clsx(styles.title, { [styles.open]: open })}>
        Client Component
      </h2>
      <button onClick={() => setOpen((open) => !open)}>
        Toggle Open ({open ? 'open' : 'closed'})
      </button>
    </div>
  );
};
