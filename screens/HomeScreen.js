import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native'


const HomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>Unbored</Text>
                <View style={styles.horizontalLine} />
                <TouchableOpacity onPress={() => navigation.navigate('Activity')}>
                    <Text style={styles.mainText}>What to do</Text>
                    <Text style={styles.mainText}>right now?</Text>
                </TouchableOpacity>
                <View style={styles.horizontalLine} />
                <TouchableOpacity onPress={() => navigation.navigate('TellMeMore')}>
                    <Text style={styles.mainText}>Something</Text>
                    <Text style={styles.mainText}>more</Text>
                </TouchableOpacity>
                <View style={styles.horizontalLine} />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34393b',
        alignItems: 'center',
    },
    textContainer: {
        backgroundColor: '#34393b',
        margin: '15%',
        alignItems: 'center',

    },
    mainText: {
        fontSize: 30,
        fontFamily: 'monospace',
        color: '#a3a6ad',
        alignSelf: 'center',
        paddingHorizontal: '10%'

    },
    horizontalLine: {
        borderBottomColor: '#a3a6ad',
        borderBottomWidth: 2,
        alignSelf: 'stretch',
        marginHorizontal: "12%",
        marginTop: "10%",
        marginBottom: "20%",
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
});

export default HomeScreen;