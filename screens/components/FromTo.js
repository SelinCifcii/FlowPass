import * as React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const THEME_COLOR = "#4ECDC4"; 

export const FromTo = ({ backgroundColor = THEME_COLOR, textColor = "#fff" }) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <View style={[styles.locationDot, { backgroundColor }]} />
        <Text style={[styles.locationText, { color: textColor }]}>Kızılay</Text>
      </View>

      <View style={styles.line}>
        <MaterialCommunityIcons 
          name="dots-vertical" 
          size={24} 
          color={backgroundColor} 
          style={styles.dots}
        />
      </View>

      <View style={styles.locationContainer}>
        <View style={[styles.locationDot, { backgroundColor }]} />
        <Text style={[styles.locationText, { color: textColor }]}>Çayyolu</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  locationDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginRight: 12,
  },
  locationText: {
    fontSize: 16,
    fontWeight: '500',
  },
  line: {
    position: 'absolute',
    left: 15,
    top: 28,
    bottom: 28,
    width: 2,
    alignItems: 'center',
  },
  dots: {
    position: 'absolute',
    left: -11,
    top: '50%',
    marginTop: -12,
  }
});