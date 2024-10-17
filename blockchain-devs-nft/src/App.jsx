import React, { useState, useEffect } from 'react';
import { ethers } from 'ethers';

// Contract details
const contractAddress = '0x3B97840DbD8A321e8BE2aB714d37ad91B77Ce235';
const contractABI = [
  {
    inputs: [],
    name: 'mintNFT',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'string', name: 'userName', type: 'string' }],
    name: 'addUserName',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
];

const App = () => {
  const [provider, setProvider] = useState(null);
  const [account, setAccount] = useState('');
  const [contract, setContract] = useState(null);
  const [userName, setUserName] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [chainId, setChainId] = useState(null);
  const [balance, setBalance] = useState('');

  // Listener para mudanças de conta e rede
  useEffect(() => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged);
      window.ethereum.on('chainChanged', handleChainChanged);
    }
    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener('accountsChanged', handleAccountsChanged);
        window.ethereum.removeListener('chainChanged', handleChainChanged);
      }
    };
  }, []);

  const handleAccountsChanged = (accounts) => {
    if (accounts.length > 0) {
      setAccount(accounts[0]);
      setIsConnected(true);
      console.log('Account changed:', accounts[0]);
    } else {
      disconnectWallet();
    }
  };

  const handleChainChanged = (chainId) => {
    setChainId(chainId);
    console.log('Chain changed:', chainId);
  };

  // Conectar a carteira
  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert('MetaMask is not installed. Please install it to use this app.');
        return;
      }

      // Habilita a conexão com a carteira
      const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
      console.log('Accounts:', accounts);
      const chainId = await window.ethereum.request({ method: 'eth_chainId' });
      console.log('Chain ID:', chainId);
      
      const providerInstance = new ethers.providers.Web3Provider(window.ethereum);
      const contractInstance = new ethers.Contract(contractAddress, contractABI, providerInstance.getSigner());

      setAccount(accounts[0]);
      setProvider(providerInstance);
      setContract(contractInstance);
      setChainId(chainId);
      setIsConnected(true);

      const balance = await providerInstance.getBalance(accounts[0]);
      const balanceInEth = ethers.utils.formatEther(balance);
      console.log(balanceInEth);
      setStatusMessage('Wallet connected successfully!');
      setBalance(balanceInEth);
    } catch (error) {
      console.error("Failed to connect wallet:", error);
      setStatusMessage(`Failed to connect wallet: ${error.message}`);
    }
  };

  // Desconectar a carteira
  const disconnectWallet = () => {
    setAccount('');
    setProvider(null);
    setIsConnected(false);
    setContract(null);
    setChainId(null);
    setBalance('');
    setStatusMessage('Wallet disconnected.');
    console.log('Wallet disconnected');
  };

  // Mintar NFT
  const handleMintNFT = async () => {
    if (!contract) {
      setStatusMessage('Please connect your wallet first.');
      return;
    }
    try {
      const tx = await contract.mintNFT();
      console.log('Mint NFT transaction:', tx);
      await tx.wait(); // Aguardar a confirmação da transação
      console.log('Transaction confirmed:', tx.hash);
      setStatusMessage(
        `NFT minting transaction sent! Hash: <a href="https://polygonscan.com/tx/${tx.hash}" target="_blank" rel="noopener noreferrer">${tx.hash}</a>`
      );
    } catch (error) {
      console.error("Error minting NFT:", error);
      setStatusMessage(`Error minting NFT: ${error.message || 'Unknown error'}`);
    }
  };

  // Adicionar nome de usuário
  const handleAddUserName = async () => {
    if (!contract) {
      setStatusMessage('Please connect your wallet first.');
      return;
    }
    
    try {
      const tx = await contract.addUserName(userName);
      console.log('Add user name transaction:', tx);
      await tx.wait(); // Aguardar a confirmação da transação
      console.log('Transaction confirmed:', tx.hash);
      setStatusMessage(
        `User name transaction sent! Hash: <a href="https://polygonscan.com/tx/${tx.hash}" target="_blank" rel="noopener noreferrer">${tx.hash}</a>`
      );
      setUserName(''); // Limpa o campo de entrada após a transação
    } catch (error) {
      console.error("Error adding user name:", error);
      setStatusMessage(`Error adding user name: ${error.message || 'Unknown error'}`);
    }
  };

  const getChainName = (chainId) => {
    const chains = {
      137: 'Polygon',
    };
    return chains[chainId] || 'Unknown Chain';
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Mint Your Blockchain Devs NFT</h1>
      {!isConnected ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p>Wallet Address: {account}</p>
          <p>Wallet Balance: {balance ? balance : '0'}</p>
          <button onClick={disconnectWallet}>Disconnect</button>
        </div>
      )}
      <br/>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Enter your name"
      />
      
      <button onClick={handleAddUserName} disabled={!isConnected}>
        Add Name
      </button>

      <br/><br/><br/>
      <button onClick={handleMintNFT} disabled={!isConnected}>
        Mint NFT
      </button>

      <p dangerouslySetInnerHTML={{ __html: statusMessage }}></p>
    </div>
  );

};

export default App;