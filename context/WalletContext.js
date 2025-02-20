import React, { createContext, useState, useContext } from 'react';

const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  const [balance, setBalance] = useState(100);
  const [transactions, setTransactions] = useState([]);

  const deductBalance = (amount, ticketInfo) => {
    setBalance(prevBalance => prevBalance - amount);
    setTransactions(prev => [{
      id: Date.now().toString(),
      type: 'debit',
      amount: amount,
      title: `Bilet - ${ticketInfo}`,
      date: new Date().toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
    }, ...prev]);
  };

  //const addBalancefor = () =>{}

  const addBalance = (amount) => {
    setBalance(prevBalance => prevBalance + amount);
    setTransactions(prev => [{
      id: Date.now().toString(),
      type: 'credit',
      amount: amount,
      title: 'UNITS Added',
      date: new Date().toLocaleDateString('tr-TR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
    }, ...prev]);
  };

  return (
    <WalletContext.Provider value={{ balance, transactions, deductBalance, addBalance }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext); 