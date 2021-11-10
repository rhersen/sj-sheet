import React from "react";
import _ from "lodash";
import Time from "./Time";
import ColumnHead from "./ColumnHead.jsx";
import styles from "./Column.module.scss";

function times(announcements) {
  return _.keyBy(
    announcements,
    (a) => `${a.LocationSignature}${a.AdvertisedTrainIdent}${a.ActivityType}`
  );
}

export default function Column({ announcements, id, locations }) {
  const ts = times(announcements);
  return (
    <div className={styles.tc}>
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
    </div>
  );
}
