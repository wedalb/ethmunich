import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {add, addOutline, ellipse, gridOutline, square, triangle, wallet, walletOutline} from 'ionicons/icons';
import JobsTab from './pages/ServicesTab';
import AddTab from './pages/AddTab';
import WalletTab from './pages/WalletTab';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/services">
              <JobsTab />
            </Route>
            <Route exact path="/addService">
              <AddTab />
            </Route>
            <Route path="/wallet">
              <WalletTab />
            </Route>
            <Route exact path="/">
              <Redirect to="/services" />
            </Route>
          </IonRouterOutlet>
          <IonTabBar slot="bottom">
            <IonTabButton tab="services" href="/services">
              <IonIcon aria-hidden="true" icon={gridOutline} />
              <IonLabel>Service</IonLabel>
            </IonTabButton>
            <IonTabButton tab="addService" href="/addService">
              <IonIcon aria-hidden="true" icon={addOutline} />
              <IonLabel>Add Service</IonLabel>
            </IonTabButton>
            <IonTabButton tab="wallet" href="/wallet">
              <IonIcon aria-hidden="true" icon={walletOutline} />
              <IonLabel>Wallet</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
);

export default App;
