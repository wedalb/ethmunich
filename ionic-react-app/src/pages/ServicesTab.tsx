import {
    IonCard,
    IonCardContent,
    IonCol,
    IonContent,
    IonHeader,
    IonPage,
    IonRow,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import CardComponent from '../components/CardComponent';
import './ServicesTab.css';
import MyMap from "../components/MapsView";
import communityLottie from "../assets/lotties/communityLottie.json";
import Lottie from "lottie-react";


const items = {

}
const ServicesTab: React.FC = () => {
    const items = [
        { title: 'Fix Bench in your local park', subtitle: 'Someone vandalized the bench here.' },
        { title: 'Repair Piping in the Animal Shelter', subtitle: 'The kitties are drippin\'  '},
        { title: 'Help a grandma commit tax fraud Help a grandma commit tax fraud', subtitle: 'Grandma Stevens is too old to pay taxesHelp a grandma commit tax fraud' },
        { title: 'Fix Bench in your local park', subtitle: 'Someone vandalized the bench here.' },
        { title: 'Repair Piping in the Animal Shelter', subtitle: 'The kitties are drippin\'  '},
        { title: 'Help a grandma commit tax fraud', subtitle: 'Grandma Stevens is too old to pay taxes' },{ title: 'Fix Bench in your local park', subtitle: 'Someone vandalized the bench here.' },
        { title: 'Repair Piping in the Animal Shelter', subtitle: 'The kitties are drippin\'  '},
        { title: 'Help a grandma commit tax fraud', subtitle: 'Grandma Stevens is too old to pay taxes' },{ title: 'Fix Bench in your local park', subtitle: 'Someone vandalized the bench here.' },
        { title: 'Repair Piping in the Animal Shelter', subtitle: 'The kitties are drippin\'  '},
        { title: 'Help a grandma commit tax fraud', subtitle: 'Grandma Stevens is too old to pay taxes' },{ title: 'Fix Bench in your local park', subtitle: 'Someone vandalized the bench here.' },
        { title: 'Repair Piping in the Animal Shelter', subtitle: 'The kitties are drippin\'  '},
        { title: 'Help a grandma commit tax fraud', subtitle: 'Grandma Stevens is too old to pay taxes' },
    ];

  return (
    <IonPage>
      <IonContent fullscreen>
          <IonRow> {/* Lottie Animation*/}
              <IonCard>
                  <IonCardContent>
                      <IonRow className="lottie-card">
                          {/* Column for the Lottie animation */}
                          <IonCol size="6">
                              <Lottie className="lottie-animation" animationData={communityLottie} />
                          </IonCol>

                          {/* Column for the text */}
                          <IonCol className="text-container">
                              <p className="centered-text">Get help in your community</p>
                          </IonCol>
                      </IonRow>
                  </IonCardContent>
              </IonCard>
          </IonRow>

          <IonRow>
              <IonCol>
                  <IonRow>

                  </IonRow>
              </IonCol>
              <IonRow className="map-container">
                  <MyMap/>
              </IonRow>
          </IonRow>

          <IonRow className="card-list-container">
              {items.map((item, index) => (
                  <CardComponent key={index} title={item.title} subtitle={item.subtitle} description={"Test"} number={"+0.025ETH"} />
              ))}
          </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ServicesTab;
