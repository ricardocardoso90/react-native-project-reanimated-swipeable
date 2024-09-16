import { styles } from "./styles";
import { MaterialIcons } from "@expo/vector-icons";
import { ColorValue, TouchableOpacity, TouchableOpacityProps } from "react-native";

type OptionProps = TouchableOpacityProps & {
  icon: keyof typeof MaterialIcons.glyphMap;
  backgroundColor: ColorValue;
};

export function Option({ icon, backgroundColor, ...rest }: OptionProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[
        styles.container,
        { backgroundColor }
      ]}
      {...rest}
    >
      <MaterialIcons
        name={icon}
        size={24}
        color="#FFF"
      />
    </TouchableOpacity>
  )
};