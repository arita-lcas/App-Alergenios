import React from 'react';
import { IonToolbar, IonTitle, IonIcon } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import './AlergHeader.css';

const AlergHeader: React.FC<{ headerLeft: unknown; headerTitle: string; headerRight: unknown }> = props => {
    return (
        <IonToolbar className="headerToolbar">
          <div className="headerGridContainer">
            <div></div>
            <div className="headerGridCol">
              <IonTitle className="headerTitle">{props.headerTitle}</IonTitle>
            </div>
            <div className="headerGridCol">
              {props.headerLeft}
              <br />
              {props.headerRight}
            </div>
          </div>
        </IonToolbar>
    );
};

export default AlergHeader;