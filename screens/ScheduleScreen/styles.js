import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#121212',
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 20,
      paddingTop: 50,
    },
    backButton: {
      marginRight: 15,
    },
    headerTitle: {
      fontSize: 24,
      color: '#fff',
      fontWeight: 'bold',
    },
    content: {
      flex: 1,
    },
    fromToCard: {
      backgroundColor: '#1E1E1E',
      margin: 20,
      padding: 20,
      borderRadius: 12,
      borderLeftWidth: 3,
      borderLeftColor: '#35A2C1',
    },
    ticketTypeContainer: {
      marginHorizontal: 20,
    },
    ticketTypeTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#fff',
      marginBottom: 15,
      letterSpacing: 0.5,
    },
    ticketTypeButtons: {
      flexDirection: 'row',
      paddingBottom: 10,
    },
    ticketTypeButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#1E1E1E',
      padding: 15,
      borderRadius: 12,
      marginRight: 12,
      borderWidth: 1,
      borderColor: '#333',
      minWidth: 150,
    },
    selectedTicketType: {
      borderWidth: 1,
    },
    ticketTypeIcon: {
      marginRight: 10,
    },
    ticketTypeName: {
      color: '#fff',
      fontWeight: '600',
      marginBottom: 4,
      fontSize: 14,
    },
    ticketTypePrice: {
      color: '#666',
      fontSize: 12,
    },
    scheduleContainer: {
      marginTop: 20,
    },
    sectionTitle: {
      fontSize: 16,
      fontWeight: '600',
      color: '#fff',
      marginHorizontal: 20,
      marginBottom: 15,
      letterSpacing: 0.5,
    },
    scheduleList: {
      paddingHorizontal: 20,
    },
    scheduleItem: {
      backgroundColor: '#1E1E1E',
      padding: 12,
      borderRadius: 10,
      marginBottom: 8,
      borderWidth: 1,
      borderColor: '#333',
    },
    scheduleHeader: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8,
      paddingBottom: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#333',
    },
    timeContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    timeText: {
      color: '#fff',
      fontWeight: '500',
      fontSize: 14,
      marginHorizontal: 6,
    },
    priceContainer: {
      alignItems: 'flex-end',
      backgroundColor: '#252525',
      padding: 8,
      borderRadius: 6,
    },
    priceText: {
      color: '#fff',
      fontWeight: '500',
      fontSize: 16,
    },
    unitsText: {
      color: '#666',
      fontSize: 12,
      marginTop: 1,
    },
    routeInfo: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    routeTextContainer: {
      marginLeft: 8,
      flex: 1,
    },
    routeName: {
      color: '#fff',
      fontWeight: '500',
      fontSize: 13,
      marginBottom: 2,
    },
    routeDestination: {
      color: '#666',
      fontSize: 11,
    },
    selectButton: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 6,
      paddingHorizontal: 10,
      borderRadius: 6,
    },
    selectButtonText: {
      color: '#000',
      fontWeight: '500',
      marginRight: 4,
      fontSize: 12,
    },
  });