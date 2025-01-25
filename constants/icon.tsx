import Feather from "react-native-vector-icons/Feather";

type FeatherIconProps = {
  size?: number;
  color?: string;
};

export const icon: Record<string, (props: FeatherIconProps) => JSX.Element> = {
  index: (props: FeatherIconProps) => (
    <Feather name="home" size={24} {...props} />
  ),
  explore: (props: FeatherIconProps) => (
    <Feather name="compass" size={24} {...props} />
  ),
  profile: (props: FeatherIconProps) => (
    <Feather name="user" size={24} {...props} />
  ),
};
