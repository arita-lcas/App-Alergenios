import React from 'react';
import { IonToolbar, IonTitle, IonIcon } from '@ionic/react';
import { personCircleOutline } from 'ionicons/icons';
import './AlergHeader.css';

const AlergHeader: React.FC<{ headerTitle: string }> = props => {
    return (
        <IonToolbar className="headerToolbar">
          <div className="headerGridContainer">
            <div></div>
            <div className="headerGridCol">
              <IonTitle className="headerTitle">{props.headerTitle}</IonTitle>
            </div>
            <div className="headerGridCol">
              <IonIcon icon={personCircleOutline} className="headerUserIcon" />
              <br />
              <span className="headerUserText">Marta</span>
            </div>
          </div>
        </IonToolbar>
    );
};

export default AlergHeader;