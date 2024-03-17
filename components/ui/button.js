import Link from "next/link";
import styles from "./button.module.css";

function Button({ link, children, onClick }) {
  if (link) {
    return (
      <Link href={link}>
        <button className={styles.btn}>{children}</button>
      </Link>
    );
  }

  return (
    <button className={styles.btn} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
