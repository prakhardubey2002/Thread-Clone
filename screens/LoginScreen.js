import { Image, KeyboardAvoidingView, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
const LoginScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", alignItems: "center" }} >
      <View style={{ marginTop: 50 }} >
        <Image
          style={{ width: 150, height: 100, resizeMode: "contain" }}
          source={{
            uri: "https://seeklogo.com/images/T/threads-logo-E9BA734BF6-seeklogo.com.png?v=638242470460000000"
          }}

        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "center" }}  >
          <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25 }} >Login to your account</Text>
        </View>
        <View style={{ marginTop: 40 }} >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
              padding: 2
            }} >
            <MaterialCommunityIcons style={{
              marginLeft: 8,
            }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300
              }}
              placeholder='Enter your email'
            />
          </View>
          <View style={{ marginTop: 28 }} >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                borderColor: "#D0D0D0",
                borderWidth: 1,
                paddingVertical: 5,
                borderRadius: 5,
                padding: 2
              }} >

              <AntDesign
                style={{
                  marginLeft: 8,
                }}
                name="lock"
                size={24}
                color="gray" />
              <TextInput
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300
                }}
                placeholder='Password'
              />
            </View>
          </View>
          <View style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: 12
          }} >
            <Text>Keep me logged in</Text>
            <Text style={{fontWeight:500,color:"#007FFF"}} >Forget Password</Text>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({})