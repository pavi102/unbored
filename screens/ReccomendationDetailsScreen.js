import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image, Dimensions } from 'react-native'
import Mapview, { PROVIDER_GOOGLE } from 'react-native-maps'

const ReccomendationDetailsScreen = (props) => {
    const placeDetails = props.route.params.item
    const { width, height } = Dimensions.get('window')
    const ASPECT_RATIO = width / height
    const lat = placeDetails.geometry.location.lat
    const lng = placeDetails.geometry.location.lng
    const northeastLat = placeDetails.geometry.viewport.northeast.lat
    const southwestLat = placeDetails.geometry.viewport.southwest.lat
    const latDelta = northeastLat - southwestLat;
    const lngDelta = latDelta * ASPECT_RATIO;
    return (

        <View style={styles.container}>
            {/* <Mapview                            //component was not rendering correctly, was unable to figure out what the issue was
            style={styles.map}
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            initialRegion={{
                latitude: lat,
                longitude: lng,
                latitudeDelta: latDelta,
                longitudeDelta: lngDelta
            }}
            /> */}
            <Text style={styles.mainText}>How about some food?</Text>
            <Image 
                style={{marginTop: '5%'}}
                source={require("../assets/placeholder-map.png")}
            />
            <Text style={styles.mainText}>{placeDetails.name}</Text>                    
            <Text style={styles.mainText}>Rating: {placeDetails.rating}({placeDetails.user_ratings_total})</Text>
            
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34393b',
        alignItems: 'center',
    },
    textContainer: {
        flex: 2,
        backgroundColor: '#34393b',
        alignItems: 'stretch',
        marginTop: '15%'
    },
    mainText: {
        fontSize: 30,
        fontFamily: 'monospace',
        color: '#a3a6ad',
        alignSelf: 'center',
        marginTop: '5%'
    },
    detailsText: {
        color: 'white',

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
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
});

export default ReccomendationDetailsScreen;