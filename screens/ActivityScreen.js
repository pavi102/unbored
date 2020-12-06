import React from 'react'
import { Text, StyleSheet, View } from 'react-native'


const ActivityScreen = () => {
    const activities = ["Go out for a walk", "Make some tea", "Meditate for 10 minutes", "Do 20 pushups", "Learn a new breakfast recipe"]
    let randomActivity = activities[Math.floor(Math.random() * activities.length)]
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.mainText}>{randomActivity}</Text>
            </View>

        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34393b',
        alignItems: 'center',
    },
    textContainer: {
        backgroundColor: '#34393b',
        margin: '10%',
        alignItems: 'center',
    },
    mainText: {
        fontSize: 30,
        fontFamily: 'monospace',
        color: '#a3a6ad',
        alignSelf: 'center',


    },
})

export default ActivityScreen;