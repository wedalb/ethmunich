import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CardComponent from '../components/CardComponent';
import './ServicesTab.css';


const items = {

}
const ServicesTab: React.FC = () => {
    const items = [
        { title: 'Fix Bench in your local park', subtitle: 'Someone vandalized the bench here.' },
        { title: 'Repair Piping in the Animal Shelter', subtitle: 'The kitties are drippin\'  '},
        { title: 'Help a grandma commit tax fraud', subtitle: 'Grandma Stevens is too old to pay taxes' },
    ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Services" />
          {items.map((item, index) => (
              <CardComponent key={index} title={item.title} subtitle={item.subtitle}  description={"Test"}/>
          ))}
      </IonContent>
    </IonPage>
  );
};

export default ServicesTab;
