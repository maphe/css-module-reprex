import styles from './page.module.scss';
import { ServerComponent } from '@css-module-reprex/ui';

export default function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <h1>Server-Side Rendered</h1>
      <ServerComponent prop1="test" />
    </div>
  );
}
