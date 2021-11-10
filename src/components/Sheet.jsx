import React from "react";
import StationsColumn from "./StationsColumn.jsx";
import TrainColumns from "./TrainColumns";
import styles from "./Sheet.module.scss";

export default function ({ announcements, locations }) {
  return (
    <div className={styles.sheet}>
      <StationsColumn locations={locations} />
      <TrainColumns announcements={announcements} locations={locations} />
    </div>
  );
}
