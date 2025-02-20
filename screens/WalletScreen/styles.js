import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    header: {
      paddingTop: 60,
      paddingHorizontal: 24,
      paddingBottom: 20,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
      color: '#fff',
    },
    balanceCard: {
      backgroundColor: '#2d2d2d',
      marginHorizontal: 24,
      padding: 20,
      borderRadius: 15,
    },
    balanceTitle: {
      fontSize: 16,
      color: '#666',
      marginBottom: 8,
    },
    balanceAmount: {
      fontSize: 36,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 20,
    },
    balanceActions: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    actionButton: {
      alignItems: 'center',
    },
    actionButtonText: {
      color: '#fff',
      marginTop: 4,
    },
    transactionsContainer: {
      flex: 1,
      marginTop: 24,
    },
    sectionTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
      marginHorizontal: 24,
      marginBottom: 16,
    },
    transactionsList: {
      paddingHorizontal: 24,
    },
    transactionItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#2d2d2d',
      padding: 16,
      borderRadius: 12,
      marginBottom: 8,
    },
    transactionLeft: {
      flexDirection: 'row',
      alignItems: 'center',
      flex: 1,
    },
    transactionInfo: {
      marginLeft: 12,
      flex: 1,
    },
    transactionTitle: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fff',
    },
    transactionDate: {
      fontSize: 14,
      color: '#666',
      marginTop: 4,
    },
    transactionAmountContainer: {
      alignItems: 'flex-end',
      minWidth: 100,
    },
    transactionAmount: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    unitText: {
      fontSize: 12,
      color: '#666',
      marginTop: 2,
    },
    noTransactions: {
      color: '#666',
      textAlign: 'center',
      marginTop: 20,
      fontSize: 16,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalContent: {
      backgroundColor: '#2d2d2d',
      padding: 20,
      borderRadius: 15,
      width: '80%',
    },
    modalTitle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#fff',
      marginBottom: 10,
    },
    modalSubtitle: {
      fontSize: 16,
      color: '#666',
      marginBottom: 20,
    },
    input: {
      backgroundColor: '#1a1a1a',
      padding: 15,
      borderRadius: 10,
      color: '#fff',
      fontSize: 18,
      marginBottom: 20,
    },
    modalButtons: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    modalButton: {
      flex: 1,
      padding: 15,
      borderRadius: 10,
      marginHorizontal: 5,
    },
    cancelButton: {
      backgroundColor: '#666',
    },
    addButton: {
      backgroundColor: '#35A2C1',
    },
    buttonText: {
      color: '#fff',
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 16,
    },
  });