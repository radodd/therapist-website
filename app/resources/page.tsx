"use client";

import BlobLayer from "@/components/BlobLayer";
import Button from "@/components/Button";
import Consult from "@/sections/Consult";
import Image from "next/image";
import React, { useState } from "react";
import Media from "@/sections/PressAppearances";

import styles from "../scss/Resources.module.scss";

const RESOURCES = [
  {
    text: "Originally developed for elite golfers, this class offers practical tools for managing pressure, building emotional resilience, and enhancing focus under stress. Whether you're navigating high-stakes competition or the demands of everyday life, these strategies are designed to help you perform at your best—on and off the course. ",
    image: "/course-stress.jpeg",
    button: "View Course",
    href: "https://www.mpgagolf.com/offers/FkDREmy9/checkout",
  },
  {
    text: "How to Treat Perfectionism Clinically",
    image: "/stock_stacked_rocks.png",
    button: "Play podcast",
    audioSrc: "/Unmasking_Perfectionism__Podcast.m4a",
  },
];

const ResourcesPage = () => {
  return (
    <>
      <Resources />
      {/* <Media /> */}
      <div className="relative z-30">
        <Consult />
      </div>
    </>
  );
};

export default ResourcesPage;

const Resources = () => {
  const [showAudio, setShowAudio] = useState(false);

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
              {item.audioSrc ? (
                showAudio ? (
                  <audio
                    controls
                    src={item.audioSrc}
                    className="w-full mt-4"
                    preload="none"
                    autoPlay
                  >
                    Your browser does not support the audio element.
                  </audio>
                ) : (
                  <div className="flex justify-end mt-4">
                    <Button
                      variant="btn-primary"
                      title={item.button}
                      type="button"
                      onClick={() => setShowAudio(true)}
                    />
                  </div>
                )
              ) : (
                <div className="flex justify-end">
                  <Button
                    variant="btn-primary"
                    title={item.button}
                    type="button"
                    href={item.href}
                    target={true}
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
