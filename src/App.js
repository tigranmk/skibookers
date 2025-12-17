import { useState } from "react";
import { mockTrip } from "./data/mock-trip";
import { ResortHeader } from "./components/resort-header/resort-header";
import { TripPackageOverview } from "./components/trip-package-overview/trip-package-overview";
import { RecommendedForYou } from "./components/recommended-for-you/recommended-for-you";
import styles from "./app.module.css";

export const  App = () => {
  const [trip, setTrip] = useState(mockTrip);

  return (
    <div className={styles.container}>
      <ResortHeader resort={trip.resort} />
      <RecommendedForYou logic={trip.recommendation} />
      <TripPackageOverview trip={trip} />
   </div>
  );
}