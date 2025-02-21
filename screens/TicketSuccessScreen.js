import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CustomCard } from './components/CustomCard';
import QRCode from 'react-native-qrcode-svg';
import LottieView from 'lottie-react-native';
import { useState, useEffect, useRef } from 'react';
import { FromTo } from './components/FromTo';

const THEME_COLOR = "#4ECDC4";
const { width } = Dimensions.get('window');

export const TicketSuccessScreen = () => {
  const nav = useNavigation();
  const route = useRoute();
  const animation = useRef(null);
  const { ticketType, route: busRoute, price, unitsPrice, destination, departuretime, arrivaltime } = route.params;
  const [currentLocation, setCurrentLocation] = useState("Kızılay");

  useEffect(() => {
    // Animasyonu sürekli tekrarla
    if (animation.current) {
      animation.current.play();
      
      // Animasyon bittiğinde tekrar başlat
      animation.current.onAnimationFinish = () => {
        setTimeout(() => {
          if (animation.current) {
            animation.current.reset();
            animation.current.play();
          }
        }, 500); // 500ms bekle ve tekrar başlat
      };
    }
  }, []);

  const ticketData = JSON.stringify({
    type: ticketType,
    route: busRoute,
    price: unitsPrice,
    destination,
    departure: departuretime,
    arrival: arrivaltime,
    timestamp: new Date().toISOString()
  });

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.content}>
          <View style={styles.animationContainer}>
            <LottieView
              ref={animation}
              source={require('../assets/animation/success.json')}
              style={styles.animation}
              autoPlay={true}
              loop={true}
              speed={0.8}
              resizeMode="cover"
            />
          </View>
          
          <Text style={styles.title}>Payment Successful!</Text>
          <Text style={styles.subtitle}>Your ticket is ready</Text>

          <CustomCard style={styles.ticketCard}>
            <FromTo 
              backgroundColor={THEME_COLOR}
              textColor="#fff"
              from={currentLocation}
              to={destination}
            />

            <View style={styles.qrContainer}>
              <QRCode
                value={ticketData}
                size={200}
                backgroundColor="#2d2d2d"
                color="#fff"
              />
            </View>

            <View style={styles.divider} />

            <View style={styles.ticketDetail}>
              <Text style={styles.label}>Route</Text>
              <Text style={styles.value}>{busRoute}</Text>
            </View>
            
            <View style={styles.ticketDetail}>
              <Text style={styles.label}>Ticket Type</Text>
              <Text style={styles.value}>{ticketType}</Text>
            </View>

            <View style={styles.ticketDetail}>
              <Text style={styles.label}>Departure Time</Text>
              <Text style={styles.value}>{departuretime} - {arrivaltime}</Text>
            </View>

            <View style={styles.ticketDetail}>
              <Text style={styles.label}>Price</Text>
              <Text style={styles.value}>{unitsPrice.toFixed(2)} UNIT0</Text>
            </View>
          </CustomCard>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => nav.navigate('HomeMain')}
          >
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    paddingBottom: 40,
  },
  animationContainer: {
    width: width * 0.5,
    height: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#999',
    marginTop: 8,
    marginBottom: 30,
  },
  ticketCard: {
    backgroundColor: '#2d2d2d',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#333',
  },
  qrContainer: {
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#444',
    marginVertical: 20,
  },
  ticketDetail: {
    marginBottom: 16,
  },
  label: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  value: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  button: {
    backgroundColor: '#4ECDC4',
    paddingVertical: 16,
    paddingHorizontal: 32,
    borderRadius: 12,
    marginTop: 30,
    width: '100%',
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});