import { Alert, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import axios from 'axios';
const RegisterScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigation();
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    }
    axios.post("http://localhost:3000/register", user).then((response) => {
      console.log(response);
      Alert.alert("Registeration successfull", "You have been registred successfully")
      setEmail("");
      setName("");
      setPassword("");
    }).catch((error) => {
      Alert.alert("Registration Failed", "An error occured during registration");
      console.log("error", error);
    })
  }
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
          <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25 }} >Register your account</Text>
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


            <Ionicons
              style={{
                marginLeft: 8,
              }}
              name="person"
              size={24}
              color="gray"
            />
            <TextInput
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              value={name}
              onChangeText={(text) => setName(text)}
              placeholder='Enter your name'
            />
          </View>
        </View>
        <View style={{ marginTop: 30 }} >

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
                width: 300,
                fontSize: email ? 16 : 16
              }}
              value={email}
              onChangeText={(text) => setEmail(text)}
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
                secureTextEntry={true}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize: password ? 16 : 16,
                }}
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder='Password'
              />
            </View>
          </View>

        </View>
        <View style={{ marginTop: 45 }} >
          <Pressable
            onPress={handleRegister}
            style={{
              width: 200,
              backgroundColor: "black",
              padding: 15,
              marginTop: 40,
              marginLeft: "auto",
              marginRight: "auto",
              borderRadius: 6,
              flexDirection: "row",
              gap: 8,
              justifyContent: "center",
              alignItems: "center"
            }} >
            <Ionicons name="person" size={20} color="white" />
            <Text style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
              fontSize: 16,


            }} >Register</Text>
          </Pressable>
          <Pressable
            onPress={() => navigation.goBack()}
            style={{ marginTop: 10 }} >
            <Text
              style={{
                textAlign: "center",
                fontSize: 16
              }}
            >
              Already have a account?Login
            </Text>
          </Pressable>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default RegisterScreen

const styles = StyleSheet.create({})