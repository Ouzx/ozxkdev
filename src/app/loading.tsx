import LoadIndicator from "./Components/LoadIndicator/LoadIndicator";
import styles from "./loading.module.scss";
export default function Loading() {
  return (
    <div className={styles.container}>
      <LoadIndicator />
    </div>
  );
}
