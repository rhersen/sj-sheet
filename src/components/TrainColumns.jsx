import React from "react";
import _ from "lodash";
import trains from "../trains.js";
import Column from "./Column.jsx";

export default function TrainColumns({ announcements, locations }) {
  return (
    <>
      {_.map(trains(announcements, new Date()), (id) => (
        <Column
          key={id}
          announcements={announcements}
          id={id}
          locations={locations}
        />
      ))}
    </>
  );
}
