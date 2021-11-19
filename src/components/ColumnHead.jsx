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
      <span className={styles.prod}>{product(found)}</span>
      <span >{_.map(_.get(found, "ToLocation"), "LocationName")}</span>
      <span >{id}</span>
    </>
  );
}

function product(found) {
  let match;
  const s1 = _.get(found, "ProductInformation.0");
  match = /^SJ (.*)$/.exec(s1);
  const s2 = match ? match[1] : s1;
  match = /^(.stg).ta(p)endel$/.exec(s2);
  const s3 = match ? match[1] : s2;
  match = /^(.+)t.ge?n?$/.exec(s3);
  const s4 = match ? match[1] : s3;
  match = /^(.+)t.gen (.+)$/.exec(s4);
  return match ? match[1] + match[2] : s4;
}
