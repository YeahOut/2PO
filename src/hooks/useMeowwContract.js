// useMeowwzContract.js
import { useState, useEffect } from "react";
import Web3 from "web3";
import Meoww from "../truffle_abis/Meoww.json"; // Replace this with the actual contract JSON file.

const useMeowwzContract = (imageList, idx) => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [totalSupply, setTotalSupply] = useState(0);
  const [meowwz, setMeowwz] = useState([]);
  const [isMinting, setIsMinting] = useState(false);

  useEffect(() => {
    const loadWeb3 = async () => {
      if (window.ethereum) {
        window.web3 = new Web3(window.ethereum);
        await window.ethereum.enable();
        console.log("Ethereum wallet is connected");
      } else if (window.web3) {
        window.web3 = new Web3(window.web3.currentProvider);
        console.log("Legacy web3 browser detected");
      } else {
        window.alert(
          "No ethereum browser detected! You can check out MetaMask!"
        );
      }
    };

    const loadBlockchainData = async () => {
      const web3 = window.web3;

      if (web3) {
        try {
          const accounts = await web3.eth.getAccounts();
          setAccount(accounts[0]);
          console.log(accounts[0]);

          const networkId = await web3.eth.net.getId();
          const networkData = Meoww.networks[networkId];
          console.log(networkData);

          if (networkData) {
            const abi = Meoww.abi;
            const address = networkData.address;
            const contract = new web3.eth.Contract(abi, address);
            setContract(contract);
            console.log(contract);

            const totalSupply = await contract.methods.totalSupply().call();
            setTotalSupply(totalSupply);

            const meowwzArray = [];
            for (let i = 0; i < totalSupply; i++) {
              const Meoww = await contract.methods.meowwz(i).call();
              console.log(Meoww);
              meowwzArray.push(Meoww);
            }
            setMeowwz(meowwzArray);
          }
        } catch (error) {
          console.error("Error loading blockchain data:", error);
        }
      } else {
        console.log(
          "Web3 object is undefined. Make sure the provider is properly initialized."
        );
      }
    };

    loadWeb3();
    loadBlockchainData();
  }, []);

  const mint = async () => {
    try {
      await contract.methods
        .mint(account, imageList[idx])
        .send({ from: account });

      setMeowwz((prevState) => [...prevState, imageList[idx]]);
      setIsMinting(true);
    } catch (error) {
      console.error("Error minting NFT:", error);
    }
  };

  return {
    account,
    contract,
    totalSupply,
    meowwz,
    mint,
    isMinting,
  };
};

export default useMeowwzContract;
