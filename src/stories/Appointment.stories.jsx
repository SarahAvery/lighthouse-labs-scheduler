import Appointment from "../components/Appointment";
import AppointmentHeader from "../components/Appointment/Header";
import EmptyAppointment from "../components/Appointment/Empty";
import ShowAppointment from "../components/Appointment/Show";
import ConfirmAppointment from "../components/Appointment/Confirm";
import StatusAppointment from "../components/Appointment/Status";
import ErrorAppointment from "../components/Appointment/Error";
import FormElement from "../components/Appointment/Form";
import React, { Fragment } from "react";
// import { action } from "@storybook/addon-actions";

export default {
  title: "Appointment",
  component: Appointment,
  parameters: {
    backgrounds: {
      default: "white",
      values: [{ name: "white", value: "#fff" }],
    },
  },
};

const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png",
};

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" },
];

const Template = (args) => <Appointment {...args} />;
// export const FullAppointment = Template.bind({});

export const Time = Template.bind({});
Time.args = {
  time: "12pm",
};

const HeaderTemplate = (args) => <AppointmentHeader {...args} />;
export const Header = HeaderTemplate.bind({});
Header.args = {
  ...Time.args,
};

const EmptyTemplate = (args) => <EmptyAppointment {...args} />;
export const Empty = EmptyTemplate.bind({});

Empty.argTypes = {
  onAdd: { action: "onAdd" },
};

const ShowTemplate = (args) => <ShowAppointment {...args} />;
export const Show = ShowTemplate.bind({});
Show.args = {
  student: "Lydia Miller",
  interviewer: interviewer,
};
Show.argTypes = {
  onEdit: { action: "onEdit" },
  onDelete: { action: "onDelete" },
};

const ConfirmTemplate = (args) => <ConfirmAppointment {...args} />;
export const Confirm = ConfirmTemplate.bind({});
Confirm.args = {
  message: "Delete the appointment?",
};
Confirm.argTypes = {
  onConfirm: { action: "onConfirm" },
  onCancel: { action: "onCancel" },
};

const StatusTemplate = (args) => <StatusAppointment {...args} />;
export const Status = StatusTemplate.bind({});
Status.args = {
  message: "Deleting",
};

const ErrorTemplate = (args) => <ErrorAppointment {...args} />;
export const Error = ErrorTemplate.bind({});
Error.args = {
  message: "Could not delete appointment.",
};
Error.argTypes = {
  onClose: { action: "onClose" },
};

const FormTemplate = (args) => <FormElement {...args} />;
export const CreateForm = FormTemplate.bind({});
CreateForm.args = {
  interviewers: interviewers,
};
CreateForm.argTypes = {
  onSave: { action: "onSave" },
  onCancel: { action: "onCancel" },
  reset: { action: "reset" },
};

export const EditForm = FormTemplate.bind({});
EditForm.args = {
  interviewers: interviewers,
  name: "Grumpy",
  interviewer: 1,
};
EditForm.argTypes = {
  onSave: { action: "onSave" },
  onCancel: { action: "onCancel" },
};

export const AppointmentEmpty = () => (
  <Fragment>
    <Appointment id={1} time="12pm" />
    <Appointment id="last" time="1pm" />
  </Fragment>
);

export const AppointmentBooked = () => (
  <Fragment>
    <Appointment id={1} time="12pm" interview={{ student: "Lydia Miller-Jones", interviewer }} />
    <Appointment id="last" time="1pm" />
  </Fragment>
);
