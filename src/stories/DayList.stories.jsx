import DayList from "../components/DayList";
import { action } from "@storybook/addon-actions";
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

export default {
  title: "DayList",
  component: DayList,
  parameters: {
    backgrounds: {
      values: [{ name: "dark", value: "#222f3e" }],
    },
  },
};

const Template = (args) => <DayList {...args} />;
const DefaultArgs = {
  setDay: action("setDay"),
};
export const Monday = Template.bind({});
Monday.args = {
  days: days,
  day: "Monday",
  ...DefaultArgs,
};

export const Tuesday = Template.bind({});
Tuesday.args = {
  days: days,
  day: "Tuesday",
  ...DefaultArgs,
};

export const Wednesday = Template.bind({});
Wednesday.args = {
  days: days,
  day: "Wednesday",
  ...DefaultArgs,
};
