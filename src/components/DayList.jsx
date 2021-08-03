import React from "react";
import PropTypes from "prop-types";
import DayListItem from "./DayListItem";

const DayList = (props) => {
  return (
    <ul>
      {props.days.map((day) => (
        <DayListItem
          key={day.id}
          id={day.id}
          name={day.name}
          spots={day.spots}
          selected={day.name === props.day}
          setDay={props.setDay}
        />
      ))}
    </ul>
  );
};

DayList.propTypes = {
  days: PropTypes.array,
  day: PropTypes.string,
  setDay: PropTypes.func,
};

export default DayList;
