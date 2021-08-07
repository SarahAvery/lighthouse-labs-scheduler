import { useState, useEffect } from "react";
import axios from "axios";

function useApplicationData() {
  const baseUrl = "http://localhost:8002/api/";

  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: [],
    interviewers: [],
  });

  function updateSpots(state, day) {
    const currentDay = day || state.day;
    const currentDayObj = state.days.find((dayObj) => dayObj.name === currentDay);
    const currentDayObjIndex = state.days.findIndex((dayObj) => dayObj.name === currentDay);

    const listOfApptIds = currentDayObj.appointments;
    console.log("listOfApptIds ", listOfApptIds);

    const listOfFreeAppts = listOfApptIds.filter((apptId) => !state.appointments[apptId].interview);

    const newSpots = listOfFreeAppts.length;

    const updatedState = { ...state };
    updatedState.days = [...state.days];
    const updatedDay = { ...currentDayObj };

    updatedDay.spots = newSpots;

    updatedState.days[currentDayObjIndex] = updatedDay;
    console.log(updatedState.days);

    return updatedState.days;
  }

  function bookInterview(id, interview) {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview },
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    const days = updateSpots(state, state.day);
    return axios
      .put(`${baseUrl}appointments/${id}`, { interview })
      .then(() => setState({ ...state, appointments, days }));
  }

  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const days = updateSpots(state, state.day);
    return axios.delete(`${baseUrl}appointments/${id}`).then(() => {
      setState({ ...state, appointment, days });
    });
  }

  const setDay = (day) => setState({ ...state, day });

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

  console.log("state ", state);
  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}

export default useApplicationData;
