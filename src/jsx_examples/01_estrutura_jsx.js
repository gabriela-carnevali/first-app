import { View, Text, StyleSheet } from "react-native";

export function EstruturaJSX() {
  return (
// Retorno único
    <View>
      <Text> Exemplo de retorno único </Text>

{/* // Retorno único com Fragment <> </> */}
      <View>
        <>
          <Text></Text>
          {/* Exemplo SelfClose */}
          <View/>

        </>
      </View>
    </View>
  );
}

export default function Exemplo_01() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Exemplo 01 - Estrutura </Text>
      <Text style={styles.subtitulo}>Subtítulo do exemplo</Text>
      {/* VAMOS CONSTRUIR AQUI E USAR styles.exemplo */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  titulo: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  subtitulo: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#4285f4",
    marginBottom: 8,
  },
  exemplo: {
    width: "80%",
    padding: 16,
    marginBottom: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
  },
});
