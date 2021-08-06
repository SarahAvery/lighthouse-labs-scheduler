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

  // console.log("results", results);

  return results;
}
