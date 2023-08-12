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
    IonImg, IonCardContent
} from '@ionic/react';
import walletImage from '../assets/images/3dwallet.png';
import avatarImage from "../assets/images/avatarmock.jpeg";  // This import is currently unused.
import PopupComponent from "./PopupComponent";
import "./CardComponent.css";

interface CardComponentProps {
    title: string;
    subtitle: string;
    description: string; // Currently not being used in the component
    number: string;
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
        <div onClick={openPopup}>
            <IonCard>
                <IonRow>
                    <IonCardHeader>
                        <IonCardTitle className="cards-title">{props.title}</IonCardTitle>
                        <IonCardSubtitle className="cards-subtitle">{props.subtitle}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCol className="cards-number-col">
                        <p className="cards-number"> {props.number}
                        </p>
                    </IonCol>
                </IonRow>
            </IonCard>
            <PopupComponent isOpen={showPopup} onClose={setShowPopup}  title={props.title} subtitle={props.subtitle} />
        </div>
    );
}

export default CardComponent;
