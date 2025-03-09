import AsyncStorage from '@react-native-async-storage/async-storage'

//guardar los volores de almacenamiento
export const storeData = async(Key: string , value: string)=>{
    try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem(Key, jsonValue);
    } catch (error) {
        console.log('Error al guardar en storage', error);
    }
}

//obtener los valores almacenados
export const getData = async(Key: string) =>{
    try {
        const jsonValue = await AsyncStorage.getItem(Key);
        return jsonValue ? JSON.parse(jsonValue) : null;
    } catch (error) {
        console.log('Error al obtener getdata', error);
    }
}

//eliminar los valores almacenados
export const removeData = async(key: string) =>{
    try {
        await AsyncStorage.removeItem(key);
    } catch (error) {
        console.log('Error al obtener removedata', error);
    }
}

//actualizar los valores almacenados
export const clearStorage = async() =>{
    try {
        await AsyncStorage.clear();
    } catch (error) {
        console.log('Error al obterne clearStorage ', error);
    }
}
