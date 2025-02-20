import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export const FromTo = ({ backgroundColor, textColor = "#fff" }) => {
  const route = useRoute();
  const { destination } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <MaterialCommunityIcons name="map-marker" size={24} color={backgroundColor} />
        <View style={styles.locationInfo}>
          <Text style={[styles.locationLabel, { color: '#666' }]}>Konumum</Text>
          <Text style={[styles.locationText, { color: textColor }]}>Kızılay</Text>
        </View>
      </View>
      
      <View style={styles.divider} />
      
      <View style={styles.locationContainer}>
        <MaterialCommunityIcons name="map-marker" size={24} color={backgroundColor} />
        <View style={styles.locationInfo}>
          <Text style={[styles.locationLabel, { color: '#666' }]}>Hedef</Text>
          <Text style={[styles.locationText, { color: textColor }]}>
            {destination || "Hedef seçiniz"}
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  locationContainer: {
    flexDirection: "row",
    marginBottom: 15,
    alignItems: "center",
  },
  locationInfo: {
    marginLeft: 20,
  },
  locationLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
  },
  divider: {
    position: "absolute",
    left: 12,
    height: 28,
    borderWidth: 1,
    top: 42,
    width: 0,
    borderColor: "#EBE7E6",
  },
});