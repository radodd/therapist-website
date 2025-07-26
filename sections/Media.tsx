import Link from "next/link";
import Image from "next/image";

import styles from "../app/scss/Resources.module.scss";
import Button from "@/components/Button";

const Media = () => {
  return (
    <section className={styles.media}>
      <h1>Media</h1>
      <div className={styles.imageContainer}>
        <Link href="https://coloradoavidgolfer.com/mark-hubbard-my-demon-is-my-inner-critic/">
          <Image
            src="/logo-avidgolfer.png"
            alt=""
            width={1000}
            height={1000}
            className={styles.image}
          />
        </Link>
        <div className="">
          <p>
            Hubbard and sports psychologist Gen Fulton, a 2004 graduate of the
            University of Colorado, did an hour-long Instagram Live interview
            and went in-depth on Hubbard’s mental approach to the game. Hubbard
            is one of the best golfers in the world and is ranked in the top 70
            of all PGA Tour pros.
          </p>
          <div className="flex justify-end pt-5">
            <Button
              variant="btn-primary"
              title="Read More"
              type="button"
              href="https://coloradoavidgolfer.com/mark-hubbard-my-demon-is-my-inner-critic/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
