import MovieCard from "@/app/components/MovieCard";
import { authOptions } from "@/app/utils/auth";
import prisma from "@/app/utils/db";
import { getServerSession } from "next-auth";
import Image from "next/image";

async function getData(userId: string) {
  const data = await prisma.watchList.findMany({
    where: {
      userId: userId,
    },
    select: {
      Movie: {
        select: {
          title: true,
          age: true,
          duration: true,
          imageString: true,
          overview: true,
          release: true,
          id: true,
          WatchLists: true,
          youtubeString: true,
        },
      },
    },
  });

  return data;
}

export default async function Watchlist() {
  const session = await getServerSession(authOptions);
  const data = await getData(session?.user?.email as string);

  return (
    <>
      <h1 className="text-white text-4xl font-bold underline mt-10 px-5 sm:px-0">
        Your watchlist
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mt-8 gap-6">
        {data?.map((movie) => (
          <div key={movie.Movie?.id} className="h-48 relative">
            <Image
              src={movie.Movie?.imageString as string}
              width={500}
              height={400}
              alt="Movie"
              className="w-full h-full rounded-sm absolute object-cover"
            />
            <div className="relative z-10 w-full h-60 opacity-0 hover:opacity-100 hover:scale-125 transform transition duration-500">
              <div className="bg-gradient-to-b from-transparent via-black/50 to-black z-10 w-full h-full rounded-lg flex items-center justify-center border">
                {" "}
                <Image
                  src={movie.Movie?.imageString as string}
                  width={800}
                  height={800}
                  alt="Movie"
                  className="w-full h-full rounded-lg absolute object-cover -z-10"
                />
                <MovieCard
                  key={movie.Movie?.id}
                  age={movie.Movie?.age as number}
                  movieId={movie.Movie?.id as number}
                  overview={movie.Movie?.overview as string}
                  duration={movie.Movie?.duration as number}
                  title={movie.Movie?.title as string}
                  watchListId={movie.Movie?.WatchLists[0]?.id as string}
                  watchList={
                    (movie.Movie?.WatchLists.length as number) > 0
                      ? true
                      : false
                  }
                  release={movie.Movie?.release as number}
                  youtubeUrl={movie.Movie?.youtubeString as string}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
