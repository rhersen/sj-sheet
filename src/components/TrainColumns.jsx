import React from "react";
import _ from "lodash";
import trains from "../trains.js";
import Column from "./Column.jsx";
import styles from "./TrainColumns.module.scss";

export default function TrainColumns({ announcements, locations }) {
  return (
    <div className={styles.tr}>
      {_.map(trains(announcements, new Date()), (id) => (
        <Column
          key={id}
          announcements={announcements}
          id={id}
          locations={locations}
        />
      ))}
    </div>
  );
}
