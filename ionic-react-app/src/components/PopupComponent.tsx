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
    onClose: any;
    title: string; // Add title prop
    subtitle: string; // Add subtitle prop
    isOwner: boolean;
    onAccept: () => void;
    onCancel: () => void;
    onRevoke: () => void;
    onClaim: () => void;
    address: string;
    isClaimed: boolean;
    currentAccount: string;
    contestant: string;
}

const PopupComponent: React.FC<PopupComponentProps> = (props: PopupComponentProps) => {
    const [inputValue, setInputValue] = React.useState('');



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
                        <IonCardTitle>{props.title}</IonCardTitle>
                        <hr className="divider" />
                        <IonCardSubtitle>{props.subtitle}</IonCardSubtitle>
                    </div>
                    <IonInput
                        value={inputValue}
                        placeholder="Enter text"
                        onIonChange={(e) => setInputValue(e.detail.value!)}
                    />
<<<<<<< HEAD
                    <IonButton onClick={onClose(false)}>Close</IonButton>
                    <ButtonPill />
=======
                    <IonButton onClick={props.onClose}>Close</IonButton>
                    {
                        props.isOwner ? (<>
                            <ButtonPill pressedText='' unpressedText='Accept' handlePress={props.onAccept} />
                            <ButtonPill pressedText='' unpressedText='Cancel' handlePress={props.onCancel} />
                            {props.isClaimed ? <ButtonPill pressedText='' unpressedText='Revoke' handlePress={props.onRevoke} /> : <> </>}
                        </>) : (<>
                            {!props.isClaimed ? <ButtonPill pressedText='' unpressedText='Claim' handlePress={props.onClaim} />
                                : (props.currentAccount === props.contestant ? <ButtonPill pressedText='' unpressedText='Revoke' handlePress={props.onRevoke} /> : <></>)
                            }
                        </>)
                    }
>>>>>>> backend
                </div>
            </IonContent>
        </IonModal>
    );
};

export default PopupComponent;
