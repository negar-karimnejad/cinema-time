"use client";

import { Button } from "@/components/ui/button";
import { InfoIcon, PlayCircle } from "lucide-react";
import { useState } from "react";
import PlayVideoModal from "./PlayVideoModal";

interface iAppProps {
  id: number;
  overview: string;
  title: string;
  youtubeUrl: string;
  age: number;
  duration: number;
  release: number;
}

export default function MovieButtons({
  id,
  overview,
  title,
  youtubeUrl,
  age,
  duration,
  release,
}: iAppProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button className="text-lg font-medium" onClick={() => setOpen(true)}>
        <PlayCircle className="mr-2 h-6 w-6" />
        Play
      </Button>
      <Button className="text-lg font-medium bg-white/40 hover:bg-white/30 text-white">
        <InfoIcon className="mr-2 h-6 w-6" />
        Learn More
      </Button>
      <PlayVideoModal
        changeState={setOpen}
        state={open}
        key={id}
        overview={overview}
        title={title}
        youtubeUrl={youtubeUrl}
        age={age}
        duration={duration}
        release={release}
      />
    </>
  );
}
