import React from 'react';
import { IonContent, IonModal, IonButton } from '@ionic/react';
import CardComponent from "./CardComponent";
import ExampleCard from "./ExampleCard";

interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
}

const PopupComponent: React.FC<PopupProps> = ({ isOpen, onClose }) => {
    return (
        <IonModal
            isOpen={isOpen}
            onDidDismiss={onClose}
            className="custom-modal" // Add a custom CSS class
        >
            <IonContent>
                {/* Your popup content */}
                <p>This is a popup window.</p>
                <ExampleCard />
                <IonButton onClick={onClose}>Close</IonButton>
            </IonContent>
        </IonModal>
    );
};

export default PopupComponent;
