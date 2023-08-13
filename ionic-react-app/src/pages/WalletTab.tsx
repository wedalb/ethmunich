import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonCol,
    IonImg,
    IonLabel,
    IonButton,
    IonIcon
} from '@ionic/react';
import './WalletTab.css';
import avatarImage from '../assets/images/avatarmock.jpeg';
import walletImage from '../assets/images/3dwallet.png';

import ExampleCard from "../components/WalletCard";
import {cash, send, settingsSharp} from "ionicons/icons";
import { useHistory } from 'react-router-dom';
import DynamicLineChart from "../components/DynamicLineChart";
import { useState } from 'react';
import BuyWithdrawPopup from '../components/BuyWithdrawPopup';

export interface WalletTabProps { 
    currentAccount: string;
    ethBalance: string;
    krmBalance: string;
    transfer: (amount: string, to: string) => void;
    withdraw: (amount: string) => void;
    buy: (amount: string) => void;
}

const WalletTab = (props: WalletTabProps) => {
    const history = useHistory();
    const [showTransferPopup, setShowTransferPopup] = useState(false);
    const [showBuyWithdrawPopup, setShowBuyWithdrawPopup] = useState(false);
    const [popupType, setPopupType] = useState<"buy" | "withdraw" | "transfer">("buy");


    const navigateToSettings = () => {
        history.push("/settings");
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonGrid>
                    <IonCol>
                        {/* Avatar Row */}
                        <IonRow className="avatar-row">
                            <IonCol className="avatar-image-container" size="auto">
                                <div>
                                    <IonImg src={avatarImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </IonCol>

                            <IonCol>
                                <IonLabel>
                                    <p className="avatar-welcome-text">Welcome back,</p>
                                    <h3 className="avatar-user-name">Sarah Conner</h3>
                                </IonLabel>
                            </IonCol>
                            <IonCol size="auto">
                                <IonButton fill="clear" onClick={navigateToSettings}>
                                    <IonIcon icon={settingsSharp} />
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol>
                                <div className="card-container">
                                    <ExampleCard address={props.currentAccount} ethBalance={props.ethBalance} karmaBalance={props.krmBalance}/>
                                    <img src={walletImage} className="overlay-image" alt="3d Wallet"/>
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow className="wallet-button-row">
                            <IonCol>
                            <IonButton className="wallet-button" size="large" onClick={() => {setShowBuyWithdrawPopup(true); setPopupType("buy")}}>
                                <IonIcon className="wallet-button-icon" slot="start" icon={cash}></IonIcon>
                                Buy
                            </IonButton>
                            <IonButton className="wallet-button" size="large" onClick={() => {setShowBuyWithdrawPopup(true); setPopupType("withdraw")}}>
                                <IonIcon className="wallet-button-icon" slot="start" icon={cash}></IonIcon>
                                Withdraw
                            </IonButton>
                                <IonButton className="wallet-button" size="large"onClick={() => {setShowBuyWithdrawPopup(true); setPopupType("transfer")}}>
                                    <IonIcon className="wallet-button-icon" slot="start" icon={send}></IonIcon>
                                    Transfer
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                        </IonRow>
                    </IonCol>
                </IonGrid>
            </IonContent>
            <BuyWithdrawPopup isOpen={showBuyWithdrawPopup} onClose={() => setShowBuyWithdrawPopup(false)} onBuy={props.buy} onTransfer={props.transfer} onWithdraw={props.withdraw} type={popupType}/>
        </IonPage>
    );
};

export default WalletTab;
