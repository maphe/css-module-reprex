import { ClientComponent } from './ClientComponent';
import styles from './ServerComponent.module.scss';

type ServerComponentProps = {
  prop1: string;
};

export const ServerComponent = (props: ServerComponentProps) => {
  return (
    <>
      <Stylesheet />
      <div className={styles.container}>
        ServerComponent <ClientComponent prop1={props.prop1} />
      </div>
    </>
  );
};

function Stylesheet() {
  const fontUrl = `https://fonts.googleapis.com/css2?family=Roboto`;

  return (
    <>
      <link rel="preload" as="style" href={fontUrl} type="text/css" />
      <link rel="stylesheet" href={fontUrl} type="text/css" />
    </>
  );
}
