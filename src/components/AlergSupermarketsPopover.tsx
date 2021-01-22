import React, { useState } from 'react';
import { IonIcon, IonAlert } from '@ionic/react';
import { locationOutline } from 'ionicons/icons';
import './AlergIngredientsPopover.css';

const SupermarketsPopover: React.FC< { supermarketsList: string }> = props => {
    const [showAlert1, setShowAlert1] = useState(false);

  return (
    <>
        <div onClick={() => setShowAlert1(true)} >
            <IonIcon icon={locationOutline} />
        </div>

        <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            cssClass='ingredientPopover'
            header={'Produto disponível no:'}
            message={props.supermarketsList}
        />

    

    </>
  );
};

export default SupermarketsPopover;