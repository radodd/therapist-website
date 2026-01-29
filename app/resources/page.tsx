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
    href: "https://www.skool.com/mpga/classroom/bb625a25?md=b2ae7ffb4710475e9fa030e3a8c7caf1",
  },
  {
    text: "Gen’s master’s thesis comes to life in this podcast, offering a holistic, mind-body approach that integrates Somatic Experiencing, Cognitive Behavioral Therapy (CBT), and Mindfulness. This brief dialogue demonstrates how perfectionism can become “maladaptive” and how to work with it when it does. Gen’s tool—the Fulton Cognitive Somatic Re-Appraisal Log—bridges perfectionist thoughts with bodily sensations to help calm the nervous system and reduce stress. Enjoy the journey toward a more embodied, compassionate understanding of perfectionism.",
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
                    controlsList="nodownload"
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
