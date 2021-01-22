import React, { useState } from 'react';
import { IonIcon, IonAlert } from '@ionic/react';
import { starOutline } from 'ionicons/icons';
import './AlergFavoritesPopover.css';

const FavoritesPopover: React.FC = () => {
    const [showAlert1, setShowAlert1] = useState(false);

  return (
    <>
        <div onClick={() => setShowAlert1(true)} >
            <IonIcon icon={starOutline} />
        </div>

        <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            cssClass='favoritesPopover'
            header={'Adicione à lista de favoritos:'}
            inputs={[
                {
                  name: 'checkbox1',
                  type: 'checkbox',
                  label: 'Criar nova lista',
                  value: 'value1',
                },
                {
                  name: 'checkbox2',
                  type: 'checkbox',
                  label: 'Favoritos',
                  value: 'value2'
                },
                {
                  name: 'checkbox3',
                  type: 'checkbox',
                  label: 'Snacks',
                  value: 'value3'
                }
              ]}
            buttons={[{
                  text: 'Guardar',
                  cssClass: 'favoritesPopoverButton'
            }]}
        />

    

    </>
  );
};

export default FavoritesPopover;