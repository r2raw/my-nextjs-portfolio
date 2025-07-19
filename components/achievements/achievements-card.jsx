import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AchievementsCard({ achievement }) {
  return (
    <>
      <div className="bg-white rounded-2xl flex flex-col gap-4 justify-between p-2">
        <div className="flex flex-col gap-4">
          <div className="h-80 md:h-40 relative">
            <Image
              src={achievement.thumbnail}
              alt={achievement.title}
              fill
              className="rounded-xl"
              style={{ objectFit: "cover" }}
            />
          </div>
          <h1 className="text-background font-bold tracking-wide text-justify text-2xl md:text-sm lg:text-lg xl:text-xl">
            {achievement.title}
          </h1>
        </div>
        <Link href={`/achievements/${achievement.id}`} className="text-center text-white bg-background md:tracking-widest rounded-2xl cursor-pointer border border-background transition-colors duration-500 ease-in text-sm lg:text-base hover:bg-white hover:text-background">
          Read more...
        </Link>
      </div>
    </>
  );
}
