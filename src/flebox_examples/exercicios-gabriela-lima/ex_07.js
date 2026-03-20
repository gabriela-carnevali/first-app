import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView07() {
  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <View style={styles.redBox}></View>
        <View style={styles.blueBox}></View>
      </View>

      <View style={styles.containerRow}>
        <View style={styles.greenBox}></View>
        <View style={styles.orangeBox}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    padding: 20,
    flexDirection: 'column',
  },
  containerRow: {
    gap: 20,
    flexDirection: "row",
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  redBox: {
    backgroundColor: "red",
    flex: 1,
  },
  greenBox: {
    backgroundColor: "green",
    flex: 1,
  },
  blueBox: {
    backgroundColor: "blue",
    flex: 1,
  },
  orangeBox: {
    backgroundColor: "orange",
    flex: 1,
  },
});
