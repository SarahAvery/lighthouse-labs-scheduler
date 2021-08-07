import React, { Fragment } from "react";
import "components/Appointment/styles.scss";
import Header from "./Header";
import Show from "./Show";
import Empty from "./Empty";
import Form from "./Form";
import Status from "./Status";
import Confirm from "./Confirm";
import Error from "./Error";

import useVisualMode from "hooks/useVisualMode";

const EMPTY = "EMPTY";
const SHOW = "SHOW";
const CREATE = "CREATE";
const SAVING = "SAVING";
const DELETING = "DELETEING";
const CONFIRMING = "CONFIRMING";
const EDIT = "EDIT";
const ERROR_SAVE = "ERROR_SAVE";
const ERROR_DELETE = "ERROR_DELETE";

const Appointment = (props) => {
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);
  console.log(props.interview);
  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer,
    };
    props
      .bookInterview(props.id, interview)
      .then((response) => {
        setTimeout(() => {
          transition(SHOW);
        }, 1000);
      })
      .catch((error) => {
        transition(ERROR_SAVE, true);
      });
  }

  function deleting() {
    transition(DELETING, true);
    props
      .cancelInterview(props.id)
      .then((response) => {
        setTimeout(() => {
          transition(EMPTY);
        }, 1000);
      })
      .catch((error) => transition(ERROR_DELETE, true));
  }

  function confirmation() {
    transition(CONFIRMING);
  }

  function editing() {
    transition(EDIT);
  }

  return (
    <article className="appointment">
      <Fragment>
        <Header time={props.time} />
        {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
        {mode === SHOW && (
          <Show
            student={props.interview.student}
            interviewer={props.interview.interviewer}
            onDelete={() => confirmation()}
            onEdit={() => editing()}
          />
        )}
        {mode === CONFIRMING && (
          <Confirm onConfirm={() => deleting()} onCancel={back} message="Are you sure you want to delete?" />
        )}
        {mode === DELETING && <Status message="deleting" />}
        {mode === SAVING && <Status message="saving" />}
        {mode === CREATE && <Form interviewers={props.interviewers} onCancel={back} onSave={save} />}
        {mode === EDIT && (
          <Form
            interviewers={props.interviewers}
            interviewer={props.interview.interviewer.id}
            name={props.interview.student}
            onCancel={back}
            onSave={save}
          />
        )}
        {mode === ERROR_SAVE && <Error message="Error occured while trying to save" onClose={back} />}
        {mode === ERROR_DELETE && <Error message="Error occured while trying to delete" onClose={back} />}
      </Fragment>
    </article>
  );
};

export default Appointment;
