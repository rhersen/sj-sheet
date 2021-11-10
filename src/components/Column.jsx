import React from "react";
import _ from "lodash";
import Time from "./Time";
import ColumnHead from "./ColumnHead.jsx";

function times(announcements) {
  return _.keyBy(
    announcements,
    (a) => `${a.LocationSignature}${a.AdvertisedTrainIdent}${a.ActivityType}`
  );
}

export default function Column({ announcements, id, locations }) {
  const ts = times(announcements);
  return (
    <>
      <ColumnHead announcements={announcements} id={id} />
      {_.map(locations, (loc) =>
        _.map(["Ankomst", "Avgang"], (activityType) => (
          <Time
            key={loc + activityType}
            activityType={activityType}
            times={ts}
            loc={loc}
            id={id}
          />
        ))
      )}
    </>
  );
}
