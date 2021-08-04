import React, { Fragment } from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

const appointments = [
  {
    id: 1,
    time: "12pm",
  },
  {
    id: 2,
    time: "1pm",
    interview: {
      student: "Lydia Miller",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },
  {
    id: 4,
    time: "3pm",
    interview: {
      student: "Lydia Johnson",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },
  {
    id: 3,
    time: "2pm",
    interview: {
      student: "Lydia Smith",
      interviewer: {
        id: 1,
        name: "Sylvia Palmer",
        avatar: "https://i.imgur.com/LpaY82x.png",
      },
    },
  },
];

const Appointment = (props) => {
  return (
    <article className="appointment">
      <Fragment>
        <Header time={props.time} />
        {props.interview ? <Show {...props.interview} /> : <Empty />}
      </Fragment>
    </article>
  );
};

export default Appointment;
