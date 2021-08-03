/* eslint-disable import/no-anonymous-default-export */
import Button from "../components/Button";

export default {
  title: "Button",
  component: Button,
  parameters: {
    backgrounds: {
      default: "dark",
      values: [{ name: "dark", value: "#222f3e" }]
    }
  }
};

const Template = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "Base"
};

export const Confirm = Template.bind({})
Confirm.args = {
  confirm: true,
  children: "Confirm"
}

export const Danger = Template.bind({})
Danger.args = {
  danger: true,
  children: "Cancel"
}

export const Clickable = Template.bind({})
Clickable.args = {
  children: "Clickable",
}
Clickable.argTypes = {
  onClick: { action: "button-clicked"}
}

export const Disabled = Template.bind({})
Disabled.args = {
  disabled: true,
  children: "Disabled",
}
Disabled.argTypes = {
  onClick: { action: "button-clicked"}
}