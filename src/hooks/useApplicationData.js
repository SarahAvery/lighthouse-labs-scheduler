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

    const listOfFreeAppts = listOfApptIds.filter((apptId) => !state.appointments[apptId].interview);

    const newSpots = listOfFreeAppts.length;

    const updatedState = { ...state };
    updatedState.days = [...state.days];
    const updatedDay = { ...currentDayObj };

    updatedDay.spots = newSpots;

    updatedState.days[currentDayObjIndex] = updatedDay;

    return updatedState;
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
    return axios
      .put(`${baseUrl}appointments/${id}`, { interview })
      .then(() => setState(updateSpots({ ...state, appointments })));
  }
  function cancelInterview(id) {
    const appointment = {
      ...state.appointments[id],
      interview: null,
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment,
    };
    return axios.delete(`${baseUrl}appointments/${id}`).then(() => {
      setState(updateSpots({ ...state, appointments }));
    });
  }

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([axios.get(`/api/days`), axios.get(`/api/appointments`), axios.get(`/api/interviewers`)]).then(
      ([days, appointments, interviewers]) => {
        setState((prev) => ({
          ...prev,
          days: days.data,
          appointments: appointments.data,
          interviewers: interviewers.data,
        }));
      }
    );
  }, []);

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview,
  };
}

export default useApplicationData;
