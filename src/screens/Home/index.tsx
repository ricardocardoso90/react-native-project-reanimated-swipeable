import { useRef } from "react";
import { styles } from "./styles";
import { View, FlatList } from "react-native";
import { contacts } from "../../utils/contacts";
import { Card } from "../../components/Card";
import { Option } from "../../components/Option";

import Swipeable, { SwipeableMethods } from "react-native-gesture-handler/ReanimatedSwipeable";

export function Home() {
  const openSwipeableRef = useRef<SwipeableMethods | null>(null);

  function onSwipeableWillOpen(direction: "left" | "right", current: SwipeableMethods | null) {
    // direction === "left" ? console.warn("DELETAR") : console.warn("RIGHT");
    if (openSwipeableRef.current) {
      openSwipeableRef.current.close();
    };

    openSwipeableRef.current = current;
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={({ item }) => {
          let current: SwipeableMethods | null = null;

          return (
            <Swipeable
              // friction={1.5}
              // rightThreshold={50}
              // overshootFriction={10}
              overshootRight={false}
              ref={swipeable => current = swipeable}
              onSwipeableWillOpen={(direction) => onSwipeableWillOpen(direction, current)}

              containerStyle={styles.swipeableContainer}
              renderRightActions={() => (
                <View style={styles.rightActions}>
                  <Option icon="open-in-new" backgroundColor="#00B960" />
                  <Option icon="close" backgroundColor="#3E68D7" />
                </View>
              )}

              overshootLeft={false}
              renderLeftActions={() => (
                <View style={styles.leftActions}>
                  <Option icon="delete" backgroundColor="#E83D55" />
                </View>
              )}
            >
              <Card
                name={item.name}
                email={item.email}
              />
            </Swipeable>
          )
        }
        }
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      />
    </View>
  )
};