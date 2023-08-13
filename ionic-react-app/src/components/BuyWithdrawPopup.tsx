import React from 'react';
import {
    IonButton,
    IonContent,
    IonHeader,
    IonModal,
    IonTitle,
    IonToolbar,
    IonInput,
    IonImg, IonCardTitle, IonCardSubtitle
} from '@ionic/react';

import './Popup.css'; // Import your custom CSS for styling
import ButtonPill from "./ButtonPill"

interface PopupComponentProps {
    isOpen: boolean;
    onClose: () => void;
    onBuy: (amount: string) => void;
    onWithdraw: (amount: string) => void;
    onTransfer: (amount: string, to: string) => void;
    type: "buy" | "withdraw" | "transfer";
}

const PopupComponent: React.FC<PopupComponentProps> = (props: PopupComponentProps) => {
    const [amount, setAmount] = React.useState('');
    const [address, setAddress] = React.useState('');

    const renderSwitch = (param: string) => {

        switch (props.type) {
            case "buy":
                return <IonButton onClick={() => props.onBuy(amount)}>Buy</IonButton>;
            case "withdraw":
                return <IonButton onClick={() => props.onWithdraw(amount)}>Withdraw</IonButton>;
            case "transfer":
                return <IonButton onClick={() => props.onTransfer(amount, address)}>Transfer</IonButton>;
        }
    }

    return (
        <IonModal isOpen={props.isOpen} className="custom-popup">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Popup Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="popup-content">
                    <div className="title-container">
                        <IonCardTitle>Transfer</IonCardTitle>
                    </div>
                    <IonInput
                        value={amount}
                        placeholder="Enter text"
                        onIonChange={(e) => setAmount(e.detail.value!)}
                    />
                    {
                        props.type === "transfer" ? (
                            <IonInput
                                value={address}
                                placeholder="Enter address"
                                onIonChange={(e) => setAddress(e.detail.value!)}
                            />
                        ) : null
                    }
                    <IonButton onClick={props.onClose}>Close</IonButton>
                    {renderSwitch(props.type)}
                </div>
            </IonContent>
        </IonModal>
    );
};

export default PopupComponent;
