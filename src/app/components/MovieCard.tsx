"use client";

import { Button } from "@/components/ui/button";
import { Heart, PlayCircle } from "lucide-react";
import PlayVideoModal from "./PlayVideoModal";
import { useState } from "react";

interface iAppProps {
  movieId: number;
  overview: string;
  title: string;
  watchListId: string;
  watchList: boolean;
  youtubeUrl: string;
  age: number;
  duration: number;
  release: number;
}

export default function MovieCard({
  movieId,
  overview,
  title,
  watchListId,
  watchList,
  youtubeUrl,
  age,
  duration,
  release,
}: iAppProps) {
  const [isPlayVideoModal, setIsPlayVideoModal] = useState(false);
  return (
    <>
      <button className="-mt-14" onClick={() => setIsPlayVideoModal(true)}>
        <PlayCircle className="h-20 w-20" />
      </button>
      <div className="top-5 right-5 absolute z-10">
        {watchList ? (
          <form>
            <Button variant={"outline"} size={"icon"}>
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </form>
        ) : (
          <form>
            <Button variant={"outline"} size={"icon"}>
              <Heart className="w-4 h-4" />
            </Button>
          </form>
        )}
      </div>
      <div className="p-5 absolute bottom-0 left-0">
        <h1 className="font-bold text-lg line-clamp-1">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <p className="font-normal text-sm">{release}</p>
          <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
            {age}+
          </p>
          <p className="font-normal text-sm">{duration}h</p>
        </div>
        <p className="line-clamp-1 text-gray-200 text-sm font-light">
          {overview}
        </p>
      </div>
      {isPlayVideoModal && (
        <PlayVideoModal
          title={title}
          overview={overview}
          release={release}
          age={age}
          duration={duration}
          youtubeUrl={youtubeUrl}
        />
      )}
    </>
  );
}