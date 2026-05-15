import { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";

export default function ListaDeCompras() {
  const [produto, setProduto] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [produtos, setProdutos] = useState([])

  function handleAdicionar() {
    if (produto.trim() === "") {
      Alert.alert("Atenção", "Digite o nome do produto antes de adicionar");
      return;
    }
    else if (quantidade <= 0) {
        Alert.alert("Atenção", "A quantidade precisa ser positiva")
    }

    const novoProduto = {
        id: Date.now().toString(),
        nome: produto,
        quantidade: quantidade,
    }

    setProdutos([...produto, novoProduto])
    setProduto("")
    setQuantidade("")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Lista de Compras</Text>

      <View style={styles.exemplo}>
        <TextInput
          style={styles.input}
          value={produto}
          onChangeText={setProduto}
          placeholder="Nome do produto"
        />

        <TextInput
          style={styles.input}
          value={quantidade}
          keyboardType="numeric"
          onChangeText={setQuantidade}
          placeholder="Quantidade"
        />

        <TouchableOpacity style={styles.botao} onPress={handleAdicionar}>
          <Text style={styles.textoBotao}>Adicionar</Text>
        </TouchableOpacity>
      </View>
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
  input: {
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  botao: {
    backgroundColor: "#4285f4",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 4,
  },
  textoBotao: {
    color: "#fff",
    fontWeight: "bold",
  },
});

