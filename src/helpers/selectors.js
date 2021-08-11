export function getAppointmentsForDay(state, day) {
  const validDays = state.days.map((day) => day.name);

  if (!day || !validDays.includes(day)) return [];

  const results = state.days
    .filter((currDay) => currDay.name === day)[0]
    .appointments.map((apptId) => state.appointments[apptId]);

  return results;
}

export function getInterview(state, interview) {
  if (!interview) {
    return null;
  }

  const student = {
    student: interview.student,
  };

  student.interviewer = state.interviewers[interview.interviewer];

  return student;
}

export function getInterviewersForDay(state, day) {
  const validDays = state.days.map((day) => day.name);

  if (!day || !validDays.includes(day)) return [];

  const results = state.days
    .filter((currDay) => currDay.name === day)[0]
    .interviewers.map((apptId) => state.interviewers[apptId]);

  return results;
}

export const updateSpots = (state, day) => {
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

  return updatedState.days;
};
