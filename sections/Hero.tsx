"use client";
import Image from "next/image";
import Button from "../components/Button";

import styles from "../app/scss/Hero.module.scss";

const Hero = () => {
  return (
    <section id="hero" className={styles.sectionContainer}>
      <div className={`${styles.imageContainer}`}>
        <Image
          src="/hero1.jpg"
          alt=""
          width={3000}
          height={3000}
          className={styles.image}
          quality={100}
          priority
        />
      </div>
      <div className={styles.headerContainer}>
        <h1>
          Gen Fulton
          <span className="inline-block max-[1130px]:hidden min-[1800px]:pl-3">
            Consultancy
          </span>
        </h1>
        <h2>
          Psychotherapy&nbsp;
          <span className="inline-block">& Coaching</span>
        </h2>
        <div className="flex w-fit">
          <Button
            type="button"
            variant="btn-primary"
            title="View Expertise"
            href="#expertise"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
