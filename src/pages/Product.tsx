import React from 'react';
import { IonContent, IonHeader, IonPage } from '@ionic/react';
import AlergHeader from '../components/AlergHeader';


const Product: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <AlergHeader 
                    headerLeft={"headerReturn"} 
                    headerTitle={""} 
                    headerRight={""} />
            </IonHeader>
            <IonContent className="content">

            </IonContent>
        </IonPage>
    );
}

export default Product;