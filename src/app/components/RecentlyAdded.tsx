import Image from "next/image";
import prisma from "../utils/db";

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      title: true,
      overview: true,
      videoSource: true,
      imageString: true,
      WatchLists: true,
    },
    orderBy: { createdAt: "desc" },
    take: 4,
  });
  return data;
}

export default async function RecentlyAdded() {
  const data = await getData();
  console.log(data);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-4">
      {data.map((movie) => (
        <div key={movie.id} className="h-48 relative">
          <Image src={movie?.imageString} fill alt="" />
          <p>{movie?.title}</p>
        </div>
      ))}
    </div>
  );
}
