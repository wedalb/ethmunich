// ChatMock.tsx

import React from 'react';
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonItem,
    IonLabel,
} from '@ionic/react';
import './ChatTab.css';

const ChatTab: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Chat Mock</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <div className="message other">
                    <IonLabel>Hey! How are you?</IonLabel>
                </div>
                <div className="message me">
                    <IonLabel>I'm good! Thanks for asking. How about you?</IonLabel>
                </div>
                <div className="message other">
                    <IonLabel>Doing great, thanks!</IonLabel>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ChatTab;
