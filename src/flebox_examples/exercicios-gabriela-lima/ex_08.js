import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView08() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 8 - Sidebar com Área de Conteúdo</Text>
      <View style={{flexDirection: "row", flex: 1}}>
        <View style={styles.sidebar}>
            <Text style={styles.textStyle}>Sidebar</Text>
        </View>
        <View style={{flexDirection: 'column', flex: 1, padding: 10, gap: 10}}>
        <View style={styles.card1}>
          <Text style={styles.textStyle}>Card 1</Text>
        </View>
        <View style={styles.card2}>
            <Text style={styles.textStyle}>Card 2</Text>
        </View>
        <View style={styles.card3}>
          <Text style={styles.textStyle}>Card 3</Text>
        </View>
        </View>
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
  sidebar: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'gray',

  },
  card1: {
    flex: 1,
    height: 100,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: 'center',
  },
  card2: {
    flex: 1,
    height: 100,
    backgroundColor: "yellow",
    alignItems: 'center',
    justifyContent: 'center',
  },
  card3: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "blue",
  }
});
