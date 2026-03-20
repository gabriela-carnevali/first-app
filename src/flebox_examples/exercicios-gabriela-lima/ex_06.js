import { StyleSheet, Text, View } from "react-native";

export default function ExercicioView06() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exercício 6 - Header, Conteúdo e Footer</Text>
      <View style={{flexDirection: "column", flex: 1}}>
        <View style={styles.header}>
          <Text style={styles.textStyle}>Header</Text>
        </View>
        <View style={styles.mainContent}>
            <Text style={styles.textStyle}>Main Content</Text>
        </View>
        <View style={styles.footer}>
          <Text style={styles.textStyle}>Footer</Text>
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
  header: {
    height: 60,
    backgroundColor: "green",
    alignItems: "center",
    justifyContent: 'center',
  },
  footer: {
    height: 50, 
    backgroundColor: "blue",
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "gray",

  }
});
