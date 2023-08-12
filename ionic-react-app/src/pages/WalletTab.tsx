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

import ExampleCard from "../components/ExampleCard";
import {cash, send, settingsSharp} from "ionicons/icons";
import { useHistory } from 'react-router-dom';

const WalletTab: React.FC = () => {
    const history = useHistory();

    const navigateToSettings = () => {
        history.push("/settings");
    };

    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 3</IonTitle>
                    </IonToolbar>
                </IonHeader>
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
                                    <ExampleCard />
                                    <img src={walletImage} className="overlay-image" alt="3d Wallet"/>
                                </div>
                            </IonCol>
                        </IonRow>
                        <IonRow className="wallet-button-row">
                            <IonButton className="wallet-button" size="large">
                                <IonIcon className="custom-icon-size" slot="start" icon={cash}></IonIcon>
                                Withdraw
                            </IonButton>
                            <IonButton className="wallet-button" size="large">
                                <IonIcon className="custom-icon-size" slot="start" icon={send}></IonIcon>
                                Transfer
                            </IonButton>
                        </IonRow>
                    </IonCol>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default WalletTab;
