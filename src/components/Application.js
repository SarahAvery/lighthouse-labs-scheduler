import React, { useState } from "react";
import DayList from "./DayList";
import Appointment from "./Appointment";
import "components/Application.scss";

const days = [
  {
    id: 1,
    name: "Monday",
    spots: 2,
  },
  {
    id: 2,
    name: "Tuesday",
    spots: 5,
  },
  {
    id: 3,
    name: "Wednesday",
    spots: 0,
  },
];

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
    id: 3,
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
    id: 4,
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

const Nav = (props) => {
  return <nav className="sidebar__menu">{props.children}</nav>;
};
const Hr = () => <hr className="sidebar__separator sidebar--centered" />;
const Image = (props) => <img className={props.className} src={props.src} alt={props.alt} />;
const Section = (props) => <section className={props.className}>{props.children}</section>;

export default function Application(props) {
  const [day, setDay] = useState("Monday");

  return (
    <main className="layout">
      <Section className="sidebar">
        <Image className="sidebar--centered" src="images/logo.png" alt="Interview Scheduler" />
        <Hr />
        <Nav>
          <DayList days={days} day={day} setDay={setDay} />
        </Nav>
        <Image className="sidebar__lhl sidebar--centered" src="images/lhl.png" alt="Lighthouse Labs" />
      </Section>
      <Section className="schedule">
        {appointments && appointments.map((appt) => <Appointment key={appt.id} time={appt.time} {...appt} />)}
        <Appointment key="last" time="5pm" />
      </Section>
    </main>
  );
}
