import React, { createContext, useState, useContext } from 'react';

const WalletContext = createContext();

const formatDate = (date) => {
  const months = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
    'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
  ];
  
  const d = new Date(date);
  const month = months[d.getMonth()];
  const day = d.getDate().toString().padStart(2, '0');
  const year = d.getFullYear();
  const hours = d.getHours().toString().padStart(2, '0');
  const minutes = d.getMinutes().toString().padStart(2, '0');
  
  return `${month} ${day}, ${year} • ${hours}:${minutes}`;
};

export const WalletProvider = ({ children }) => {
  const [balance, setBalance] = useState(40);
  const [transactions, setTransactions] = useState([]);

  const deductBalance = (amount, ticketInfo) => {
    setBalance(prevBalance => prevBalance - amount);
    setTransactions(prev => [{
      id: Date.now().toString(),
      type: 'debit',
      amount: amount,
      title: `Ticket - ${ticketInfo}`,
      date: formatDate(new Date()),
    }, ...prev]);
  };

  const addBalance = (amount) => {
    setBalance(prevBalance => prevBalance + amount);
    setTransactions(prev => [{
      id: Date.now().toString(),
      type: 'credit',
      amount: amount,
      title: 'UNIT0 Added',
      date: formatDate(new Date()),
    }, ...prev]);
  };

  const addTransaction = (type, amount, title) => {
    const newTransaction = {
      id: Date.now().toString(),
      type,
      amount,
      title,
      date: formatDate(new Date()),
    };

    setTransactions(prev => [newTransaction, ...prev]);
  };

  return (
    <WalletContext.Provider value={{ balance, transactions, deductBalance, addBalance }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWallet = () => useContext(WalletContext); 