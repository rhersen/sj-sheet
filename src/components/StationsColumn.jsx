import React from "react";
import _ from "lodash";
import shortLocationName from "../shortLocationName.js";
import styles from "./StationsColumn.module.scss";

export default function StationsColumn({ locations }) {
  return (
    <div className={styles.tc}>
      <span className="td station">
        prod
        <br />
        dest
        <br />
        train
      </span>
      {_.map(locations, (loc) =>
        _.map(["Ankomst", "Avgang"], (activity) => (
          <span key={loc + activity} className="td station">
            {activity.substr(0, 3).toLowerCase()}{" "}
            {(shortLocationName[loc] || loc).substr(0, 14)}
          </span>
        ))
      )}
    </div>
  );
}
