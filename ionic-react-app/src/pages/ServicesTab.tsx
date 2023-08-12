import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CardComponent from '../components/CardComponent';
import './ServicesTab.css';

import { useEffect, useState } from 'react';
import Web3, { Contract } from 'web3';
import ETHService from "../abi/ETHServices.json"
import { MetaMaskInpageProvider } from "@metamask/providers";

declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}
interface Service {
  title: string;
  description : string;
  owner: string;
  contestant: string;
  amount: bigint;
}


const items = {

}
const ServicesTab: React.FC = () => {
    const items = [
        { title: 'Fix Bench in your local park', subtitle: 'Someone vandalized the bench here.' },
        { title: 'Repair Piping in the Animal Shelter', subtitle: 'The kitties are drippin\'  '},
        { title: 'Help a grandma commit tax fraud Help a grandma commit tax fraud', subtitle: 'Grandma Stevens is too old to pay taxesHelp a grandma commit tax fraud' },
        { title: 'Fix Bench in your local park', subtitle: 'Someone vandalized the bench here.' },
        { title: 'Repair Piping in the Animal Shelter', subtitle: 'The kitties are drippin\'  '},
        { title: 'Help a grandma commit tax fraud', subtitle: 'Grandma Stevens is too old to pay taxes' },{ title: 'Fix Bench in your local park', subtitle: 'Someone vandalized the bench here.' },
        { title: 'Repair Piping in the Animal Shelter', subtitle: 'The kitties are drippin\'  '},
        { title: 'Help a grandma commit tax fraud', subtitle: 'Grandma Stevens is too old to pay taxes' },{ title: 'Fix Bench in your local park', subtitle: 'Someone vandalized the bench here.' },
        { title: 'Repair Piping in the Animal Shelter', subtitle: 'The kitties are drippin\'  '},
        { title: 'Help a grandma commit tax fraud', subtitle: 'Grandma Stevens is too old to pay taxes' },{ title: 'Fix Bench in your local park', subtitle: 'Someone vandalized the bench here.' },
        { title: 'Repair Piping in the Animal Shelter', subtitle: 'The kitties are drippin\'  '},
        { title: 'Help a grandma commit tax fraud', subtitle: 'Grandma Stevens is too old to pay taxes' },
    ];


    

  // General state vars
  const [web3, setWeb3] = useState<Web3>();
  const [blockNumber, setBlockNumber] = useState<bigint>();

  // Contract vars
  const [ethService, setEthService] = useState<Contract<any>>();

  // User related state vars
  const [services, setServices] = useState<Service[]>();
  const [account, setAccount] = useState<string>();
  const [activeServiceOwners, setActiveServiceOwners] = useState<string[]>();


  const [ethBalance, setEthBalance] = useState<string>();
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  /*   Check MetaMask exists and user account connected
       Initialize state variables
  */
  const checkWalletConnection = async () => {
    if (true) {
      const web3 = new Web3(window.ethereum);
      const netId = await web3.eth.net.getId();
      // Accounts available on MetaMask should be accesible
      // if MetaMask is connected
      const accounts = await web3.eth.getAccounts();
      // If account state var not initialized and MetMask connected
      if (!account && accounts[0]) {
        // Initialize web3
        setWeb3(web3);
        setBlockNumber(await web3.eth.getBlockNumber());

        // Initalize contracts
        const ethServiceContract = new web3.eth.Contract(
          ETHService.abi, // Contract ABI
          ETHService.networks["5777"].address // Contract address
        );
        setEthService(ethServiceContract);

        // Initialize user account
        const balance = await web3.eth.getBalance(accounts[0]);
        setAccount(accounts[0]);

        setEthBalance(web3.utils.fromWei(balance, "ether"));
        const activeOwners = await ethServiceContract.methods.getDepositedAddresses().call() as string[];
        console.log(activeOwners);
        setActiveServiceOwners(activeOwners);
        
        const serviceArray : Service[] = [];
        for (var activeOwner of activeOwners){
          //ts-ignore
          serviceArray.push(await ethServiceContract?.methods.services(activeOwner).call());
        }

        console.log(serviceArray);
        setServices(serviceArray);


        setIsWalletConnected(true);
      }
    } else {
      alert("Make sure you have MetaMask installed!");
      return;
    }
  };

  const handleAccept = async (serviceAddress : string) => {
    try {
      //ts-ignore
      await ethService!.methods.accept(Web3.utils.toChecksumAddress(serviceAddress)).send({
        from: account,
      });
      const activeOwners = await ethService!.methods.getDepositedAddresses().call() as string[];
      console.log(activeOwners);
      setActiveServiceOwners(activeOwners);
      const serviceArray : Service[] = [];
      for (var activeOwner of activeOwners){
        //ts-ignore
        serviceArray.push(await ethService?.methods.services(activeOwner).call() as Service);
      }
      console.log(serviceArray);
      setServices(serviceArray);
    } catch (e) {
      console.log(e);
    }
  }


  // Make deposit from user account
  const handleCancel = async  (serviceAddress: string) => {
    try {
      //ts-ignore
      await ethService!.methods.cancel(Web3.utils.toChecksumAddress(serviceAddress)).send({
        from: account,
      });
      const activeOwners = await ethService!.methods.getDepositedAddresses().call() as string[];
      console.log(activeOwners);
      setActiveServiceOwners(activeOwners);
      const serviceArray : Service[] = [];
      for (var activeOwner of activeOwners){
        //ts-ignore
        serviceArray.push(await ethService?.methods.services(activeOwner).call() as Service);
      }
      console.log(serviceArray);
      setServices(serviceArray);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSubmit = async (title: string, description: string, amount: string) => {
    try {
      //ts-ignore
      await ethService!.methods.submit(title, description).send({
        from: account,
        value: amount,
      });
      const activeOwners = await ethService!.methods.getDepositedAddresses().call() as string[];
      console.log(activeOwners);
      setActiveServiceOwners(activeOwners);
      const serviceArray : Service[] = [];
      for (var activeOwner of activeOwners){
        //ts-ignore
        serviceArray.push(await ethService?.methods.services(activeOwner).call() as Service);
      }
      console.log(serviceArray);
      setServices(serviceArray);
    } catch (e) {
      console.log(e);
    }
  };

  const claimContestant = async (serviceAddress: string) => {
    try {
      //ts-ignore
      await ethService!.methods.setContestant(Web3.utils.toChecksumAddress(serviceAddress)).send({
        from: account,
      });
      const activeOwners = await ethService!.methods.getDepositedAddresses().call() as string[];
      console.log(activeOwners);
      setActiveServiceOwners(activeOwners);
      const serviceArray : Service[] = [];
      for (var activeOwner of activeOwners){
        //ts-ignore
        serviceArray.push(await ethService?.methods.services(activeOwner).call() as Service);
      }
      console.log(serviceArray);
      setServices(serviceArray);
    } catch (e) {
      console.log(e);
    }
  }

  const revokeContestant = async (serviceAddress: string) => {
    try {
      //ts-ignore
      await ethService!.methods.revokeContestant(Web3.utils.toChecksumAddress(serviceAddress)).send({
        from: account,
      });
      const activeOwners = await ethService!.methods.getDepositedAddresses().call() as string[];
      console.log(activeOwners);
      setActiveServiceOwners(activeOwners);
      const serviceArray : Service[] = [];
      for (var activeOwner of activeOwners){
        //ts-ignore
        serviceArray.push(await ethService?.methods.services(activeOwner).call() as Service);
      }
      console.log(serviceArray);
      setServices(serviceArray);
    } catch (e) {
      console.log(e);
    }
  };

  // Handler to connect user MetaMask to app
  const connectWalletHandler = async () => {
    if (true) {
      try {
        // Request access to MetaMask accounts
        await window.ethereum.request({ method: "eth_requestAccounts" });
        checkWalletConnection();
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Make sure you have MetaMask installed!");
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="" />
          <div className="card-list-container">
              {items.map((item, index) => (
                  <CardComponent key={index} title={item.title} subtitle={item.subtitle} description={"Test"} number={"+0.025ETH"} />
              ))}
          </div>
      </IonContent>
    </IonPage>
  );
};

export default ServicesTab;
