import React from "react";
import PropTypes from "prop-types";
import InterviewerListItem from "./InterviewerListItem";
import "components/InterviewerList.scss";

const InterviewerList = (props) => {
  return (
    <section className="interviewers">
      <h4 className="interviewers__header text--light">Interviewer</h4>
      <ul className="interviewers__list">
        {props.interviewers &&
          props.interviewers.map((interviewer) => (
            <InterviewerListItem
              key={interviewer.id}
              name={interviewer.name}
              avatar={interviewer.avatar}
              setInterviewer={(event) => props.setInterviewer(interviewer.id)}
              selected={interviewer.id === props.interviewer}
            />
          ))}
      </ul>
    </section>
  );
};

InterviewerList.propTypes = {
  interviewer: PropTypes.number,
  interviewers: PropTypes.array,
  setInterviewer: PropTypes.func,
};

export default InterviewerList;
