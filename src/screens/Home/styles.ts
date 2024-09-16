import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#000'
  },
  swipeableContainer: {
    backgroundColor: '#1D1F27',
    borderRadius: 5
  },
  rightActions: {
    flexDirection: 'row',
  },
  leftActions: {
    backgroundColor: '#E83D55',
  },
  content: {
    gap: 14,
  }
});