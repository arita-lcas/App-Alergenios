import React, { useState } from 'react';
import { IonPopover, IonIcon } from '@ionic/react';
import { informationCircle } from 'ionicons/icons';
import './Teste.css';
import { textSpanEnd } from 'typescript';

const Teste: React.FC = () => {
    const [popoverState, setShowPopover] = useState({ showPopover: false, event: undefined });
  
    return (
      <>
        <IonPopover
          cssClass='my-custom-class'
          event={popoverState.event}
          isOpen={popoverState.showPopover}
          onDidDismiss={() => setShowPopover({ showPopover: false, event: undefined })}
        >
          <p>This is popover content</p>
        </IonPopover>
        <div className="productPIngredients" onClick={
        (e: any) => {
          e.persist();
          setShowPopover({ showPopover: true, event: e })
        }}
        >
            <IonIcon icon={informationCircle} className="ingredientsIcon" />
            <span>Ver ingredientes</span>
        </div>
      </>
    );
  };

  export default Teste;