'use client';

import styles from './ClientComponent.module.scss';
import { SubComponent } from './SubComponent';
import { useState } from 'react';
import { clsx } from 'clsx';
import { flushSync } from 'react-dom';

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
      <button
        onClick={() => {
          document.startViewTransition(() => {
            flushSync(() => setOpen(!open));
          });
        }}
      >
        Toggle Open ({open ? 'open' : 'closed'})
      </button>
      <SubComponent prop1={props.prop1} />
    </div>
  );
};
