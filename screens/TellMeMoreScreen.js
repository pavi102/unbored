import React, { useState } from "react";
import { View, Picker, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const TellMeMore = ( {navigation }) => {
    const [timeValue, setTimeValue] = useState('Time')
    const [groupSizeValue, setGroupSizeValue] = useState(' ')
    const [interestsValue, setInterestsValue] = useState('Interests')
    const [typeValue, setTypeValue] = useState("restaurant");
    return (
        <View style={styles.container}>
            <View style={{ backgroundColor: 'white', margin: 20 }}>
                <Picker
                    enabled={false}
                    selectedValue={timeValue}
                    style={{ height: 50, width: 150, borderColor: "white" }}
                    onValueChange={(itemValue, itemIndex) => setTimeValue(itemValue)}
                >
                    <Picker.Item label="Time" value="time" />
                </Picker>
            </View>
            <View style={{ backgroundColor: 'white', margin: 20}}>
                <Picker
                    enabled={false}
                    selectedValue={groupSizeValue}
                    style={{ height: 50, width: 150, borderColor: "white" }}
                    onValueChange={(itemValue, itemIndex) => setGroupSizeValue(itemValue)}
                >
                    <Picker.Item label="Group Size" value='1' />
                    
                </Picker>
            </View>
            <View style={{ backgroundColor: 'white', margin: 20 }}>
                <Picker
                    enabled={false}
                    selectedValue={typeValue}
                    style={{ height: 50, width: 150, borderColor: "white" }}
                    onValueChange={(itemValue, itemIndex) => setTypeValue(itemValue)}
                >
                    <Picker.Item label="Interests" value="interests" />
                </Picker>
            </View>
            <View style={{ backgroundColor: 'white', margin: 20 }}>
                <Picker

                    selectedValue={typeValue}
                    style={{ height: 50, width: 150, borderColor: "white" }}
                    onValueChange={(itemValue, itemIndex) => setTypeValue(itemValue)}
                >
                    <Picker.Item label="Food" value="restaurant" />
                </Picker>
            </View>
            <TouchableOpacity onPress={()=> navigation.navigate('Reccomendation', {typeValue: typeValue}) }>
                <Text style={{fontSize: 30, color: '#a3a6ad', margin: 20}}>Unbored Me</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        alignItems: "center",
        backgroundColor: "#34393b",
        justifyContent: 'center'
    },

});

export default TellMeMore;