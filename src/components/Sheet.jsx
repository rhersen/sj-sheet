import React from "react";
// import StationsColumn from "./StationsColumn"
import TrainColumns from "./TrainColumns"

export default function ({ announcements, locations }) {
  return (
    <div id="sheet">
      <TrainColumns announcements={announcements} locations={locations} />
    </div>
  );
}
