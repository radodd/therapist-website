"use client";

import { useState } from "react";
import Button from "./Button";

interface AudioPlayerToggleProps {
  audioSrc: string;
  buttonLabel: string;
}

const AudioPlayerToggle = ({ audioSrc, buttonLabel }: AudioPlayerToggleProps) => {
  const [showAudio, setShowAudio] = useState(false);

  if (showAudio) {
    return (
      <audio
        controls
        src={audioSrc}
        className="w-full mt-4"
        preload="none"
        autoPlay
        controlsList="nodownload"
      >
        Your browser does not support the audio element.
      </audio>
    );
  }

  return (
    <div className="flex justify-end mt-4">
      <Button
        variant="btn-primary"
        title={buttonLabel}
        type="button"
        onClick={() => setShowAudio(true)}
      />
    </div>
  );
};

export default AudioPlayerToggle;
