import React, { useState } from 'react';
import { IonButton } from '@ionic/react';
import './ButtonPill.css'; // Create a CSS file for styling

export interface ButtonPillProps {
    pressedText: string;
    unpressedText: string;
    handlePress: () => void;
}

const ButtonPill = (props: ButtonPillProps) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePress = () => {
        setIsPressed(!isPressed);
    };

    return (
        <IonButton
            className={`button-pill ${isPressed ? 'pressed' : ''}`}
            onClick={props.handlePress}
            fill="clear"
        >
            {isPressed ? props.pressedText : props.unpressedText}
        </IonButton>
    );
};

export default ButtonPill;
