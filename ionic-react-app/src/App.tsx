import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {
  add,
  addOutline,
  chatbubbleOutline,
  gridOutline,
  walletOutline
} from 'ionicons/icons';
import JobsTab from './pages/ServicesTab';
import AddTab from './pages/AddTab';
import WalletTab from './pages/WalletTab';
import ChatTab from "./pages/ChatTab";

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useEffect, useState } from 'react';
import Web3, { Contract } from 'web3';
import ETHService from "./abi/ETHServices.json"
import KRMToken from "./abi/KarmaToken.json"
import { MetaMaskInpageProvider } from "@metamask/providers";
import SettingsPage from "./pages/SettingsPage";
import './App.css'


declare global {
  interface Window{
    ethereum?:MetaMaskInpageProvider
  }
}
export interface Service {
  title: string;
  description : string;
  owner: string;
  contestant: string;
  amount: bigint;
}
setupIonicReact();

const App: React.FC = () => {


  // General state vars
  const [web3, setWeb3] = useState<Web3>();
  const [blockNumber, setBlockNumber] = useState<bigint>();

  // Contract vars
  const [ethService, setEthService] = useState<Contract<any>>();
  const [krmToken, setKrmToken] = useState<Contract<any>>();

  // User related state vars
  const [services, setServices] = useState<Service[]>();
  const [account, setAccount] = useState<string>();
  const [activeServiceOwners, setActiveServiceOwners] = useState<string[]>();


  const [ethBalance, setEthBalance] = useState<string>();
  const [krmBalance, setKrmBalance] = useState<string>();
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  /*   Check MetaMask exists and user account connected
       Initialize state variables
  */
  const checkWalletConnection = async () => {
    if (window.ethereum !== undefined) {
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
          ETHService.networks[netId].address // Contract address
        );
        const krmTokenContract = new web3.eth.Contract(
          KRMToken.abi, // Contract ABI
          KRMToken.networks[netId].address // Contract address
        );
        setEthService(ethServiceContract);
        setKrmToken(krmTokenContract);


        // Initialize user account
        const balance = await web3.eth.getBalance(accounts[0]);
        setAccount(accounts[0]);

        setEthBalance(web3.utils.fromWei(balance, "ether"));
        const tokenBalance = await krmTokenContract.methods
          .balanceOf(accounts[0])
          .call() as string;
        setKrmBalance(tokenBalance);

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

  const buyKarma = async (amount: string) => {
    try {
      //ts-ignore
      await krmToken?.methods.mintTokens().send({
        from: account,
        value: web3?.utils.toWei(amount, "ether"),
      });
      const tokenBalance = await krmToken?.methods
        .balanceOf(account)
        .call() as string;
      setKrmBalance(tokenBalance);
      const ethBalance = await web3?.eth.getBalance(account);
      setEthBalance(web3?.utils.fromWei(ethBalance!, "ether"));
    } catch (e) {
      console.log(e);
    }
  };

  const transferKarma = async (amount: string, to: string) => {
    try {
      //ts-ignore
      await krmToken?.methods.transfer(to, amount).send({
        from: account,
      });
      const tokenBalance = await krmToken?.methods
        .balanceOf(account)
        .call() as string;
      setKrmBalance(tokenBalance);
    } catch (e) {
      console.log(e);
    }
  };

  const withdrawKarma = async (amount: string) => {
    try {
      //ts-ignore
      await krmToken?.methods.exchangeTokens(amount).send({
        from: account,
      });
      const tokenBalance = await krmToken?.methods
        .balanceOf(account)
        .call() as string;
      setKrmBalance(tokenBalance);
      const ethBalance = await web3?.eth.getBalance(account);
      setEthBalance(web3?.utils.fromWei(ethBalance!, "ether"));
    } catch (e) {
      console.log(e);
    }
  };



  const handleAccept = async (serviceAddress : string) => {
    try {
      console.log('accepting');
      console.log(serviceAddress);
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


  useEffect(() => {
    connectWalletHandler();
  }, []);

  // Make deposit from user account
  const handleCancel = async  (serviceAddress: string) => {
    try {
      console.log('cancelling');
      console.log(serviceAddress);
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
      console.log('submitting');
      console.log(title, description, amount);
      //ts-ignore
      await ethService!.methods.submit(title, description).send({
        from: account,
        value: web3!.utils.toWei(amount, "ether"),
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
      console.log('claiming');
      console.log(serviceAddress);
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
      console.log('revoking');
      console.log(serviceAddress);
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
    if (window.ethereum !== undefined) {
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
    <IonApp>
      <IonReactRouter>
        <IonTabs className="custom-tabbar">
          <IonRouterOutlet>
            <Route exact path="/services">
              <JobsTab services={services ?? []} onAccept={handleAccept} onCancel={handleCancel} onClaim={claimContestant} onRevoke={revokeContestant} currentAccount={account!}/>
            </Route>
            <Route exact path="/addService">
              <AddTab handleSubmit={handleSubmit}/>
            </Route>
            <Route path="/wallet">
              <WalletTab currentAccount={account!} ethBalance={ethBalance!} krmBalance={krmBalance!} buy={buyKarma} transfer={transferKarma} withdraw={withdrawKarma}/>
            </Route>
            <Route exact path="/chat">
              <ChatTab />
            </Route>
            <Route exact path="/settings">
              <SettingsPage />
            </Route>
            <Route exact path="/">
              <Redirect to="/services" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="services" href="/services">
              <IonIcon aria-hidden="true" icon={gridOutline} />
              <IonLabel>Service</IonLabel>
            </IonTabButton>
            <IonTabButton tab="addService" href="/addService">
              <IonIcon aria-hidden="true" icon={addOutline} />
              <IonLabel>Add Service</IonLabel>
            </IonTabButton>
            <IonTabButton tab="chat" href="/chat">
              <IonIcon aria-hidden="true" icon={chatbubbleOutline} />
              <IonLabel>Chat</IonLabel>
            </IonTabButton>
            <IonTabButton tab="wallet" href="/wallet">
              <IonIcon aria-hidden="true" icon={walletOutline} />
              <IonLabel>Wallet</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
);

}

export default App;
