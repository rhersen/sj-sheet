import { addMinutes, formatISO, subMinutes } from "date-fns";
import _ from "lodash";

export default (announcements, now) => {
  const lowerBound = formatISO(subMinutes(now, 120));
  const upperBound = formatISO(addMinutes(now, 90));
  return _.difference(
    ids(announcements),
    ids(_.filter(announcements, isTooEarly)),
    ids(_.filter(announcements, isTooLate)),
    ids(_.reject(announcements, isPendel))
  ).sort(byAdvertisedTime);

  function isTooEarly(a) {
    return estimatedTime(a) < lowerBound;
  }

  function isTooLate(a) {
    return estimatedTime(a) > upperBound;
  }

  function isPendel(a) {
    return _.some(
      _.filter(announcements, {
        AdvertisedTrainIdent: a.AdvertisedTrainIdent,
      }),
      (announcement) => announcement.ToLocation
    );
  }

  function byAdvertisedTime(leftId, rightId) {
    const left = _.filter(announcements, { AdvertisedTrainIdent: leftId });

    for (let i = 0; i < left.length; i++) {
      const right = _.find(announcements, {
        AdvertisedTrainIdent: rightId,
        LocationSignature: left[i].LocationSignature,
        ActivityType: left[i].ActivityType,
      });

      if (right) return compareTimes(left[i], right);
    }
  }
};

function ids(announcements) {
  return _.uniq(_.map(announcements, "AdvertisedTrainIdent"));
}

function estimatedTime(a) {
  return a.AdvertisedTimeAtLocation || a.AdvertisedTimeAtLocation;
}

function compareTimes(a1, a2) {
  const time1 = a1.AdvertisedTimeAtLocation;
  const time2 = a2.AdvertisedTimeAtLocation;
  if (time1 < time2) return -1;
  if (time1 > time2) return 1;
  return 0;
}
