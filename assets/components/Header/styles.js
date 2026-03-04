import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    height: 80,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  left: {
    flex: 1,
  },

  center: {
    flex: 3,
    alignItems: "center",
  },

  right: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    gap: 12,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
  },

  subtitle: {
    fontSize: 12,
    opacity: 0.6,
  },

  icon: {
    width: 24,
    height: 24,
  },

  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
});