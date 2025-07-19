
import React from "react";
import { getAchievement } from "../../../../lib/achievements-fn";
import AchievementDetailImages from "../../../../components/achievements/achievement-details/achievement-detail-images";

export default async function AchievementDetailPage({ params }) {
  const { achievementSlug } = await params;
  const achievement = getAchievement(achievementSlug);


  return (
    <section className="px-4 py-20 lg:px-20 lg:py-40 flex flex-col gap-20">
      <h1 className="text-4xl font-bold tracking-wider text-center">
        {achievement.title}
      </h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <AchievementDetailImages images={achievement.images} />
        <div className="">
            <p className="text-justify text-xl lg:text-2xl tracking-wider leading-12">{achievement.description}</p>
        </div>
      </div>
    </section>
  );
}
