import { useUser } from '@/hooks/useUser'
import { User } from '@/types/User';
import React from 'react'
import {View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';


const UserlistScren = () => {
    const {error, loading, users} = useUser();

    if (loading) {
        return <ActivityIndicator size='large' color='red' />
    }

    if (error){
        return <Text>{error}</Text>;
    }
    const renderItem= ({item}: {item:User})=>(
        <View>
            <Text>{item.email}</Text>
            <Text>{item.name}</Text>
            <Text>{item.phone}</Text>
        </View>
    )

    return (
        <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}/>
    )
}

export default UserlistScren