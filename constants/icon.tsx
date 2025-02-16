import Feather from "react-native-vector-icons/Feather";

type FeatherIconProps = {
  size?: number;
  color?: string;
};

export const icon: Record<string, (props: FeatherIconProps) => JSX.Element> = {
  index: (props: FeatherIconProps) => (
    <Feather name="home" size={20} {...props} />
  ),
  add: (props: FeatherIconProps) => (
    <Feather name="plus-circle" size={20} {...props} />
  ),
  profile: (props: FeatherIconProps) => (
    <Feather name="user" size={20} {...props} />
  ),
};
