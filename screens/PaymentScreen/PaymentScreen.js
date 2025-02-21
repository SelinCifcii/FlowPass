import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView, Alert} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CustomCard } from '../components/CustomCard';
import { FromTo } from '../components/FromTo';
import { useWallet } from '../../context/WalletContext';
import { useWeb3 } from '../../context/Web3Context';
import { useState } from 'react';

const THEME_COLOR = "#4ECDC4";

export const PaymentScreen = () => {
  const nav = useNavigation();
  const route = useRoute();
  const { ticketType, route: busRoute, price, unitsPrice, destination, departuretime, arrivaltime } = route.params;
  const { balance, deductBalance } = useWallet();
  const [currentLocation, setCurrentLocation] = useState("Kızılay");
  const { biletSatinAl } = useWeb3();

  const handlePayment = async () => {
    try {
      const biletId = 1; // Sabit bilet ID'si kullanıyoruz
      console.log('Bilet satın alma başlatılıyor, ID:', biletId);

      const success = await biletSatinAl(
        biletId,
        false, // İleri tarihli değil
        true   // Bakiye kullan
      );

      if (success) {
        deductBalance(unitsPrice, busRoute);
        nav.navigate("TicketSuccess", {
          ticketType,
          route: busRoute,
          price,
          unitsPrice,
          destination,
          departuretime,
          arrivaltime,
          biletId
        });
      } else {
        Alert.alert('Hata', 'Bilet satın alınamadı');
      }
    } catch (error) {
      console.error('Ödeme hatası:', error);
      Alert.alert('Hata', 'Ödeme işlemi başarısız');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Payment</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <CustomCard style={styles.ticketCard}>
          <View style={styles.ticketHeader}>
            <MaterialCommunityIcons name="ticket-outline" size={24} color={THEME_COLOR} />
            <Text style={styles.ticketTitle}>Ticket Details</Text>
          </View>

          <View style={styles.divider} />

          <FromTo 
            backgroundColor={THEME_COLOR}
            textColor="#fff"
            from={currentLocation}
            to={destination}
          />

          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <MaterialCommunityIcons name="clock-outline" size={20} color={THEME_COLOR} />
              <View style={styles.detailTexts}>
                <Text style={styles.detailLabel}>Departure Time</Text>
                <Text style={styles.detailValue}>
                  {departuretime} - {arrivaltime}
                </Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <MaterialCommunityIcons name="routes" size={20} color={THEME_COLOR} />
              <View style={styles.detailTexts}>
                <Text style={styles.detailLabel}>Route</Text>
                <Text style={styles.detailValue}>{busRoute}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <MaterialCommunityIcons name="account-outline" size={20} color={THEME_COLOR} />
              <View style={styles.detailTexts}>
                <Text style={styles.detailLabel}>Ticket Type</Text>
                <Text style={styles.detailValue}>{ticketType}</Text>
              </View>
            </View>
          </View>
        </CustomCard>

        <CustomCard style={styles.paymentCard}>
          <View style={styles.ticketHeader}>
            <MaterialCommunityIcons name="wallet-outline" size={24} color={THEME_COLOR} />
            <Text style={styles.ticketTitle}>Payment Details</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Current Balance</Text>
            <Text style={styles.balanceValue}>{balance.toFixed(2)} UNIT0</Text>
          </View>

          <View style={styles.priceContainer}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Price</Text>
              <View style={styles.priceValues}>
                <Text style={styles.priceValue}>${price.toFixed(2)}</Text>
                <Text style={styles.unitsValue}>{unitsPrice.toFixed(2)} UNIT0</Text>
              </View>
            </View>
          </View>
        </CustomCard>

        <TouchableOpacity 
          style={styles.payButton}
          onPress={handlePayment}
        >
          <Text style={styles.payButtonText}>Complete Payment</Text>
          <MaterialCommunityIcons name="arrow-right" size={24} color="#000" />
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 12,
    backgroundColor: '#1E1E1E',
  },
  backButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#2d2d2d',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fff',
  },
  content: {
    flex: 1,
  },
  ticketCard: {
    backgroundColor: '#1E1E1E',
    margin: 20,
    padding: 20,
    borderRadius: 16,
  },
  paymentCard: {
    backgroundColor: '#1E1E1E',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 16,
  },
  ticketHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  ticketTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 10,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginBottom: 20,
  },
  detailsContainer: {
    marginTop: 20,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  detailTexts: {
    marginLeft: 15,
  },
  detailLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  balanceContainer: {
    backgroundColor: '#2d2d2d',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  balanceLabel: {
    fontSize: 12,
    color: '#666',
    marginBottom: 4,
  },
  balanceValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  priceContainer: {
    backgroundColor: '#2d2d2d',
    padding: 15,
    borderRadius: 12,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  priceLabel: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  priceValues: {
    alignItems: 'flex-end',
  },
  priceValue: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  unitsValue: {
    fontSize: 12,
    color: THEME_COLOR,
    marginTop: 2,
  },
  payButton: {
    backgroundColor: THEME_COLOR,
    margin: 20,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  payButtonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 8,
  },
});