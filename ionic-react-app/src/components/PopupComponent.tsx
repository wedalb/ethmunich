import React from 'react';
import { IonContent, IonModal, IonButton } from '@ionic/react';
import CardComponent from "./CardComponent";
import ExampleCard from "./ExampleCard";
import "./Popup.css";
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
            <ExampleCard/>
        </IonModal>
    );
};

export default PopupComponent;
