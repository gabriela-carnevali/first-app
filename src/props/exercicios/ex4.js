import { View, Text, StyleSheet } from "react-native";

export function PerfilAluno ({nome, turma, matricula}) {
    return (
    <View style={styles.card}>
        <Text style={styles.nome}>Nome: {nome}</Text>
        <Text style={styles.info}> Turma: {turma}</Text>
        <Text style={styles.info}> Matrícula: {matricula}</Text>
    </View>
    )
}


const styles = StyleSheet.create({
    card: {
        backgroundColor:'#fff',
        borderRadius: 12,
        padding: 16,
        borderWidth: 1,
        borderColor: '#e5e7eb'
    },
    nome: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 4,
    },
    info: {
        fontSize: 14,
        color: '#6b7280'
    }
})