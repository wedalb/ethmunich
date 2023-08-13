import ExploreContainer from '../components/ExploreContainer';
import './AddTab.css';
import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonTextarea,
  IonItem,
  IonLabel,
  IonButton,
  IonToast, IonCol, IonRow, IonText, IonIcon,
} from '@ionic/react';
import Lottie from "lottie-react";
import transactionLottie from "../assets/lotties/transactionLottie.json";
import {arrowForward} from "ionicons/icons";

export interface AddTabProps {
  handleSubmit: (title: string, description: string, price: string) => void;
}

const AddTab = (props: AddTabProps) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [showToast, setShowToast] = useState(false);

  const handleSubmit = () => {
    // You can handle the form submission logic here
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Price:', price);
    // Show the toast
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonContent>
        <IonRow>
          <IonCol>
            <IonTitle className="custom-headline">Add a new job</IonTitle>
          </IonCol>
        </IonRow>
        <IonRow className="add-service-explanation-row">
          <IonCol>
            <Lottie className="lottie2-animation" animationData={transactionLottie} />
          </IonCol>
          <IonCol>
            <IonCol className="add-service-centered-text-col">
              <IonText className="add-service-description">
                Add information about the job you want to add. Let your community members know how much Karmapoints they receive for helping you! Every transaction is secured and approved by both parties and secured trough decentralized networks
              </IonText>
            </IonCol>
            <IonButton className="advertisement-button" fill="outline">
              Want to find out more?
              <IonIcon slot="end" icon={arrowForward}></IonIcon>
            </IonButton>

          </IonCol>

        </IonRow>

        <div className="form-container">
        <IonItem className="custom-forms-container">
          <IonLabel position="floating">Title</IonLabel>
          <IonInput
            value={title}
            onIonChange={(e) => setTitle(e.detail.value!)}
          />
        </IonItem>
        <IonItem className="custom-forms-container">
          <IonLabel position="floating">Description</IonLabel>
          <IonTextarea
            value={description}
            onIonChange={(e) => setDescription(e.detail.value!)}
          />
        </IonItem>
        <IonItem className="custom-forms-container">
          <IonLabel position="floating">Price</IonLabel>
          <IonInput
            type="number"
            value={price}
            onIonChange={(e) => setPrice(e.detail.value!)}
          />
        </IonItem>
        </div>
        <IonButton className="forms-button"  size="large" expand="block" shape="round" onClick={() => props.handleSubmit(title, description, price)}>
          Submit
        </IonButton>
      </IonContent>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Please confirm through MetaMask :)"
        position='top'
        duration={2000} // Duration in milliseconds
      />
    </IonPage>
  );
};

export default AddTab;
