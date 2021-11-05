import React from "react"
import _ from "lodash";
import trains from "../trains.js";
import Column from "./Column.jsx";

function TrainColumns({ announcements, locations }) {
  return (
    <div className="tr tbody">
      {_.map(trains(announcements, new Date()), id => (
        <Column
          key={id}
          announcements={announcements}
          id={id}
          locations={locations}
        />
      ))}
    </div>
  )
}

export default TrainColumns
