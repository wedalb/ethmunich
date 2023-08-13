import ExploreContainer from '../components/ExploreContainer';
import './AddTab.css';

// const AddTab: React.FC = () => {
//   return (
//     <IonPage>
//       <IonHeader>
//         <IonToolbar>
//           <IonTitle>Add Service</IonTitle>
//         </IonToolbar>
//       </IonHeader>
//       <IonContent fullscreen>
//         <IonHeader collapse="condense">
//           <IonToolbar>
//             <IonTitle size="large">Tab 2</IonTitle>
//           </IonToolbar>
//         </IonHeader>
//       </IonContent>
//     </IonPage>
//   );
// };


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
  IonToast,
} from '@ionic/react';

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
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Service</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="form-container">
        <IonItem>
          <IonLabel position="floating">Title</IonLabel>
          <IonInput
            value={title}
            onIonChange={(e) => setTitle(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Description</IonLabel>
          <IonTextarea
            value={description}
            onIonChange={(e) => setDescription(e.detail.value!)}
          />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Price</IonLabel>
          <IonInput
            type="number"
            value={price}
            onIonChange={(e) => setPrice(e.detail.value!)}
          />
        </IonItem>
        </div>
        <IonButton expand="full" onClick={() => {props.handleSubmit(title, description, price); setShowToast(true);}}>
          Submit
        </IonButton>
      </IonContent>
      <IonToast
        isOpen={showToast}
        onDidDismiss={() => setShowToast(false)}
        message="Proceed to Wallet"
        position='top'
        duration={2000} // Duration in milliseconds
      />
    </IonPage>
  );
};

export default AddTab;
