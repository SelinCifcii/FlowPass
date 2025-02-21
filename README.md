# FlowPass - Blockchain Based Public Transportation Ticketing System

FlowPass is a mobile application built with React Native that enables users to purchase and manage public transportation tickets using blockchain technology. The app integrates with the Unit Zero Testnet for secure and transparent ticket transactions.

## 🚀 Features

- Purchase tickets for different transportation types:
  - Bus (EGO)
  - Metro
  - Başkentray
  - Ankaray
- View real-time schedules and routes
- Manage UNIT0 wallet balance
- View transaction history
- QR code ticket generation
- Smart contract integration for secure transactions

## 🛠 Prerequisites

- Node.js >= 16.0.0
- React Native CLI
- Android Studio or Xcode
- MetaMask Wallet
- Unit Zero Testnet connection

## 📦 Installation

1. Clone the repository:

git clone https://github.com/yourusername/flowpass.git
cd flowpass 


2. Install dependencies:

npm install

3. Additional setup for iOS:

cd ios
pod install

4. Additional setup for Android 

cd android
./gradlew clean

5. Start the development server:

npm start

6.Run the app:

npx react-native run-ios
npx react-native run-android

## 📝 Project Structure

The project is organized into the following key directories:

flowpass/
├── android/ # Android specific files
├── ios/ # iOS specific files
├── src/
│ ├── assets/ # Images, fonts, and other static files
│ ├── components/ # Reusable React components
│ │ ├── Button/ # Custom button components
│ │ ├── Card/ # Card components for tickets
│ │ └── Header/ # Header components
│ ├── context/ # React Context files
│ │ ├── Web3Context.js # Web3 provider and blockchain interactions
│ │ └── WalletContext.js # Wallet management and balance
│ ├── screens/ # Application screens
│ │ ├── HomeScreen/ # Main dashboard
│ │ ├── PaymentScreen/ # Ticket purchase screen
│ │ ├── ScheduleScreen/ # Transportation schedules
│ │ └── WalletScreen/ # Wallet management
│ ├── services/ # API and blockchain service integrations
│ │ ├── web3/ # Web3 service configurations
│ │ └── api/ # REST API integrations
│ └── utils/ # Helper functions and utilities
├── App.js # Application entry point
└── package.json # Project dependencies and scripts

## 📦 Dependencies

The project relies on the following key dependencies:

- React Native
- React Navigation
- React Context API
- ethers.js
- expo-secure-store
- expo-constants

