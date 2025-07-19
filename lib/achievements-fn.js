import achievementsData from "../data/achievements-data";

export function getAchievement(slug){
    return achievementsData.find(item => item.id == slug)
}