import React from 'react';
import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonLabel, IonGrid, IonRow, IonCol } from '@ionic/react';


interface CardComponent {
    title: string;
    subtitle: string;
    description: string;
    number : number;
}
//{props.description}
const CardComponent :  React.FC<CardComponent> = (props) => {
    return (
        <IonCard className="ion-card-with-shadow" >
            <IonCardHeader>
                <IonCardTitle> {props.title }</IonCardTitle>
                <IonCardSubtitle> { props.subtitle }</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonLabel className="large-number card-header">{props.number}</IonLabel>
            </IonCardContent>
        </IonCard>
    );
}
export default CardComponent;