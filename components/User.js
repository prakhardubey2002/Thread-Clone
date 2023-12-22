import { Alert, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const User = ({ item }) => {
    return (
        <View>
            <View style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 10,
            }} >
                <Image
                    style={{
                        width: 40,
                        height: 40,
                        borderRadius: 20,
                        resizeMode: "contain"
                    }}
                    source={{
                        uri: "https://i.pinimg.com/236x/2b/93/d8/2b93d8b64d3350b1151ac2ef05e89702.jpg"
                    }}
                />
                <Text
                    style={{
                        fontSize: 15,
                        fontWeight: "500",
                        flex: 1,
                    }}>
                    {item?.name}</Text>
                <Pressable
                onPress={()=>sendFollow(userId,item._id)}
                    style={{
                        borderColor: "#D0D0D0",
                        borderWidth: 1,
                        padding: 10,
                        marginLeft: 10,
                        width: 100,
                        borderRadius: 7
                    }} >
                    <Text style={{
                        textAlign: 'center',
                        fontSize: 15,
                        fontWeight: "bold"
                    }} >
                        Follow
                    </Text>

                </Pressable>
            </View>
        </View>
    )
}

export default User

const styles = StyleSheet.create({})