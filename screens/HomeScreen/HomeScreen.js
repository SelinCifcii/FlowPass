import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PRIMARYCOLOR } from "../../Constants.js";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import { CustomCard } from "../components/CustomCard";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useState } from "react";
import { useWallet } from "../../context/WalletContext";
import { styles } from "./styles.js";


export const HomeScreen = () => {
  const nav = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState("");
  const { balance, transactions } = useWallet();

  const totalTrips = transactions.filter((t) => t.type === "debit").length;

  const DATA = [
    {
      id: 1,
      name: "Otobüs (EGO)",
      backgroundColor: "#FF6B6B",
      icon: "bus",
      frequency: "Değişkenlik gösterir",
      onPressHandler: () => {
        nav.navigate("Schedule", {
          title: "Otobüs",
          backgroundColor: "#4ECDC4",
          destination: selectedLocation,
          type: "bus",
        });
      },
    },
    {
      id: 2,
      name: "Metro",
      backgroundColor: "#4ECDC4",
      icon: "subway-variant",
      frequency: "5-6 dakikada bir",
      onPressHandler: () => {
        nav.navigate("Schedule", {
          title: "Metro",
          backgroundColor: "#4ECDC4",
          destination: selectedLocation,
          type: "metro",
        });
      },
    },
    {
      id: 3,
      name: "Başkentray",
      backgroundColor: "#45B7D1",
      icon: "train",
      frequency: "15 dakikada bir",
      onPressHandler: () => {
        nav.navigate("Schedule", {
          title: "Başkentray",
          backgroundColor: "#4ECDC4",
          destination: selectedLocation,
          type: "train",
        });
      },
    },
    {
      id: 4,
      name: "Ankaray",
      backgroundColor: "#96CEB4",
      icon: "tram",
      frequency: "5-6 dakikada bir",
      onPressHandler: () => {
        nav.navigate("Schedule", {
          title: "Ankaray",
          backgroundColor: "#4ECDC4",
          destination: selectedLocation,
          type: "tram",
        });
      },
    },
  ];

  const transportItem = ({ item }) => {
    return (
      <CustomCard>
        <TouchableOpacity
          onPress={item.onPressHandler}
          style={styles.transportCard}
        >
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: item.backgroundColor },
            ]}
          >
            <MaterialCommunityIcons name={item.icon} size={32} color="#fff" />
          </View>
          <View style={styles.transportInfo}>
            <Text style={styles.transportName}>{item.name}</Text>
            <View style={styles.transportDetail}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={14}
                color="#666"
              />
              <Text style={styles.transportTime}>{item.frequency}</Text>
            </View>
          </View>
          <MaterialCommunityIcons name="chevron-right" size={24} color="#666" />
        </TouchableOpacity>
      </CustomCard>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.topview}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>Merhaba 👋</Text>
            <Text style={styles.username}>
              <Text style={{ fontWeight: "normal" }}>Şehriniz: </Text>
              <Text style={{ fontWeight: "bold" }}>Ankara</Text>
            </Text>
          </View>
          <View style={styles.profilePic}>
            <MaterialCommunityIcons name="account" size={30} color="#666" />
          </View>
        </View>

        <View style={styles.searchContainer}>
          <Text style={styles.searchTitle}>Nereye gitmek istiyorsunuz?</Text>
          <View style={styles.searchbar}>
            <MaterialCommunityIcons name="magnify" size={24} color="#666" />
            <GooglePlacesAutocomplete
              placeholder="Hedef konumu seçin"
              minLength={2}
              enablePoweredByContainer={false}
              fetchDetails={true}
              textInputProps={{
                placeholderTextColor: "#666",
                autoCapitalize: "none",
                autoCorrect: false,
              }}
              onPress={(data, details = null) => {
                setSelectedLocation(data.description);
              }}
              query={{
                key: "AIzaSyA1-wfIxtL1wgsW6T6XKZs_A3bNHpXmHSw",
                language: "tr",
                components: "country:tr",
              }}
              styles={{
                container: {
                  flex: 1,
                },
                textInput: {
                  height: 40,
                  color: "#fff",
                  fontSize: 16,
                  backgroundColor: "transparent",
                  marginLeft: 10,
                },
                listView: {
                  position: "absolute",
                  top: 45,
                  left: 0,
                  right: 0,
                  backgroundColor: "#2d2d2d",
                  borderRadius: 10,
                },
                row: {
                  backgroundColor: "#2d2d2d",
                  padding: 13,
                  height: 44,
                  flexDirection: "row",
                },
                separator: {
                  height: 0.5,
                  backgroundColor: "#666",
                },
                description: {
                  color: "#fff",
                  fontSize: 14,
                },
                poweredContainer: {
                  display: "none",
                },
              }}
            />
          </View>
        </View>
      </View>

      <View style={styles.bottomview}>
        <CustomCard elevated={true} style={styles.statsCard}>
          <View style={styles.statItem}>
            <MaterialCommunityIcons
              name="wallet-outline"
              size={24}
              color="#666"
            />
            <View style={styles.statInfo}>
              <Text style={styles.statLabel}>Bakiye</Text>
              <Text style={styles.statValue}>{balance.toFixed(2)} UNITS</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={24}
              color="#666"
            />
            <View style={styles.statInfo}>
              <Text style={styles.statLabel}>Toplam Yolculuk</Text>
              <Text style={styles.statValue}>{totalTrips}</Text>
            </View>
          </View>
        </CustomCard>

        <Text style={styles.sectionTitle}>Ulaşım Seçenekleri</Text>

        <FlatList
          data={DATA}
          renderItem={transportItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.transportList}
        />
      </View>
    </View>
  );
};


