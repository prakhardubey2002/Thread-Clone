import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const User = ({item}) => {
    return (
        <View>
            <View>
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
                <Text style ={{fontSize:15,fontWeight:"500"}}>{item?.name}</Text>
            </View>
        </View>
    )
}

export default User

const styles = StyleSheet.create({})