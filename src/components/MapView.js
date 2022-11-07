import MapView,{Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React from 'react';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   justifyContent: 'flex-end',
   alignItems: 'center',
 
 },
 
 map: {
   ...StyleSheet.absoluteFillObject,
 },
});

export default () => (
   <View style={styles.container}>
    
     <MapView
      zoomControlEnabled={true}
      zoomEnabled={true}
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
         latitude: 21.0506866,
         longitude: 105.8047464,
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     ><Marker coordinate={{
      latitude: 21.0506866,
      longitude: 105.8047464,}}>

      </Marker>
     </MapView>
   </View>
);