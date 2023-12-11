interface iAppProps {
  overview: string;
  title: string;
  youtubeUrl: string;
  age: number;
  duration: number;
  release: number;
}

export default function PlayVideoModal({
  title,
  overview,
  release,
  age,
  duration,
  youtubeUrl,
}: iAppProps) {
  return (
    <div className="w-full h-full">
      <p>{title}</p>
      <p className="line-clamp-3">{overview}</p>
      <p className="font-normal text-sm">{release}</p>
      <p className="font-normal border py-0.5 px-1 border-gray-200 rounded text-sm">
        {age}+
      </p>
      <p className="font-normal text-sm">{duration}h</p>
      <video src={youtubeUrl}></video>
    </div>
  );
}
