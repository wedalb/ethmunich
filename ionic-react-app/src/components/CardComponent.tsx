import React, { useState } from 'react';
import {
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonButton,
    IonLabel,
    IonGrid,
    IonRow,
    IonCol,
    IonImg
} from '@ionic/react';
import walletImage from '../assets/images/3dwallet.png';
import avatarImage from "../assets/images/avatarmock.jpeg";
import PopupComponent from "./PopupComponent"
import "./CardComponent.css"

interface CardComponent {
    title: string;
    subtitle: string;
    description: string;
    number : string;
}

function handleClick() {

}
//{props.description}
const CardComponent :  React.FC<CardComponent> = (props) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleCardClick = () => {
        setIsPopupOpen(true);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
    };
    return (
        <div className="card-container" onClick={handleCardClick}>
            <IonCard className="ion-card" >
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
            <IonCardContent > </IonCardContent>

        </IonCard>
            <PopupComponent isOpen={isPopupOpen} onClose={handleClosePopup} />
</div>

    );
}
export default CardComponent;