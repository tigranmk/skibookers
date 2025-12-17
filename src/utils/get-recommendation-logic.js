export const getRecommendationLogic = (trip) => {
  const vibe =
    trip.resort.name === "Alpine Heights" ? "Party vibe" :
    trip.resort.name === "Snow Valley" ? "Family-friendly" :
    trip.resort.name === "Glacier Peak" ? "Quiet retreat" : "Custom vibe";

  let budget = "Medium budget";
  const total = trip.skipass.days * 50 + (trip.hotel.name === "5* Resort" ? 600 : trip.hotel.name === "4* Chalet" ? 400 : 250);
  if (total > 1000) budget = "High budget";
  if (total < 600) budget = "Low budget";

  let group = "Solo traveler";
  if (trip.hotel.room.includes("Double") || trip.hotel.room.includes("Suite")) group = "Group of friends";
  if (trip.hotel.room.includes("Single")) group = "Solo traveler";
  if (trip.hotel.room.includes("Family")) group = "Family";

  let activities = "";
  if (trip.addons.includes("Nightlife")) activities += ", likes nightlife";
  if (trip.addons.includes("Ski lessons")) activities += ", wants to improve skills";
  if (trip.addons.includes("Spa")) activities += ", enjoys relaxation";

  return `${vibe}, ${budget}, ${group}${activities}`;
}