import React, { useEffect, useState } from "react";
import axios from "axios";
import DayList from "./DayList";
import Appointment from "./Appointment";
import "components/Application.scss";

import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "../helpers/selectors";

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
    interviewers: [],
  });

  const dailyAppointments = getAppointmentsForDay(state, state.day);
  const interviewers = getInterviewersForDay(state, state.day);

  const schedule = dailyAppointments.map((appt) => {
    const interview = getInterview(state, appt.interview);
    console.log(appt);
    return (
      <Appointment key={appt.id} id={appt.id} time={appt.time} interview={interview} interviewers={interviewers} />
    );
  });

  const setDay = (day) => setState({ ...state, day });

  const baseUrl = "http://localhost:8002/api/";

  useEffect(() => {
    Promise.all([
      axios.get(`${baseUrl}days`),
      axios.get(`${baseUrl}appointments`),
      axios.get(`${baseUrl}interviewers`),
    ]).then(([days, appointments, interviewers]) => {
      setState((prev) => ({
        ...prev,
        days: days.data,
        appointments: appointments.data,
        interviewers: interviewers.data,
      }));
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
        {schedule}
        <Appointment key="last" time="5pm" />
      </Section>
    </main>
  );
}
