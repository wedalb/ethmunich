import {
    IonCard,
    IonCardContent,
    IonCol,
    IonContent,
    IonHeader,
    IonPage,
    IonRow, IonText,
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
import React from "react";

interface ServicesTabProps {
  services: Service[];
  currentAccount: string;
  onAccept: (serviceAddress: string) => void;
  onCancel: (serviceAddress: string) => void;
  onRevoke: (serviceAddress: string) => void;
  onClaim: (serviceAddress: string) => void;

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
          <IonRow>
              <IonCol>
                  <IonTitle className="custom-headline">Service Desk</IonTitle>
              </IonCol>
          </IonRow>
          <IonRow> {/* Lottie Animation*/}
              <IonCard className="lottie-card">
                  <IonCardContent>
                      <IonRow >
                          {/* Column for the Lottie animation */}
                          <IonCol>
                              <Lottie className="lottie-animation" animationData={communityLottie} />
                          </IonCol>

                          <IonCol>
                              {/* Column for the text */}
                              <IonCol className="lottie-text-container">
                                  <IonText className="centered-text">Helpout in your local Community</IonText>
                              </IonCol>
                              <IonCol><IonText className="description-text">
                                  Get better Karma by helping out your community and earn Karmapoints for that. Helpout your local community and be a better person
                              </IonText>
                              </IonCol>
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
              {props.services ? props.services.map((item, index) => (
                  <CardComponent key={index} title={item.title} subtitle={item.description} description={"Test"} number={item.amount.toString()} address={item.owner} isOwner={item.owner==props.currentAccount}
                  onAccept={() => props.onAccept(item.owner)} onCancel={() => props.onCancel(item.owner)} onClaim={() => props.onClaim(item.owner)} onRevoke={() => props.onRevoke(item.owner)}
                  isClaimed={item.contestant!=='0x0000000000000000000000000000000000000000'} currentAccount={props.currentAccount} contestant={item.contestant}/>
              ))
            :
            items.map((item, index) => (
                <CardComponent key={index} title={item.title} subtitle={item.subtitle} description={"Test"} number={"0.1"} address={"0x123"} isOwner={false}
                onAccept={() => props.onAccept('')} onCancel={() => props.onCancel('')} onClaim={() => props.onClaim('')} onRevoke={() => props.onRevoke('')}
                isClaimed={false} currentAccount={props.currentAccount} contestant=''/>
                ))}
          </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default ServicesTab;
