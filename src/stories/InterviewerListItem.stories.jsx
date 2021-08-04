import InterviewerListItem from "../components/InterviewerListItem";

const interviewer = {
  id: 1,
  name: "Sylvia Palmer",
  avatar: "https://i.imgur.com/LpaY82x.png",
};

export default {
  title: "InterviewerListItem",
  component: InterviewerListItem,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e" }],
    },
  },
};

const Template = (args) => <InterviewerListItem {...args} />;

export const Unselected = Template.bind({});
Unselected.args = {
  id: interviewer.id,
  name: interviewer.name,
  avatar: interviewer.avatar,
};

export const Selected = Template.bind({});
Selected.args = {
  ...Unselected.args,
  selected: true,
};

export const Clickable = Template.bind({});
Clickable.args = {
  ...Unselected.args,
};
Clickable.argTypes = {
  setInterviewer: { action: "setInterviewer" },
};
