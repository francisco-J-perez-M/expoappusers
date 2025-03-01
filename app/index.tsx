import { Text, View, Button } from "react-native"
import { useRouter } from "expo-router";

export default function HomeSreen () {
    const router = useRouter();
  return (
    <View>
        <Text> Menu </Text>
        <Button title="Usuarios" onPress={() => router.push('/users')}/>
    </View>
  )
}
