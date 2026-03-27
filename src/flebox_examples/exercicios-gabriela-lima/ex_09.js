import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView09() {
  return (
    <View style={styles.container}>
      <View style={styles.fundoPreto}>
        <View style={styles.circulo1}></View>
        <View style={styles.circulo2}></View>
        <View style={styles.circulo3}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
  },
  fundoPreto: {
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  circulo1: {
    height: 100,
    backgroundColor: "red",
    borderRadius: 40,
  },
  circulo2: {
    height: 100,
    backgroundColor: "yellow",
    borderRadius: 40,
  },
  circulo3: {
    height: 100,
    backgroundColor: "green",
    borderRadius: 40,
  },
});
