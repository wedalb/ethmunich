import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
// @ts-ignore
import { COLOR_PALETTE } from "../assets/constants.js"; // Adjust the path accordingly
import './ExampleCard.css';

export interface ExampleCardProps {
    ethBalance: string;
    karmaBalance: string;
    address: string;
}

const ExampleCard = (props: ExampleCardProps) => {
    return (
        <IonCard style={{ background: COLOR_PALETTE.VIOLET.GRADIENT }}>
            <IonCardHeader>
                <IonCardSubtitle>{props.address}</IonCardSubtitle>
                <IonCardTitle>{`${props.ethBalance} ETH     ${props.karmaBalance} KRM`}</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>


            </IonCardContent>
        </IonCard>
    );
}


export default ExampleCard;
