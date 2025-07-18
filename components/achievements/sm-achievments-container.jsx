import React from 'react'
import AchievementList from './achivements-list'
import achievementsData from '../../data/achievements-data'

export default function SmAchievementsContainer() {
  return (
      <AchievementList
        achievements={achievementsData}
      />
  )
}
