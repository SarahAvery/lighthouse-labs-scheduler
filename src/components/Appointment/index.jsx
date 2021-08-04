import React, { Fragment } from "react";
// import PropTypes from "prop-types";
// import classNames from "classnames";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";

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
