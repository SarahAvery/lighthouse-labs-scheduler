import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "components/InterviewerListItem.scss";

const InterviewerListItem = (props) => {
  return (
    <li
      className={classNames("interviewers__item", {
        "interviewers__item--selected": props.selected,
      })}
      onClick={(e) => props.setInterviewer(props.id)}
    >
      <img className="interviewers__item-image" src={props.avatar} alt={props.name} />
      {props.selected && props.name}
    </li>
  );
};

InterviewerListItem.propTypes = {
  name: PropTypes.string,
  avatar: PropTypes.string,
  selected: PropTypes.bool,
};

export default InterviewerListItem;
