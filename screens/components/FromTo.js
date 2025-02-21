import * as React from 'react';
import { View, StyleSheet, Text, Dimensions, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useEffect, useRef } from 'react';

const { width } = Dimensions.get('window');
const THEME_COLOR = "#4ECDC4"; 

export const FromTo = ({ backgroundColor = THEME_COLOR, textColor = "#fff" }) => {
  const lineAnimation = useRef(new Animated.Value(0)).current;
  const dotAnimation = useRef(new Animated.Value(0)).current;

  const startAnimation = () => {
    // Reset animations
    lineAnimation.setValue(0);
    dotAnimation.setValue(0);

    // Start animations
    Animated.sequence([
      Animated.timing(dotAnimation, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
      Animated.timing(lineAnimation, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();
  };

  useEffect(() => {
    const interval = setInterval(() => {
      startAnimation();
    }, 3000); // Her 3 saniyede bir tekrarla

    startAnimation(); // İlk animasyonu başlat

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Animated.View style={[styles.dotContainer, {
          opacity: dotAnimation,
          transform: [{
            scale: dotAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1]
            })
          }]
        }]}>
          <View style={[styles.locationDot, { backgroundColor }]} />
          <View style={[styles.innerDot, { backgroundColor: '#1E1E1E' }]} />
        </Animated.View>
        <View style={styles.textContainer}>
          <Text style={[styles.label, { color: '#999' }]}>From</Text>
          <Text style={[styles.locationText, { color: textColor }]}>Kızılay</Text>
        </View>
      </View>

      <View style={styles.lineContainer}>
        <Animated.View style={[
          styles.line, 
          { 
            backgroundColor: backgroundColor + '30',
            transform: [{
              scaleY: lineAnimation
            }],
            opacity: lineAnimation
          }
        ]} />
        <Animated.View style={{
          opacity: lineAnimation,
          transform: [{
            translateY: lineAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [-10, 0]
            })
          }]
        }}>
          <MaterialCommunityIcons 
            name="chevron-down" 
            size={24} 
            color={backgroundColor} 
            style={styles.icon}
          />
        </Animated.View>
      </View>

      <View style={styles.locationContainer}>
        <Animated.View style={[styles.dotContainer, {
          opacity: dotAnimation,
          transform: [{
            scale: dotAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [0.5, 1]
            })
          }]
        }]}>
          <View style={[styles.locationDot, { backgroundColor }]} />
          <View style={[styles.innerDot, { backgroundColor: '#1E1E1E' }]} />
        </Animated.View>
        <View style={styles.textContainer}>
          <Text style={[styles.label, { color: '#999' }]}>To</Text>
          <Text style={[styles.locationText, { color: textColor }]}>Çayyolu</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    width: '100%',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  dotContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  locationDot: {
    width: 24,
    height: 24,
    borderRadius: 12,
    position: 'absolute',
    opacity: 0.2,
  },
  innerDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    borderWidth: 2.5,
    borderColor: THEME_COLOR,
  },
  textContainer: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    marginBottom: 4,
    fontWeight: '500',
  },
  locationText: {
    fontSize: 16,
    fontWeight: '600',
  },
  lineContainer: {
    paddingLeft: 11,
    height: 32,
    justifyContent: 'center',
  },
  line: {
    position: 'absolute',
    left: 11,
    width: 2,
    height: '100%',
    borderRadius: 1,
  },
  icon: {
    position: 'absolute',
    left: -1,
    top: '50%',
    marginTop: -12,
  }
});