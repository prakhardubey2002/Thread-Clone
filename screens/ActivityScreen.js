import { Alert, Image, KeyboardAvoidingView, Pressable, SafeAreaView, StyleSheet, Text, TextInput, View, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const ActivityScreen = () => {
  const [selectedButton, setSelectedButton] = useState("people");
  const [content, setContent] = useState("People Content")
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
          <TouchableOpacity style={[// passing array [] so that we can background color condition selectively
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

        </View>
      </View>
    </ScrollView >
  )
}

export default ActivityScreen

const styles = StyleSheet.create({})