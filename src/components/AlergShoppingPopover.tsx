import React, { useState } from 'react';
import { IonIcon, IonAlert } from '@ionic/react';
import { cartOutline } from 'ionicons/icons';
import './AlergFavoritesPopover.css';

const ShoppingPopover: React.FC = () => {
    const [showAlert1, setShowAlert1] = useState(false);

  return (
    <>
        <div onClick={() => setShowAlert1(true)} >
            <IonIcon icon={cartOutline} />
        </div>

        <IonAlert
            isOpen={showAlert1}
            onDidDismiss={() => setShowAlert1(false)}
            cssClass='favoritesPopover'
            header={'Adicione à lista de compras:'}
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
                  label: 'Compras gerais',
                  value: 'value2'
                },
                {
                  name: 'checkbox3',
                  type: 'checkbox',
                  label: 'Compras semanais',
                  value: 'value3'
                },
                {
                  name: 'checkbox4',
                  type: 'checkbox',
                  label: 'Sobremesa',
                  value: 'value4'
                }
              ]}
            buttons={[{
                  text: 'Guardar',
                  cssClass: 'favoritesPopoverButton',
            }]}
        />

    

    </>
  );
};

export default ShoppingPopover;