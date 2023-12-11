import Image from "next/image";
import prisma from "../utils/db";
import MovieCard from "./MovieCard";

async function getData() {
  const data = await prisma.movie.findMany({
    select: {
      id: true,
      title: true,
      overview: true,
      youtubeString: true,
      imageString: true,
      WatchLists: true,
      release: true,
      age: true,
      duration: true,
    },
    orderBy: { createdAt: "desc" },
    take: 4,
  });
  return data;
}

export default async function RecentlyAdded() {
  const data = await getData();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
      {data.map((movie) => (
        <div key={movie.id} className="h-48 relative">
          <Image
            src={movie?.imageString}
            width={500}
            height={400}
            alt="Movie"
            className="w-full h-full rounded-sm absolute object-cover"
          />
          <div className="relative z-10 w-full h-60 opacity-0 hover:opacity-100 hover:scale-125 transform transition duration-500">
            <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
              {" "}
              <Image
                src={movie?.imageString}
                width={800}
                height={800}
                alt="Movie"
                className="w-full h-full rounded-lg absolute object-cover -z-10"
              />
              <MovieCard
                movieId={movie.id}
                overview={movie.overview}
                title={movie.title}
                watchListId={movie.WatchLists[0]?.id}
                watchList={movie.WatchLists.length > 0 ? true : false}
                youtubeUrl={movie.youtubeString}
                release={movie.release}
                age={movie.age}
                duration={movie.duration}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
