import { styles } from "./styles";
import { View, FlatList } from "react-native";
import { contacts } from "../../utils/contacts";
import { Card } from "../../components/Card";

import Swipeable from "react-native-gesture-handler/ReanimatedSwipeable";

export function Home() {
  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Swipeable>
            <Card
              name={item.name}
              email={item.email}
            />
          </Swipeable>
        )}
        contentContainerStyle={styles.content}
      />
    </View>
  )
};