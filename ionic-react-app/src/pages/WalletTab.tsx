import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonImg, IonLabel } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './WalletTab.css';
import avatarImage from '../assets/images/avatarmock.jpeg';


const WalletTab: React.FC = () => {
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 3</IonTitle>
                    </IonToolbar>
                </IonHeader>

                {/* Avatar Row*/}
                <IonGrid>
                    <IonRow className="ion-align-items-center">
                        {/* We use 'ion-align-items-center' for vertical centering */}
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
                </IonGrid>

                <ExploreContainer name="Wallet tab page" />
            </IonContent>
        </IonPage>
    );
};

export default WalletTab;
