import React from 'react';
import {
    IonButton,
    IonContent,
    IonHeader,
    IonModal,
    IonTitle,
    IonToolbar,
    IonInput,
    IonImg
} from '@ionic/react';

import './Popup.css'; // Import your custom CSS for styling

interface PopupComponentProps {
    isOpen: boolean;
    onClose: () => void;
    title: string; // Add title prop
    subtitle: string; // Add subtitle prop
}

const PopupComponent: React.FC<PopupComponentProps> = ({ isOpen, onClose, title, subtitle }) => {
    const [inputValue, setInputValue] = React.useState('');

    return (
        <IonModal isOpen={isOpen} className="custom-popup">
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Popup Title</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <div className="popup-content">
                    <p>This is the content of the popup.</p>
                    <p>Title: {title}</p>
                    <p>Subtitle: {subtitle}</p>
                    <IonInput
                        value={inputValue}
                        placeholder="Enter text"
                        onIonChange={(e) => setInputValue(e.detail.value!)}
                    />
                    <IonButton onClick={onClose}>Close</IonButton>
                </div>
            </IonContent>
        </IonModal>
    );
};

export default PopupComponent;
