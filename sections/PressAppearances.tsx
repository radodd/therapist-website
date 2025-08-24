import Link from "next/link";
import Image from "next/image";

import styles from "../app/scss/Resources.module.scss";
import Button from "@/components/Button";

const PressAppearances = () => {
  return (
    <section className={styles.media}>
      <h1>Press & Appearances</h1>
      <div className={styles.imageContainer}>
        <Link
          href="https://coloradoavidgolfer.com/mark-hubbard-my-demon-is-my-inner-critic/"
          target="_blank"
        >
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
            Hubbard and Gen Fulton, a 2004 graduate of the University of
            Colorado who is a psychotherapist and performance coach, did an
            hour-long Instagram Live interview and went in-depth on Hubbard’s
            mental approach to the game.
          </p>
          <div className="flex justify-end pt-5">
            <Button
              variant="btn-primary"
              title="Read More"
              type="button"
              target={true}
              href="https://coloradoavidgolfer.com/mark-hubbard-my-demon-is-my-inner-critic/"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PressAppearances;
