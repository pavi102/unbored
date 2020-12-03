import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location'
import ReccomendationList from './components/ReccomendationList'

const MAPS_API_KEY = ''

export default function App() {

  const [errorMessage, setErrorMessage] = useState(null)
  const [nearbyPlaces, setNearbyPlaces] = useState(null)
  
  useEffect(() => {
    load()
  }, [])
  async function load() {
    try {
      let { status } = await Location.requestPermissionsAsync()

      if(status != 'granted') {
        setErrorMessage('Acccess to location is needed to use this feature')
        return
      }
      const location = await Location.getCurrentPositionAsync()

      const {latitude, longitude} = location.coords

      const placesUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&radius=50&key=${MAPS_API_KEY}`
      
      const response = await fetch(placesUrl)

      const result = await response.json()

      if(response.status == "OK") {
        setNearbyPlaces(result)
        console.log(result)
      }
      else {
        setErrorMessage("Unable to find anything nearby")
      }
      
    }  catch (error) { 
      
    }
  }
  if(nearbyPlaces != null){
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.main}>
          <ReccomendationList nearbyPlaces={nearbyPlaces}></ReccomendationList>
        </View>
      </View>
    );
  }
  else {
    return (
      <View style={styles.container}>
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  main: {
    justifyContent: 'center',
    flex: 1
  }
});
