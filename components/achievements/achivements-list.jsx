import React from "react";
import AchievementsCard from "./achievements-card";

export default function AchievementList({ achievements }) {
  return (
    <div className="grid md:grid-cols-3  gap-2 md:col-span-3">
      {achievements.filter((item) => item.id != '1').map(item => <AchievementsCard key={item.id} achievement={item} />)}
    </div>
  );
}
