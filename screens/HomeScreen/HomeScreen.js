import * as React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { PRIMARYCOLOR } from "../../Constants.js";
import { Ionicons, MaterialCommunityIcons, FontAwesome5 } from "@expo/vector-icons";
import { CustomCard } from "../components/CustomCard";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { useState, useEffect } from "react";
import { useWallet } from "../../context/WalletContext";
import { styles } from "./styles.js";

export const HomeScreen = () => {
  const nav = useNavigation();
  const [selectedLocation, setSelectedLocation] = useState("");
  const { balance, transactions } = useWallet();
  const [greeting, setGreeting] = useState("Good morning");

  const totalTrips = transactions.filter((t) => t.type === "debit").length;

  useEffect(() => {
    // Set greeting based on time of day
    const hours = new Date().getHours();
    if (hours < 12) setGreeting("Good morning");
    else if (hours < 18) setGreeting("Good afternoon");
    else setGreeting("Good evening");
  }, []);

  const DATA = [
    {
      id: 1,
      name: "Bus (EGO)",
      backgroundColor: "#FF6B6B",
      icon: "bus",
      frequency: "Variable",
      onPressHandler: () => {
        nav.navigate("Schedule", {
          title: "Bus",
          backgroundColor: "#FF6B6B",
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
      frequency: "Every 5-6 minutes",
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
      name: "Başkentray (Light rail)",
      backgroundColor: "#45B7D1",
      icon: "train",
      frequency: "Every 15 minutes",
      onPressHandler: () => {
        nav.navigate("Schedule", {
          title: "Başkentray",
          backgroundColor: "#45B7D1",
          destination: selectedLocation,
          type: "train",
        });
      },
    },
    {
      id: 4,
      name: "Ankaray (Commuter rail)",
      backgroundColor: "#96CEB4",
      icon: "tram",
      frequency: "Every 5-6 minutes",
      onPressHandler: () => {
        nav.navigate("Schedule", {
          title: "Ankaray",
          backgroundColor: "#96CEB4",
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
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.iconContainer,
              { backgroundColor: item.backgroundColor },
            ]}
          >
            <MaterialCommunityIcons name={item.icon} size={28} color="#fff" />
          </View>
          <View style={styles.transportInfo}>
            <Text style={styles.transportName}>{item.name}</Text>
            <View style={styles.transportDetail}>
              <MaterialCommunityIcons
                name="clock-outline"
                size={14}
                color="#999"
              />
              <Text style={styles.transportTime}>{item.frequency}</Text>
            </View>
          </View>
          <MaterialCommunityIcons 
            name="chevron-right" 
            size={24} 
            color={PRIMARYCOLOR} 
          />
        </TouchableOpacity>
      </CustomCard>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      
      <View style={[styles.topview, { zIndex: 10 }]}>
        <View style={styles.header}>
          <View>
            <Text style={styles.greeting}>{greeting} 👋</Text>
            <Text style={styles.username}>
              <Text style={{ fontWeight: "normal", color: "#999" }}>City: </Text>
              <Text style={{ fontWeight: "bold", color: "#fff" }}>Ankara</Text>
            </Text>
          </View>
          <TouchableOpacity style={styles.profilePic}>
            <MaterialCommunityIcons name="account" size={28} color={PRIMARYCOLOR} />
          </TouchableOpacity>
        </View>

        <View style={styles.searchContainer}>
          <Text style={styles.searchTitle}>Where do you want to go?</Text>
          <View style={styles.searchbar}>
            <MaterialCommunityIcons name="magnify" size={24} color={PRIMARYCOLOR} />
            <GooglePlacesAutocomplete
              placeholder="Select target location"
              minLength={2}
              enablePoweredByContainer={false}
              fetchDetails={true}
              textInputProps={{
                placeholderTextColor: "#999",
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
                  zIndex: 10,
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
                  borderRadius: 16,
                  borderWidth: 1,
                  borderColor: "#3d3d3d",
                  overflow: "hidden",
                  zIndex: 9999,
                  elevation: 3,
                },
                row: {
                  backgroundColor: "#2d2d2d",
                  padding: 15,
                  height: 50,
                  flexDirection: "row",
                },
                separator: {
                  height: 0.5,
                  backgroundColor: "#3d3d3d",
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

      <View style={[styles.bottomview, { zIndex: 1 }]}>
        <CustomCard elevated={true} style={styles.statsCard}>
          <View style={styles.statItem}>
            <MaterialCommunityIcons
              name="wallet-outline"
              size={28}
              color={PRIMARYCOLOR}
            />
            <View style={styles.statInfo}>
              <Text style={styles.statLabel}>Balance</Text>
              <Text style={styles.statValue}>{balance.toFixed(2)} UNIT0</Text>
            </View>
          </View>
          <View style={styles.divider} />
          <View style={styles.statItem}>
            <MaterialCommunityIcons
              name="ticket-outline"
              size={28}
              color={PRIMARYCOLOR}
            />
            <View style={styles.statInfo}>
              <Text style={styles.statLabel}>Total Trips</Text>
              <Text style={styles.statValue}>{totalTrips}</Text>
            </View>
          </View>
        </CustomCard>

        <Text style={styles.sectionTitle}>Transportation Options</Text>

        <FlatList
          data={DATA}
          renderItem={transportItem}
          keyExtractor={(item) => item.id.toString()}
          contentContainerStyle={styles.transportList}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};