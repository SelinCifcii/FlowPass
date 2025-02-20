import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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