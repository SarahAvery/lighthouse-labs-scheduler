import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "components/DayListItem.scss";

const DayListItem = (props) => {
  const formatSpots = (spots) => {
    const num = props.spots || "no";
    const spotsStr = props.spots === 1 ? "spot" : "spots";

    return `${num} ${spotsStr} remaining`;
  };

  return (
    <li
      onClick={() => props.setDay && props.setDay(props.name)}
      className={classNames("day-list__item", {
        "day-list__item--full": props.spots === 0,
        "day-list__item--selected": props.selected,
      })}
    >
      <h2 className="text--regular">{props.name}</h2>
      <h3 className="text--light">{formatSpots(props.spots)}</h3>
    </li>
  );
};

DayListItem.propTypes = {
  /** the name of the day */
  name: PropTypes.string,
  /** the number of spots remaining */
  spots: PropTypes.number,
  /** true or false declaring that this day is selected */
  selected: PropTypes.bool,
  /** accepts the name of the day eg. "Monday", "Tuesday" */
  setDay: PropTypes.func,
};

DayListItem.defaultProps = {
  selected: false,
};

export default DayListItem;
