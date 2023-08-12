import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
// @ts-ignore
import { COLOR_PALETTE } from "../assets/constants.js"; // Adjust the path accordingly
import './ExampleCard.css';

const ExampleCard: React.FC = () => {
    return (
        <IonCard className="wallet-card">
            <IonCardHeader>
                <IonCardSubtitle>Your Wallet</IonCardSubtitle>
                <IonCardTitle>345 Points</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>


            </IonCardContent>
        </IonCard>
    );
}


export default ExampleCard;
