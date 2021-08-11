# Interview Scheduler

## Project Description

Interview Scheduler is a SPA used for scheduling students interviews.
It is built using React (v 16.9.0), and utilizes Storybook (v 6.3.6).

The App utilizes React built-in, and custom hooks which allows users to add, edit, and delete appointments.

The data is persisted by the API server using PostgreSQL database.

This project was built based on TDD, with the use of Jest (v 4.0.0) and React Testing-library (v 12.0.0). Cypress (v 8.2.0) was used in the end-to-end testing.

## Project Features

- Appointment days (Monday to Friday) are displayed, and are colour-coordinated depending on availability
- Each day shows the number of appointments that are currently available to be booked
- Days display currently remaining spots, and update after each modification
- A user can choose a day and see detailed appointment information
- Booked and Empty appointment slots are clearly visable
- A user can book an interview by typing in a students name, then choosing an interviewer from a list of interviewers
- A user can change the details of an existing interview by clicking the edit icon
- A user can delete an existing interview, a confirmation message for the wanted deletion will appear before permanently deleting an interview

### Daily Schedule View

### Booking an Appointment

### Deleting Appointment

## Setup

Install dependencies with `yarn install`.

## Running Webpack Development Server

```sh
yarn start
```

## Running Jest Test Framework

```sh
yarn test
```

## Running Storybook Visual Testbed

```sh
yarn storybook
```

## Dependencies

- axios (0.21.1)
- babel (6.23.0)
- classnames (2.3.1)
- cypress (8.2.0)
- normalize.css (8.0.1)
- react (16.9.0)
- react-dom (16.9.0)
- react-hooks-testing-library (0.6.0)
- react-scripts (4.0.0)
- react-test-renderer (17.0.2)
- @storybook/addon-essentials (6.3.6)
- @storybook/addon-links (6.3.6)
- @storybook/addons (6.3.6)
- @storybook/node-logger (6.3.6)
- @storybook/preset-create-react-app (3.2.0)
- @storybook/react (6.3.6)
- @testing-library/jest-dom (4.0.0)
- @testing-library/react (12.0.0)
- node-sass (4.14.0)
