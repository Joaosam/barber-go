import colors from "@/app/styles/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black.primary,
    paddingTop: 20,
    paddingInline: 16,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
    paddingBottom: 32,
    borderBottomWidth: 1,
    borderColor: colors.gray[300],
  },
  textHeader: {
    color: colors.white,
    fontSize: 22,
    fontWeight: "bold",
  },
  calendarContainer: {
    marginTop: 12,
    paddingBottom: 10,
    borderRadius: 10,
    backgroundColor: "transparent",
  },
  calendarHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBlock: 10,
    width: "100%",
  },
  calendarHeaderMonth: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  calendarArrowButton: {
    padding: 4,
    borderWidth: 1,
    borderColor: colors.gray[100],
    borderRadius: 8,
  },
  calendarArrow: {
    color: colors.white,
    fontSize: 18,
    fontWeight: "bold",
  },
  timeChipsSection: {
    marginTop: 10,
    borderColor: colors.gray[300],
    borderTopWidth: 1,
    paddingBlock: 24,
  },
  timeSectionContainer: {
    marginLeft: 16,
    flexDirection: "row",
    gap: 12,
  },
  timeChip: {
    width: 80,
    paddingBlock: 12,
    borderWidth: 1,
    borderColor: colors.gray[100],
    borderRadius: 99,
    alignItems: "center",
  },
  timeChipSelected: {
    backgroundColor: colors.purple.primary,
    borderColor: colors.purple.primary,
  },
  timeChipText: {
    color: colors.white,
    fontWeight: "600",
  },
  timeChipTextSelected: {
    color: colors.white,
  },
  confirmButton: {
    backgroundColor: colors.purple.primary,
    padding: 15,
    borderRadius: 10,
    margin: 15,
    alignItems: "center",
    marginTop: 20,
  },
  confirmButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
