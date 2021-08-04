import InterviewerList from "../components/InterviewerList";
import { action } from "@storybook/addon-actions";

const interviewers = [
  { id: 1, name: "Sylvia Palmer", avatar: "https://i.imgur.com/LpaY82x.png" },
  { id: 2, name: "Tori Malcolm", avatar: "https://i.imgur.com/Nmx0Qxo.png" },
  { id: 3, name: "Mildred Nazir", avatar: "https://i.imgur.com/T2WwVfS.png" },
  { id: 4, name: "Cohana Roy", avatar: "https://i.imgur.com/FK8V841.jpg" },
  { id: 5, name: "Sven Jones", avatar: "https://i.imgur.com/twYrpay.jpg" },
];

export default {
  title: "InterviewerList",
  component: InterviewerList,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e" }],
    },
  },
};

const Template = (args) => <InterviewerList {...args} />;

export const Initial = Template.bind({});
Initial.args = {
  interviewers: interviewers,
  setInterviewer: action("setInterviewer"),
};

export const Preselected = Template.bind({});
Preselected.args = {
  ...Initial.args,
  interviewer: 3,
};
