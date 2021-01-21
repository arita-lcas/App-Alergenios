import React, { useState } from 'react';
import { IonIcon, IonAlert } from '@ionic/react';
import { informationCircle } from 'ionicons/icons';
import './AlergPopover.css';

const Popover: React.FC = () => {
    const [showAlert1, setShowAlert1] = useState(false);

  return (
    <>
        <div className="productPIngredients" onClick={() => setShowAlert1(true)} >
            <IonIcon icon={informationCircle} className="ingredientsIcon" />
            <span>Ver ingredientes</span>
        </div>

        <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            cssClass='my-custom-class'
            header={'Alert'}
            message={'This is an alert message.'}
        />

    

    </>
  );
};

export default Popover;