import React from 'react';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonItem,
    IonList,
    IonSelect, IonSelectOption
} from '@ionic/react';
import './WalletCard.css';
import DynamicLineChart from "./DynamicLineChart";
import { useState, useEffect } from 'react';

export interface ExampleCardProps {
    ethBalance: string;
    karmaBalance: string;
    address: string;
}
const WalletCard = (props: ExampleCardProps) => {
    // Set up state for the selected option and its display value
    const [selectedOption, setSelectedOption] = useState<string>('karma');
    const [displayValue, setDisplayValue] = useState<string>('KP');

    // Update the display value whenever the selected option changes
    useEffect(() => {
        switch (selectedOption) {
            case 'eth':
                setDisplayValue(`${props.ethBalance} ETH`);
                break;
            case 'polygon':
                setDisplayValue('36 MATIC');
                break;
            default:
                setDisplayValue(`${props.karmaBalance} KARMA`);
        }
    }, [selectedOption]);

    return (
        <IonCard className="wallet-card">
            <IonCardHeader>
                <IonList className="wallet-selector-list">
                    <IonItem className="wallet-selector-item">
                        <IonSelect
                            className="wallet-selector-select"
                            aria-label="Karma Wallet"
                            interface="popover"
                            placeholder="Select a Currency"
                            value={selectedOption}
                            onIonChange={e => setSelectedOption(e.detail.value)}
                        >
                            <IonSelectOption className="wallet-selector-selectoption" value="karma">Your Karmalized Wallet</IonSelectOption>
                            <IonSelectOption className="wallet-selector-selectoption" value="eth">Your Ethereum Wallet</IonSelectOption>
                            <IonSelectOption className="wallet-selector-selectoption" value="polygon">Your Polygon Wallet</IonSelectOption>
                        </IonSelect>
                    </IonItem>
                </IonList>
                <IonCardTitle className="wallet-card-title">{displayValue}</IonCardTitle>
                <IonCardSubtitle>{props.address}</IonCardSubtitle>
            </IonCardHeader>

            <IonCardContent>
                <DynamicLineChart/>
            </IonCardContent>
        </IonCard>
    );
}

export default WalletCard;
