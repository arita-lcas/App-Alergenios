import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { homeOutline, addOutline, searchOutline, starOutline, cartOutline } from 'ionicons/icons';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import Search from './pages/Search';
import Favorites from './pages/Favorites';
import Shopping from './pages/Shopping';
import Product from './pages/Product';
import './App.css';

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/tab1" component={Home} exact={true} />
          <Route path="/tab2" component={AddProduct} exact={true} />
          <Route path="/tab3" component={Search} exact={true} />
          <Route path="/tab4" component={Favorites} exact={true} />
          <Route path="/tab5" component={Shopping} />
          <Route path="/product" component={Product} />
          <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="menuTabBar">
          <IonTabButton tab="tab1" href="/tab1" className="menuButton">
            <IonIcon icon={homeOutline} />
            <IonLabel>Sugestões</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab2" href="/tab2" className="menuButton">
            <IonIcon icon={addOutline} />
            <IonLabel>Adicionar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab3" href="/tab3" className="menuButton">
            <IonIcon icon={searchOutline} />
            <IonLabel>Pesquisa</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab4" href="/tab4" className="menuButton">
            <IonIcon icon={starOutline} />
            <IonLabel id="favoritesId">Favoritos</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/tab5" className="menuButton">
            <IonIcon icon={cartOutline} />
            <IonLabel id="shoppingId">Compras</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
