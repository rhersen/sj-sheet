import React from "react";
import _ from "lodash";
import shortLocationName from "../shortLocationName.js";
import styles from "./StationsColumn.module.scss";

export default function StationsColumn({ locations }) {
  return (
    <>
      <span className={styles.prod}>prod</span>
      <span className={styles.dest}>dest</span>
      <span className={styles.train}>train</span>
      {_.map(locations, (loc) =>
        _.map(["Ankomst", "Avgang"], (activity) => (
          <span key={loc + activity} className={styles.td}>
            {activity.substr(0, 3).toLowerCase()}{" "}
            {(shortLocationName[loc] || loc).substr(0, 14)}
          </span>
        ))
      )}
    </>
  );
}
