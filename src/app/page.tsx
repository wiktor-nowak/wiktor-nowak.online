import styles from "./page.module.scss";
import AComponent from "@/components/acomponent";

export default function Home() {
  return (
    <>
      <h1 className={styles.text}>YO!</h1>
      <AComponent></AComponent>
    </>
  );
}
