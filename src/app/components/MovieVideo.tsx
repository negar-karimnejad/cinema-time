import React from "react";
import prisma from "../utils/db";

async function getData() {
  const data = await prisma.movie.findFirst({
    select: {
      id: true,
      imageString: true,
      title: true,
      age: true,
      duration: true,
      overview: true,
      videoSource: true,
    },
  });
  return data;
}

export default async function MovieVideo() {
  const data = await getData();
  return (
    <div className="h-[55vh] lg:h-[60vh] w-full flex justify-center items-center">
      <video
        poster={data?.imageString}
        muted
        autoPlay
        loop
        src={data?.videoSource}
        className="w-full absolute top-0 left-0 h-[60vh] object-cover -z-10 brightness-[60%]"
      ></video>
    </div>
  );
}
