import { StyleSheet } from 'react-native';

export const appStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    justifyContent: "center",
    alignItems: "center",
    top: 60,
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 20,
    marginTop: 4,
    color: "#666",
  },
  input: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#ddd",
    fontSize: 18,
    marginTop: 32,
    width: "99%",
    top: 50,
  },
  buttonContainer: {
    backgroundColor: "lightgreen",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: "center",
    marginTop: 8,
    alignSelf: "flex-end",
    marginRight: 6,
    top: 60,
  },
  buttonText: {
    fontSize: 18,
  },
  divider: {
    height: 1,
    backgroundColor: "#ddd",
    marginVertical: 32,
  },
  taskContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderColor: "#ddd",
    paddingVertical: 12,
    marginTop: 70,
  },
  taskText: {
    fontSize: 18,
    marginStart: 10,
  },
  taskDelete: {
    width: 23,
    height: 23,
    borderRadius: 13,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    marginEnd: 10,
  },
  taskDeleteText: {
    fontSize: 18,
    color: "white",
  },
});