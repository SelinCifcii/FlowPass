import * as React from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity, FlatList, ScrollView, SafeAreaView} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { CustomCard } from '../components/CustomCard';
import { FromTo } from '../components/FromTo';
import { useState } from 'react';
import { styles } from './styles';

export const ScheduleScreen = () => {
  const nav = useNavigation();
  const route = useRoute();
  const params = route.params;
  const THEME_COLOR = "#4ECDC4"; 
  const [selectedTicketType, setSelectedTicketType] = useState('full');

  const ticketTypes = [
    { id: 'full', name: 'Tam Ücret', price: 21.00 },
    { id: 'student', name: 'Öğrenci', price: 10.50 },
    { id: 'teacher', name: 'Öğretmen', price: 15.50 },
    { id: 'senior', name: '65 Yaş Üstü', price: 0 },
  ];

  const convertToUnits = (tlPrice) => {
    return tlPrice * 0.5;
  };

  const TicketTypeSelector = () => (
    <View style={styles.ticketTypeContainer}>
      <Text style={styles.ticketTypeTitle}>Bilet Tipi</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.ticketTypeButtons}>
          {ticketTypes.map((type) => (
            <TouchableOpacity
              key={type.id}
              style={[
                styles.ticketTypeButton,
                selectedTicketType === type.id && styles.selectedTicketType,
                { borderColor: THEME_COLOR }
              ]}
              onPress={() => setSelectedTicketType(type.id)}
            >
              <MaterialCommunityIcons 
                name={selectedTicketType === type.id ? "check-circle" : "circle-outline"} 
                size={20} 
                color={selectedTicketType === type.id ? THEME_COLOR : "#666"}
                style={styles.ticketTypeIcon}
              />
              <View>
                <Text style={styles.ticketTypeName}>{type.name}</Text>
                <Text style={styles.ticketTypePrice}>
                  {type.price === 0 ? 'Ücretsiz' : `₺${type.price.toFixed(2)}`}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );

  const scheduleItem = ({item}) => {
    const unitsPrice = convertToUnits(item.price);
    return (
      <TouchableOpacity onPress={item.onPressHandler}>
        <View style={styles.scheduleItem}>
          <View style={styles.scheduleHeader}>
            <View style={styles.timeContainer}>
              <MaterialCommunityIcons name="clock-outline" size={18} color={THEME_COLOR} />
              <Text style={styles.timeText}>{item.departuretime}</Text>
              <MaterialCommunityIcons name="arrow-right" size={16} color="#666" />
              <Text style={styles.timeText}>{item.arrivaltime}</Text>
            </View>
            <View style={styles.priceContainer}>
              <Text style={styles.priceText}>₺{item.price.toFixed(2)}</Text>
              <Text style={styles.unitsText}>{unitsPrice.toFixed(2)} UNITS</Text>
            </View>
          </View>

          <View style={styles.routeInfo}>
            <MaterialCommunityIcons name="routes" size={18} color={THEME_COLOR} />
            <View style={styles.routeTextContainer}>
              <Text style={styles.routeName}>{item.route}</Text>
              <Text style={styles.routeDestination}>{item.name}</Text>
            </View>
            <View style={[styles.selectButton, { backgroundColor: THEME_COLOR }]}>
              <Text style={styles.selectButtonText}>Seç</Text>
              <MaterialCommunityIcons name="arrow-right" size={16} color="#000" />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  const getScheduleData = () => {
    const selectedType = ticketTypes.find(t => t.id === selectedTicketType);
    const price = selectedType.price;
    const unitsPrice = convertToUnits(price);

    switch(params.type) {
      case 'bus':
        return [
          {
            id: 1,
            departuretime: "10:00",
            arrivaltime: "10:45",
            name: params.destination,
            route: "522 - Kızılay-Çayyolu",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "522 - Kızılay-Çayyolu",
                destination: params.destination,
                departuretime: "10:00",
                arrivaltime: "10:45"
              });
            }
          },
          {
            id: 2,
            departuretime: "10:15",
            arrivaltime: "11:00",
            name: params.destination,
            route: "522 - Kızılay-Çayyolu",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "522 - Kızılay-Çayyolu",
                destination: params.destination,
                departuretime: "10:15",
                arrivaltime: "11:00"
              });
            }
          },
          {
            id: 3,
            departuretime: "10:30",
            arrivaltime: "11:15",
            name: params.destination,
            route: "522 - Kızılay-Çayyolu",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "522 - Kızılay-Çayyolu",
                destination: params.destination,
                departuretime: "10:30",
                arrivaltime: "11:15"
              });
            }
          },
          {
            id: 4,
            departuretime: "10:45",
            arrivaltime: "11:30",
            name: params.destination,
            route: "522 - Kızılay-Çayyolu",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "522 - Kızılay-Çayyolu",
                destination: params.destination,
                departuretime: "10:45",
                arrivaltime: "11:30"
              });
            }
          },
          {
            id: 5,
            departuretime: "11:00",
            arrivaltime: "11:45",
            name: params.destination,
            route: "522 - Kızılay-Çayyolu",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "522 - Kızılay-Çayyolu",
                destination: params.destination,
                departuretime: "11:00",
                arrivaltime: "11:45"
              });
            }
          }
        ];
      
      case 'metro':
        return [
          {
            id: 1,
            departuretime: "10:00",
            arrivaltime: "10:25",
            name: params.destination,
            route: "M1 - Kızılay-Batıkent",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "M1 - Kızılay-Batıkent",
                destination: params.destination,
                departuretime: "10:00",
                arrivaltime: "10:25"
              });
            }
          },
          {
            id: 2,
            departuretime: "10:07",
            arrivaltime: "10:32",
            name: params.destination,
            route: "M1 - Kızılay-Batıkent",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "M1 - Kızılay-Batıkent",
                destination: params.destination,
                departuretime: "10:07",
                arrivaltime: "10:32"
              });
            }
          },
          {
            id: 3,
            departuretime: "10:14",
            arrivaltime: "10:39",
            name: params.destination,
            route: "M1 - Kızılay-Batıkent",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "M1 - Kızılay-Batıkent",
                destination: params.destination,
                departuretime: "10:14",
                arrivaltime: "10:39"
              });
            }
          },
          {
            id: 4,
            departuretime: "10:21",
            arrivaltime: "10:46",
            name: params.destination,
            route: "M1 - Kızılay-Batıkent",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "M1 - Kızılay-Batıkent",
                destination: params.destination,
                departuretime: "10:21",
                arrivaltime: "10:46"
              });
            }
          },
          {
            id: 5,
            departuretime: "10:28",
            arrivaltime: "10:53",
            name: params.destination,
            route: "M1 - Kızılay-Batıkent",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "M1 - Kızılay-Batıkent",
                destination: params.destination,
                departuretime: "10:28",
                arrivaltime: "10:53"
              });
            }
          }
        ];

      case 'train':
        return [
          {
            id: 1,
            departuretime: "10:00",
            arrivaltime: "10:40",
            name: params.destination,
            route: "Sincan-Kayaş",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "Sincan-Kayaş",
                destination: params.destination,
                departuretime: "10:00",
                arrivaltime: "10:40"
              });
            }
          },
          {
            id: 2,
            departuretime: "10:15",
            arrivaltime: "10:55",
            name: params.destination,
            route: "Sincan-Kayaş",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "Sincan-Kayaş",
                destination: params.destination,
                departuretime: "10:15",
                arrivaltime: "10:55"
              });
            }
          },
          {
            id: 3,
            departuretime: "10:30",
            arrivaltime: "11:10",
            name: params.destination,
            route: "Sincan-Kayaş",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "Sincan-Kayaş",
                destination: params.destination,
                departuretime: "10:30",
                arrivaltime: "11:10"
              });
            }
          },
          {
            id: 4,
            departuretime: "10:45",
            arrivaltime: "11:25",
            name: params.destination,
            route: "Sincan-Kayaş",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "Sincan-Kayaş",
                destination: params.destination,
                departuretime: "10:45",
                arrivaltime: "11:25"
              });
            }
          },
          {
            id: 5,
            departuretime: "11:00",
            arrivaltime: "11:40",
            name: params.destination,
            route: "Sincan-Kayaş",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "Sincan-Kayaş",
                destination: params.destination,
                departuretime: "11:00",
                arrivaltime: "11:40"
              });
            }
          }
        ];

      case 'tram':
        return [
          {
            id: 1,
            departuretime: "10:00",
            arrivaltime: "10:20",
            name: params.destination,
            route: "AŞTİ-Dikimevi",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "AŞTİ-Dikimevi",
                destination: params.destination,
                departuretime: "10:00",
                arrivaltime: "10:20"
              });
            }
          },
          {
            id: 2,
            departuretime: "10:06",
            arrivaltime: "10:26",
            name: params.destination,
            route: "AŞTİ-Dikimevi",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "AŞTİ-Dikimevi",
                destination: params.destination,
                departuretime: "10:06",
                arrivaltime: "10:26"
              });
            }
          },
          {
            id: 3,
            departuretime: "10:12",
            arrivaltime: "10:32",
            name: params.destination,
            route: "AŞTİ-Dikimevi",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "AŞTİ-Dikimevi",
                destination: params.destination,
                departuretime: "10:12",
                arrivaltime: "10:32"
              });
            }
          },
          {
            id: 4,
            departuretime: "10:18",
            arrivaltime: "10:38",
            name: params.destination,
            route: "AŞTİ-Dikimevi",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "AŞTİ-Dikimevi",
                destination: params.destination,
                departuretime: "10:18",
                arrivaltime: "10:38"
              });
            }
          },
          {
            id: 5,
            departuretime: "10:24",
            arrivaltime: "10:44",
            name: params.destination,
            route: "AŞTİ-Dikimevi",
            price: price,
            onPressHandler: () => {
              nav.navigate("Payment", {
                price: price,
                unitsPrice: unitsPrice,
                ticketType: selectedType.name,
                route: "AŞTİ-Dikimevi",
                destination: params.destination,
                departuretime: "10:24",
                arrivaltime: "10:44"
              });
            }
          }
        ];
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.header, { backgroundColor: '#2d2d2d' }]}>
        <TouchableOpacity onPress={() => nav.goBack()} style={styles.backButton}>
          <MaterialCommunityIcons name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{params.title}</Text>
      </View>

      <ScrollView style={styles.content}>
        <CustomCard elevated={true} style={[styles.fromToCard, { borderLeftColor: THEME_COLOR }]}>
          <FromTo backgroundColor={THEME_COLOR} textColor="#fff" />
        </CustomCard>
        
        <TicketTypeSelector />

        <View style={styles.scheduleContainer}>
          <Text style={styles.sectionTitle}>Seferler</Text>
          <FlatList
            data={getScheduleData()}
            renderItem={scheduleItem}
            keyExtractor={(item) => item.id.toString()}
            scrollEnabled={false}
            contentContainerStyle={styles.scheduleList}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};