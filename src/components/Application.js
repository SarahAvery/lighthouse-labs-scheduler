import React, { useEffect, useState } from "react";
import axios from "axios";
import DayList from "./DayList";
import Appointment from "./Appointment";
import "components/Application.scss";

import { getAppointmentsForDay } from "../helpers/selectors";

// const appointments = [
//   {
//     id: 1,
//     time: "12pm",
//   },
//   {
//     id: 2,
//     time: "1pm",
//     interview: {
//       student: "Lydia Miller",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       },
//     },
//   },
//   {
//     id: 3,
//     time: "3pm",
//     interview: {
//       student: "Lydia Johnson",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       },
//     },
//   },
//   {
//     id: 4,
//     time: "2pm",
//     interview: {
//       student: "Lydia Smith",
//       interviewer: {
//         id: 1,
//         name: "Sylvia Palmer",
//         avatar: "https://i.imgur.com/LpaY82x.png",
//       },
//     },
//   },
// ];

const Nav = (props) => {
  return <nav className="sidebar__menu">{props.children}</nav>;
};
const Hr = () => <hr className="sidebar__separator sidebar--centered" />;
const Image = (props) => <img className={props.className} src={props.src} alt={props.alt} />;
const Section = (props) => <section className={props.className}>{props.children}</section>;

export default function Application(props) {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);

  const setDay = (day) => setState({ ...state, day });
  // const setDays = (days) => setState((prev) => ({ ...prev, days }));

  const baseUrl = "http://localhost:8002/api/";

  useEffect(() => {
    Promise.all([
      axios.get(`${baseUrl}days`),
      axios.get(`${baseUrl}appointments`),
      axios.get(`${baseUrl}interviewers`),
    ]).then(([days, appointments, interviewers]) => {
      console.log(days.data, appointments.data);
      setState((prev) => ({ ...prev, days: days.data, appointments: appointments.data }));
    });
  }, []);

  return (
    <main className="layout">
      <Section className="sidebar">
        <Image className="sidebar--centered" src="images/logo.png" alt="Interview Scheduler" />
        <Hr />
        <Nav>
          <DayList days={state.days} day={state.day} setDay={setDay} />
        </Nav>
        <Image className="sidebar__lhl sidebar--centered" src="images/lhl.png" alt="Lighthouse Labs" />
      </Section>
      <Section className="schedule">
        {dailyAppointments && dailyAppointments.map((appt) => <Appointment key={appt.id} time={appt.time} {...appt} />)}
        <Appointment key="last" time="5pm" />
      </Section>
    </main>
  );
}
