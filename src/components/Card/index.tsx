import { styles } from "./styles";
import { Text, View } from "react-native";

type PropsCard = {
  name: string;
  email: string;
};

export function Card({ name, email }: PropsCard) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  )
};