"use client";

import BlobLayer from "@/components/BlobLayer";
import Button from "@/components/Button";
import Consult from "@/sections/Consult";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import styles from "../scss/Resources.module.scss";

const RESOURCES = [
  {
    text: "Originally developed for elite golfers, this class offers practical tools for managing pressure, building emotional resilience, and enhancing focus under stress. Whether you're navigating high-stakes competition or the demands of everyday life, these strategies are designed to help you perform at your best—on and off the course. ",
    image: "/course-stress.jpeg",
    button: "View Course",
    href: "https://www.mpgagolf.com/offers/FkDREmy9/checkout",
  },
  {
    text: "After years of clinical experience and coaching, I’m thrilled to share my knowledge in two upcoming books: one on Trauma Psychotherapy and another on mental performance in golf. These books will offer practical tools and insights to transform your healing and game",
    image: "/books.jpeg",
    button: "Click Me",
  },
];

const ResourcesPage = () => {
  return (
    <>
      <Resources />
      <Media />
      <div className="relative z-30">
        <Consult />
      </div>
    </>
  );
};

export default ResourcesPage;

const Resources = () => {
  return (
    <section className={styles.resources}>
      <BlobLayer />
      <h1>Resources</h1>
      <div className={styles.resourcesContainer}>
        {RESOURCES.map((item, index) => (
          <div key={index} className={styles.singleResourcesContainer}>
            <div className={styles.imageContainer}>
              <Image
                src={item.image}
                alt=""
                width={1000}
                height={1000}
                className={styles.image}
              />
            </div>
            <div className={styles.textButtonContainer}>
              <div>
                <p className="text-white max-w-[500px]">{item.text}</p>
              </div>
              <div className="flex justify-end">
                <Button
                  variant="btn-primary"
                  title={item.button}
                  type="button"
                  href={item.href}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const Media = () => {
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
