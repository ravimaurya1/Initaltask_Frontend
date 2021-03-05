import React from "react";
import Button from "./Button";
import Center from "../Center/Center";

export default {
  title: "Form/Button",
  component: Button,
  //   decorators: [(story) => <Center>{story()}</Center>],
};

// Non args Mechanism
export const Primary = () => <Button variant="primary">Primary</Button>;
export const Secondary = () => <Button variant="secondary">Secondary</Button>;
export const Success = () => <Button variant="success">Success</Button>;
export const Danger = () => <Button variant="danger">Danger</Button>;

// Args Mechanism
// const Template = (args) => <Button {...args} />;

// export const PrimaryA = Template.bind({});
// PrimaryA.args = {
//   variant: "primary",
//   children: "Primary Args",
// };

// export const SecondaryA = Template.bind({});
// SecondaryA.args = {
//   variant: "secondary",
//   children: "Secondary Args",
// };
