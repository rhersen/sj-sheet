import React from "react";
import _ from "lodash";
import styles from "./ColumnHead.module.scss";

export default function ColumnHead({ announcements, id }) {
  const found = _.find(
    announcements,
    (a) => a.AdvertisedTrainIdent === id && a.ToLocation
  );
  return (
    <>
      <span className={styles.prod}>
        {_.get(found, "ProductInformation.0")}
      </span>
      <span>{_.map(_.get(found, "ToLocation"), "LocationName")}</span>
      <span>{id}</span>
    </>
  );
}
