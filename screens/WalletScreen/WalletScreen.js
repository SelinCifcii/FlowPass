import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Modal, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { CustomCard } from '../components/CustomCard';
import { useWallet } from '../../context/WalletContext';
import { useState } from 'react';
import { styles } from './styles';

export const WalletScreen = () => {
  const { balance, transactions, addBalance } = useWallet();
  const [modalVisible, setModalVisible] = useState(false);
  const [amount, setAmount] = useState('');

  const handleAddMoney = () => {
    if (amount) {
      addBalance(parseFloat(amount));
      setAmount('');
      setModalVisible(false);
    }
  };

  const TransactionItem = ({ item }) => (
    <View style={styles.transactionItem}>
      <View style={styles.transactionLeft}>
        <Ionicons 
          name={item.type === 'debit' ? 'arrow-down-circle' : 'arrow-up-circle'} 
          size={24} 
          color={item.type === 'debit' ? '#e74c3c' : '#2ecc71'} 
        />
        <View style={styles.transactionInfo}>
          <Text style={styles.transactionTitle}>{item.title}</Text>
          <Text style={styles.transactionDate}>{item.date}</Text>
        </View>
      </View>
      <View style={styles.transactionAmountContainer}>
        <Text style={[
          styles.transactionAmount,
          {color: item.type === 'debit' ? '#e74c3c' : '#2ecc71'}
        ]}>
          {item.type === 'debit' ? '-' : '+'} {item.amount.toFixed(2)}
        </Text>
        <Text style={styles.unitText}>UNITS</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Wallet</Text>
      </View>

      <CustomCard elevated={true} style={styles.balanceCard}>
        <Text style={styles.balanceTitle}>Total Balance</Text>
        <Text style={styles.balanceAmount}>{balance.toFixed(2)} UNITS</Text>
        <View style={styles.balanceActions}>
          <TouchableOpacity 
            style={styles.actionButton}
            onPress={() => setModalVisible(true)}
          >
            <Ionicons name="add-circle-outline" size={24} color="#fff" />
            <Text style={styles.actionButtonText}>Add UNITS</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Ionicons name="swap-horizontal-outline" size={24} color="#fff" />
            <Text style={styles.actionButtonText}>Transfer</Text>
          </TouchableOpacity>
        </View>
      </CustomCard>

      <View style={styles.transactionsContainer}>
        <Text style={styles.sectionTitle}>Recent Transactions</Text>
        {transactions.length > 0 ? (
          <FlatList
            data={transactions}
            renderItem={TransactionItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.transactionsList}
          />
        ) : (
          <Text style={styles.noTransactions}>Henüz işlem bulunmuyor</Text>
        )}
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add UNITS</Text>
            <Text style={styles.modalSubtitle}>Enter amount to add to your wallet</Text>
            
            <TextInput
              style={styles.input}
              placeholder="Amount"
              placeholderTextColor="#666"
              keyboardType="numeric"
              value={amount}
              onChangeText={setAmount}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity 
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              
              <TouchableOpacity 
                style={[styles.modalButton, styles.addButton]}
                onPress={handleAddMoney}
              >
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
