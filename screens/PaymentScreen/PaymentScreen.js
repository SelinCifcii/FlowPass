import * as React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput, SafeAreaView, ScrollView} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { CustomCard } from '../components/CustomCard';
import { FromTo } from '../components/FromTo';
import { useWallet } from '../../context/WalletContext';

const THEME_COLOR = "#4ECDC4";

export const PaymentScreen = () => {
  const nav = useNavigation();
  const route = useRoute();
  const { price, unitsPrice, ticketType, route: busRoute, destination, departuretime, arrivaltime } = route.params;
  const { deductBalance, balance } = useWallet();
   
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => nav.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={20} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Ödeme</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <CustomCard style={styles.ticketCard}>
          <View style={styles.ticketHeader}>
            <MaterialCommunityIcons name="ticket-outline" size={24} color={THEME_COLOR} />
            <Text style={styles.ticketTitle}>Bilet Detayları</Text>
          </View>

          <View style={styles.divider} />

          <FromTo backgroundColor={THEME_COLOR} textColor="#fff" />

          <View style={styles.detailsContainer}>
            <View style={styles.detailRow}>
              <MaterialCommunityIcons name="clock-outline" size={20} color={THEME_COLOR} />
              <View style={styles.detailTexts}>
                <Text style={styles.detailLabel}>Sefer Saati</Text>
                <Text style={styles.detailValue}>
                  {departuretime} - {arrivaltime}
                </Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <MaterialCommunityIcons name="routes" size={20} color={THEME_COLOR} />
              <View style={styles.detailTexts}>
                <Text style={styles.detailLabel}>Hat</Text>
                <Text style={styles.detailValue}>{busRoute}</Text>
              </View>
            </View>

            <View style={styles.detailRow}>
              <MaterialCommunityIcons name="account-outline" size={20} color={THEME_COLOR} />
              <View style={styles.detailTexts}>
                <Text style={styles.detailLabel}>Yolcu Tipi</Text>
                <Text style={styles.detailValue}>{ticketType}</Text>
              </View>
            </View>
          </View>
        </CustomCard>

        <CustomCard style={styles.paymentCard}>
          <View style={styles.ticketHeader}>
            <MaterialCommunityIcons name="wallet-outline" size={24} color={THEME_COLOR} />
            <Text style={styles.ticketTitle}>Ödeme Bilgileri</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.balanceContainer}>
            <Text style={styles.balanceLabel}>Mevcut Bakiye</Text>
            <Text style={styles.balanceValue}>{balance.toFixed(2)} UNITS</Text>
          </View>

          <View style={styles.priceContainer}>
            <View style={styles.priceRow}>
              <Text style={styles.priceLabel}>Ücret</Text>
              <View style={styles.priceValues}>
                <Text style={styles.priceValue}>₺{price.toFixed(2)}</Text>
                <Text style={styles.unitsValue}>{unitsPrice.toFixed(2)} UNITS</Text>
              </View>
            </View>
          </View>
        </CustomCard>

        <TouchableOpacity 
          style={styles.payButton}
          onPress={() => {
            deductBalance(unitsPrice, busRoute);
            nav.navigate("TicketSuccess", {
              ticketType,
              route: busRoute,
              price,
              unitsPrice,
              destination,
              departuretime,
              arrivaltime
            });
          }}
        >
          <Text style={styles.payButtonText}>Ödemeyi Tamamla</Text>
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