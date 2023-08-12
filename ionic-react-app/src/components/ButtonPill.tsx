import React, { useState } from 'react';
import { IonButton } from '@ionic/react';
import './ButtonPill.css'; // Create a CSS file for styling

const ButtonPill: React.FC = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return (
        <IonButton
            className={`button-pill ${isPressed ? 'pressed' : ''}`}
            onClick={handlePress}
            fill="clear"
        >
            {isPressed ? 'Unclaim' : 'Claim Reward'}
        </IonButton>
    );
};

export default ButtonPill;
