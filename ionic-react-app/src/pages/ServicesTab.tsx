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
import { Service } from '../App';
import communityLottie from "../assets/lotties/communityLottie.json";
import Lottie from "lottie-react";

interface ServicesTabProps {
  services: Service[];

}
const ServicesTab = (props: ServicesTabProps) => {
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
            <MyMap/>
          <IonRow>
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
          <div className="card-list-container">
              {props.services ? props.services.map((item, index) => (
                  <CardComponent key={index} title={item.title} subtitle={item.description} description={"Test"} number={item.amount.toString()} address={item.owner} />
              ))
            :
            items.map((item, index) => (
                <CardComponent key={index} title={item.title} subtitle={item.subtitle} description={"Test"} number={"0.1"} address={"0x123"} />
            ))}
          </div>
      </IonContent>
    </IonPage>
  );
};

export default ServicesTab;
