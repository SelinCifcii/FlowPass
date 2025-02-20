import React, { createContext, useState, useContext, useEffect } from 'react';
import { ethers } from 'ethers';

const Web3Context = createContext();

// Kontrat adresleri
const FLOWPASS_ADDRESS = '0x919Bb194F5B04EFca9aCe75367B78FD4Bdd61867';
const LENDING_POOL = '0x4b7e39cd4cb02d6a46f332f6da26c9ea20be7b17';
const AAVE_TOKEN = '0x68194a729c2450ad26072b3d33adacbcef39d574';

// Test cüzdanı için private key
const PRIVATE_KEY = '4362d4f170e26f4f1a02acdff80a8abe24e93b57b255096c469ae48018d28041';

// Unit Network yapılandırması
const UNIT_NETWORK_CONFIG = {
  name: "Unit Zero Testnet",
  chainId: 88817,
  rpc: "https://rpc-testnet.unit0.dev",
  nativeCurrency: {
    name: "UNIT0",
    symbol: "UNIT0",
    decimals: 18
  },
  blockExplorer: "https://explorer-testnet.unit0.dev"
};

// FlowPass kontratının ABI'si
const FLOWPASS_ABI = [
  // Bilet işlemleri
  "function biletSatinAl(uint256 _biletId, bool _ileriTarih, bool _bakiyeKullan) external payable",
  "function biletKullan(uint256 _biletId) external",
  "function biletIptal(uint256 _biletId) external",
  
  // Bakiye işlemleri
  "function bakiyeEkle() external payable",
  "function bakiyeCek(uint256 _miktar) external",
  "function bakiyeler(address) public view returns (uint256)",
  
  // Bilet bilgileri
  "function biletler(uint256) public view returns (uint256 id, address sahibi, uint256 fiyat, uint256 satinAlmaTarihi, bool ileriTarihli, bool kullanildi)",
  "function biletFiyatlari(uint256) public view returns (uint256)",
  "function biletSayaci() public view returns (uint256)",
  
  // Events
  "event BiletAlindi(uint256 biletId, address alici, uint256 fiyat)",
  "event BiletKullanildi(uint256 biletId, address sahibi)",
  "event BakiyeEklendi(address kullanici, uint256 miktar)",
  "event BakiyeCekildi(address kullanici, uint256 miktar)"
];

export const Web3Provider = ({ children }) => {
  const [provider, setProvider] = useState(null);
  const [contract, setContract] = useState(null);
  const [wallet, setWallet] = useState(null);

  useEffect(() => {
    initializeWeb3();
  }, []);

  const initializeWeb3 = async () => {
    try {
      console.log('Web3 başlatılıyor...');
      
      // Custom network provider oluştur
      const customProvider = new ethers.providers.StaticJsonRpcProvider(
        UNIT_NETWORK_CONFIG.rpc,
        {
          chainId: UNIT_NETWORK_CONFIG.chainId,
          name: UNIT_NETWORK_CONFIG.name,
          ensAddress: null,
          _defaultProvider: null
        }
      );
      
      console.log('Provider oluşturuldu, Unit Zero Testnet kontrolü yapılıyor...');
      
      // Ağ bağlantısını test ediyoruz
      try {
        const network = await customProvider.getNetwork();
        console.log('Bağlanılan ağ:', {
          name: network.name,
          chainId: network.chainId
        });
      } catch (networkError) {
        console.error('Ağ bağlantı hatası:', networkError.message);
      }

      setProvider(customProvider);

      // Test cüzdanını oluştururuz
      const wallet = new ethers.Wallet(PRIVATE_KEY, customProvider);
      console.log('Cüzdan oluşturuldu:', wallet.address);
      setWallet(wallet);

      // Kontratı wallet ile bağlanıyoruz
      const contract = new ethers.Contract(
        FLOWPASS_ADDRESS,
        FLOWPASS_ABI,
        wallet
      );
      setContract(contract);
      console.log('Kontrat bağlandı:', FLOWPASS_ADDRESS);

      // Test çağrısı
      try {
        const balance = await customProvider.getBalance(wallet.address);
        console.log('Cüzdan bakiyesi:', ethers.utils.formatEther(balance), 'UNIT');
        
        const biletSayaci = await contract.biletSayaci();
        console.log('Mevcut bilet sayacı:', biletSayaci.toString());
      } catch (error) {
        console.error('Test çağrısı hatası:', error.message);
      }

    } catch (error) {
      console.error('Web3 başlatma hatası:', error.message);
      if (error.stack) console.error('Hata stack:', error.stack);
    }
  };

  const biletSatinAl = async (biletId, ileriTarih = false, bakiyeKullan = false) => {
    try {
      if (!contract || !wallet) {
        console.error('Kontrat veya cüzdan bağlantısı yok');
        return false;
      }

      console.log('Bilet satın alma başlatılıyor...');
      console.log('Bilet ID:', biletId);
      console.log('Gönderen adres:', wallet.address);

      try {
        // Önce bilet fiyatı kontrolü
        const fiyat = await contract.biletFiyatlari(biletId);
        console.log('Bilet fiyatı:', ethers.utils.formatEther(fiyat), 'UNIT');

        // Kontrat çağrısı
        const tx = await contract.biletSatinAl(
          biletId,
          ileriTarih,
          bakiyeKullan,
          { 
            value: fiyat,
            gasLimit: 300000
          }
        );

        console.log('İşlem gönderildi:', tx.hash);
        const receipt = await tx.wait();
        console.log('İşlem onaylandı:', receipt);

        return true;
      } catch (error) {
        console.error('Kontrat çağrısı hatası:', error.message);
        if (error.reason) console.error('Hata sebebi:', error.reason);
        if (error.data) console.error('Hata detayı:', error.data);
        return false;
      }
    } catch (error) {
      console.error('Bilet satın alma hatası:', error.message);
      return false;
    }
  };

  const bakiyeEkle = async (amount) => {
    try {
      if (!contract || !wallet) {
        console.error('Kontrat veya cüzdan bağlantısı yok');
        return false;
      }

      const amountInWei = ethers.utils.parseEther(amount.toString());
      console.log('Bakiye ekleniyor:', amount, 'ETH');

      const tx = await contract.bakiyeEkle({
        value: amountInWei,
        gasLimit: 300000
      });

      console.log('İşlem gönderildi:', tx.hash);
      const receipt = await tx.wait();
      console.log('İşlem onaylandı:', receipt);

      return true;
    } catch (error) {
      console.error('Bakiye ekleme hatası:', error);
      return false;
    }
  };

  return (
    <Web3Context.Provider value={{
      provider,
      contract,
      wallet,
      biletSatinAl,
      bakiyeEkle
    }}>
      {children}
    </Web3Context.Provider>
  );
};

export const useWeb3 = () => useContext(Web3Context); 