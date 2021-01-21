import React from 'react';
import { IonBackdrop } from '@ionic/react';
import './TesteComp.css';

const TesteComp: React.FC = () => {

    
    return (
        <IonBackdrop tappable={true} visible={false}>
            <h1>Ola</h1>
        </IonBackdrop>
    );
}

export default TesteComp;