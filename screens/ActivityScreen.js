import { Alert, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';
import jwt_decode from "jwt-decode"
import axios from 'axios';
const ActivityScreen = () => {
  const [selectedButton, setSelectedButton] = useState("people");
  const [content, setContent] = useState("People Content");
  const [users,setUsers]=useState([]);
  const handleButtonClick = (buttonname) => {
    setSelectedButton(buttonname);
  }
  useEffect(() => {
    const fetchUsers = async () => {
      const token = AsyncStorage.getItem("authToken");
      const decodedToken = jwt_decode(token);
      const userId = decodedToken.userId;
      setUserID(userId);
      axios.get(`http://localhost:3000/users/${userId}`)
      .then((response) => {
        setUsers(response.data)
      })
    }
  }, [])
  return (
    <ScrollView style={{ marginTop: 50 }} >
      <View style={{ padding: 10 }} >
        <Text
          style={{
            fontSize: 18,
            fontWeight: "bold"
          }} >Activity</Text>

        <View
          style={
            {
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
              marginTop: 12
            }
          } >
          <TouchableOpacity
            onPress={() => handleButtonClick("people")}
            style={[// passing array [] so that we can set background color condition selectively
              {
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: "white",
                borderColor: "#D0D0D0",
                borderRadius: 6,
                borderWidth: 0.7,
              },
              selectedButton === "people" ? { backgroundColor: "black" } : null,
            ]} >

            <Text
              style={[//passing arary so we can selectively update color according to state
                {
                  textAlign: "center",
                  fontWeight: "bold"
                },
                selectedButton === "people" ? { color: "white" } : { color: "black" }
              ]} >
              People
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonClick("all")}
            style={[// passing array [] so that we can background color condition selectively
              {
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: "white",
                borderColor: "#D0D0D0",
                borderRadius: 6,
                borderWidth: 0.7,
              },
              selectedButton === "all" ? { backgroundColor: "black" } : null,
            ]} >

            <Text
              style={[//passing array so we can selectively update color according to state
                {
                  textAlign: "center",
                  fontWeight: "bold"
                },
                selectedButton === "all" ? { color: "white" } : { color: "black" }
              ]} >
              All
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleButtonClick("requests")}
            style={[// passing array [] so that we can background color condition selectively
              {
                flex: 1,
                paddingVertical: 10,
                paddingHorizontal: 20,
                backgroundColor: "white",
                borderColor: "#D0D0D0",
                borderRadius: 6,
                borderWidth: 0.7,
              },
              selectedButton === "requests" ? { backgroundColor: "black" } : null,
            ]} >

            <Text
              style={[//passing arary so we can selectively update color according to state
                {
                  textAlign: "center",
                  fontWeight: "bold"
                },
                selectedButton === "requests" ? { color: "white" } : { color: "black" }
              ]} >
              Requests
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView >
  )
}

export default ActivityScreen

const styles = StyleSheet.create({})