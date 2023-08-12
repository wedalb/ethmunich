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
    IonImg
} from '@ionic/react';
import walletImage from '../assets/images/3dwallet.png';
import './CardComponent.css';

interface CardComponentProps {
    title: string;
    subtitle: string;
    description: string;
    number: string;
}

const CardComponent: React.FC<CardComponentProps> = (props) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleCardClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };

    return (
        <div className="card-container" onClick={handleCardClick}>
            <IonCard className="ion-card">
                <IonCardHeader className="card-header">
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <div>
                                    <IonImg className="card-image" src={walletImage} />
                                </div>
                            </IonCol>
                            <IonCol>
                                <div>
                                    <IonCardTitle>{props.title}</IonCardTitle>
                                    <hr className="divider" />
                                    <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
                                </div>
                            </IonCol>
                            <IonCol>
                                <IonLabel className="card-number">{props.number}</IonLabel>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCardHeader>
            </IonCard>
            {/* You might want to uncomment this when you decide to use the popup */}
            {/* <PopupComponent isOpen={isPopupOpen} onClose={handleClosePopup} /> */}
        </div>
    );
}

export default CardComponent;
