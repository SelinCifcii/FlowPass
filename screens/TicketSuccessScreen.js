import * as React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';
import { CustomCard } from './components/CustomCard';
import QRCode from 'react-native-qrcode-svg';

export const TicketSuccessScreen = () => {
  const nav = useNavigation();
  const route = useRoute();
  const { ticketType, route: busRoute, price, unitsPrice, destination, departuretime, arrivaltime } = route.params;

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
          <MaterialCommunityIcons name="check-circle" size={80} color="#4ECDC4" />
          <Text style={styles.title}>Ödeme Başarılı!</Text>
          <Text style={styles.subtitle}>Biletiniz hazır</Text>

          <CustomCard style={styles.ticketCard}>
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
              <Text style={styles.label}>Güzergah</Text>
              <Text style={styles.value}>{busRoute}</Text>
            </View>
            
            <View style={styles.ticketDetail}>
              <Text style={styles.label}>Yolcu Tipi</Text>
              <Text style={styles.value}>{ticketType}</Text>
            </View>

            <View style={styles.ticketDetail}>
              <Text style={styles.label}>Sefer Saati</Text>
              <Text style={styles.value}>{departuretime} - {arrivaltime}</Text>
            </View>

            <View style={styles.ticketDetail}>
              <Text style={styles.label}>Ücret</Text>
              <Text style={styles.value}>{unitsPrice.toFixed(2)} UNITS</Text>
            </View>
          </CustomCard>

          <TouchableOpacity 
            style={styles.button}
            onPress={() => nav.navigate('HomeMain')}
          >
            <Text style={styles.buttonText}>Ana Sayfaya Dön</Text>
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
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginTop: 20,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 8,
    marginBottom: 30,
  },
  ticketCard: {
    backgroundColor: '#2d2d2d',
    padding: 20,
    borderRadius: 16,
    width: '100%',
    marginTop: 20,
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
    color: '#666',
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