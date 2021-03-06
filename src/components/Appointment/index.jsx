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
  function save(name, interviewer) {
    transition(SAVING);
    const interview = {
      student: name,
      interviewer,
    };
    props
      .bookInterview(props.id, interview)
      .then((response) => {
        transition(SHOW);
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
        transition(EMPTY);
      })
      .catch((error) => transition(ERROR_DELETE, true));
  }

  function confirmation() {
    transition(CONFIRMING);
  }

  function editing() {
    transition(EDIT);
  }
  const { mode, transition, back } = useVisualMode(props.interview ? SHOW : EMPTY);

  return (
    <article className="appointment" data-testid="appointment">
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
          <Confirm onConfirm={() => deleting()} onCancel={back} message="Are you sure you would like to delete?" />
        )}
        {mode === DELETING && <Status message="Deleting" />}
        {mode === SAVING && <Status message="Saving" />}
        {mode === CREATE && <Form interviewers={props.interviewers} onCancel={back} onSave={save} />}
        {mode === EDIT && (
          <Form
            interviewers={props.interviewers}
            interviewer={props.interview.interviewer.id}
            name={props.interview.student}
            onCancel={() => transition(SHOW)}
            onSave={save}
          />
        )}
        {mode === ERROR_SAVE && <Error message="Error occured while trying to save" onClose={back} />}
        {mode === ERROR_DELETE && <Error message="Error occured while trying to delete" onClose={editing} />}
      </Fragment>
    </article>
  );
};

export default Appointment;
