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
        const ionOverlay = 'ion-overlay-';
        for (let i = 1; i < 100; i++) {
            let overlay = ionOverlay.concat(i.toString());
            const modal = document.getElementById(overlay) as HTMLIonInputElement;
            if (modal) {
                const parent = modal.parentNode;
                parent?.removeChild(modal);
                break;
            }
        }
    };

    return (
        <div className="card-container" onClick={openPopup}>
            <IonCard className="ion-card">
                <IonCardHeader className="card-header">
                    <IonGrid>
                        <IonRow>
                            <IonCol size="3" className="image-col"> {/* Column for the image */}
                                <div className="image-overlay">
                                    <IonImg src={walletImage} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                            </IonCol>
                            <IonCol size="6"> {/* Column for the title and subtitle */}
                                <div className="title-container">
                                    <IonCardTitle>{props.title}</IonCardTitle>
                                    <hr className="divider" />
                                    <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
                                </div>
                            </IonCol>
                            <IonCol size="2" className="number-col"> {/* Column for the number */}
                                <IonLabel className="large-number card-header">{props.number}</IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardHeader>
                <IonCardContent> </IonCardContent>
            </IonCard>
            <PopupComponent isOpen={showPopup} onClose={closePopup}  title={props.title} subtitle={props.subtitle} />
        </div>
    );
}

export default CardComponent;
