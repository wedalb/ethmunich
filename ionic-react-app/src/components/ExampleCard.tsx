import React from 'react';
import {
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle, IonItem,
    IonList, IonSelect,
    IonSelectOption
} from '@ionic/react';

import './ExampleCard.css';

export interface ExampleCardProps {
    ethBalance: string;
    karmaBalance: string;
    address: string;
}

const ExampleCard = (props: ExampleCardProps) => {
    return (
        <IonCard>
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
