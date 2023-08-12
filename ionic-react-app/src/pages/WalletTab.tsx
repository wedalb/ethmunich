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
    IonButton, IonIcon
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './WalletTab.css';
import avatarImage from '../assets/images/avatarmock.jpeg';
import walletImage from '../assets/images/3dwallet.png';

import ExampleCard from "../components/ExampleCard";
import {star} from "ionicons/icons";

const WalletTab: React.FC = () => {
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



                            <IonCol size="auto">
                                <div style={{ width: '50px', height: '50px', borderRadius: '10%', overflow: 'hidden' }}>
                                    <IonImg src={avatarImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </IonCol>

                            <IonCol>
                                <IonLabel>
                                    <p>Welcome back,</p>
                                    <h3>Sarah Conner</h3>
                                </IonLabel>
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
                                <IonIcon slot="start" icon={star}></IonIcon>
                                Withdraw
                            </IonButton>
                            <IonButton className="wallet-button" size="large">
                                <IonIcon slot="start" icon={star}></IonIcon>
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
