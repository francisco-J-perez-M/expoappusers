import { useRouter } from "expo-router";
import React, { useState } from "react";
import { View, TextInput, Button, Alert, StyleSheet } from "react-native";

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = () => {
        Alert.alert("Debug", "Entrando a handleLogin");
        
        if (email === "hola@gmail.com" && password === "123456") {
            Alert.alert("Éxito", "Redirigiendo...");
            router.replace("/(tabs)");
        } else {
            Alert.alert("Error", "Credenciales inválidas");
        }
    };
    

    return (
        <View style={styles.container}>
            <TextInput
                placeholder="Correo"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                style={styles.input}
            />

            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
                style={styles.input}
            />

            <Button title="INGRESAR" onPress={handleLogin} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", padding: 20 },
    input: { borderBottomWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 }
});
