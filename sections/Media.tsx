import Link from "next/link";
import Image from "next/image";

import styles from "../app/scss/Resources.module.scss";

const Media = () => {
  return (
    <section className={styles.media}>
      <h1>Media</h1>
      <div className={styles.imageContainer}>
        <Link href="https://coloradoavidgolfer.com/mark-hubbard-my-demon-is-my-inner-critic/">
          <Image
            src="/media-mark-pga.jpg"
            alt=""
            width={1000}
            height={1000}
            className={styles.image}
          />
        </Link>
      </div>
    </section>
  );
};
export default Media;
