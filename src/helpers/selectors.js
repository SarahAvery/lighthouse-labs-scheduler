export function getAppointmentsForDay(state, day) {
  const validDays = state.days.map((day) => day.name);

  if (!day || !validDays.includes(day)) return [];

  return state.days
    .filter((currDay) => currDay.name === day)[0]
    .appointments.map((apptId) => state.appointments[apptId]);
}
