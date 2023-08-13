import React, { useState } from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonImg, IonCardContent, IonButton, IonIcon, IonText
} from '@ionic/react';
import walletImage from '../assets/images/3dwallet.png';
import avatarImage from "../assets/images/avatarmock.jpeg";  // This import is currently unused.
import PopupComponent from "./PopupComponent";
import "./CardComponent.css";
import {settingsSharp} from "ionicons/icons";

interface CardComponentProps {
    title: string;
    subtitle: string;
    description: string; // Currently not being used in the component
    number: string;
    address: string; // Currently not being used in the component
    isOwner: boolean;
    onAccept: () => void;
    onCancel: () => void;
    onRevoke: () => void;
    onClaim: () => void;
    isClaimed: boolean;
    currentAccount: string;
    contestant: string;
}

const CardComponent: React.FC<CardComponentProps> = (props) => {
    const [showPopup, setShowPopup] = useState(false);
    const openPopup = () => {
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
        console.log("closing");

        // see bugreport https://github.com/ionic-team/ionic-framework/issues/22336
        /*
        const ionOverlay = 'ion-overlay-';
        for (let i = 1; i < 100; i++) {
            let overlay = ionOverlay.concat(i.toString());
            const modal = document.getElementById(overlay) as HTMLIonInputElement;
            if (modal) {
                const parent = modal.parentNode;
                parent?.removeChild(modal);
                break;
            }
        }*/
    };

    return (
        <>
        <div onClick={openPopup}>
            <IonCard>
                <IonRow className="cards-row">
                    <IonCol>
                        <IonLabel>
                            <IonText className="cards-title">{props.title}</IonText>
                            <IonText className="cards-subtitle">{props.subtitle}</IonText>
                        </IonLabel>
                    </IonCol>
                    <IonCol size="auto">
                        <IonText className="cards-number">{props.number}</IonText>
                    </IonCol>
                </IonRow>
            </IonCard>
        </div>

            <PopupComponent isOpen={showPopup} onClose={closePopup}  title={props.title} subtitle={props.subtitle} isOwner={props.isOwner} address={props.address} 
            onAccept={props.onAccept} onCancel={props.onCancel} onClaim={props.onClaim} onRevoke={props.onRevoke} isClaimed={props.isClaimed} currentAccount={props.currentAccount} contestant={props.contestant}/>
        </>
            );

}

export default CardComponent;
