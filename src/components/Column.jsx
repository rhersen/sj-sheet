import React from "react";
import _ from "lodash";
import Time from "./Time";

function times(announcements) {
  return _.keyBy(
    announcements,
    (a) => `${a.LocationSignature}${a.AdvertisedTrainIdent}${a.ActivityType}`
  );
}

function Column({ announcements, id, locations }) {
  const ts = times(announcements);
  return (
    <div className="tc">
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
    </div>
  );
}

export default Column;
