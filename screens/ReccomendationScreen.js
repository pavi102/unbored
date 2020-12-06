import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import * as Location from 'expo-location'

const MAPS_API_KEY = 'AIzaSyCkS91qhInYXjcoB5O3DdRVtJBFOgWU-4s'

const ReccomendationScreen = (props) => {
	const typeValue = props.route.params.typeValue
	const [errorMessage, setErrorMessage] = useState(null)
	const [nearbyPlaces, setNearbyPlaces] = useState([])

	useEffect(() => {
		load()
	}, [])
	async function load() {
		try {

			// let { status } = await Location.requestPermissionsAsync()                  There was an issue with the location tracker package

			// if (status != 'granted') {
			// 	setErrorMessage('Acccess to location is needed to use this feature')
			// 	return
			// // }
			// const location = await Location.getCurrentPositionAsync()


			const latitude = "49.24974060058594"
			const longitude = "-123.00155639648438"

			const response = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${latitude},${longitude}&type=${typeValue}&radius=200&key=${MAPS_API_KEY}`)

			const result = await response.json()


			if (result.status == "OK") {
				setNearbyPlaces(result)
			}
			else {
				setErrorMessage("Unable to find anything nearby")
			}


		} catch (error) {
			console.log("error")
			setErrorMessage("Unknown Error")
		}
	}

	const renderItem = ({ item }) => {
		return (
			<TouchableOpacity onPress={() =>
				props.navigation.navigate("ReccomendationDetails", {item} )
			}>
				<View style={styles.itemRow}>
					<Text style={styles.listText}>{item.name}</Text>
				</View>
			</TouchableOpacity>
		)
	}
	if (errorMessage != null && nearbyPlaces.length == 0) {
		return (
			<Text style={styles.mainText}>{errorMessage}</Text>
		)
	}
	return (
		<View style={styles.container}>
			<FlatList
				style={styles.listContainer}
				data={nearbyPlaces.results}
				renderItem={renderItem}
				keyExtractor={(item, index) => index.toString()}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#5c626e',
		fontFamily: 'monospace'
	},
	mainText: {
		color: "#b0bacf",
		fontSize: 40,
		textAlign: 'center',
		paddingTop: '15%'
	},
	listContainer: {
		marginTop: "15%",
		marginLeft: "10%",
		marginRight: "10%",
	},
	line: {
		borderWidth: 1.5,
		borderColor: '#b0bacf',
		marginTop: 15,
		marginLeft: 100,
		marginRight: 100
	},
	itemRow: {
		backgroundColor: "white",
		borderBottomColor: "#fff",
		height: 50,
		justifyContent: 'center',
		marginBottom: 10,
		borderBottomWidth: 1,
		elevation: 20
	},
	listText: {
		color: "grey",
		textAlign: "center",
		fontSize: 25,
	}
});


export default ReccomendationScreen;