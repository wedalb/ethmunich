import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
// @ts-ignore
import { COLOR_PALETTE } from "../assets/constants.js"; // Adjust the path accordingly
import './WalletCard.css';
import DynamicLineChart from "./DynamicLineChart";

const WalletCard: React.FC = () => {
    return (
        <IonCard className="wallet-card">
            <IonCardHeader>
                <IonCardSubtitle className="wallet-card-subtitle">Your Wallet</IonCardSubtitle>
                <IonCardTitle className="wallet-card-title">345 KP</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
                <DynamicLineChart/>
            </IonCardContent>
        </IonCard>
    );
}


export default WalletCard;
