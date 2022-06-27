import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
} from "@ionic/react";
import "./Home.css";
import { addOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  const btnClickHandler = () => {
    history.push("/create");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Notes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonList>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>This is the first card</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>
        </IonList>
        <div className="add-btn-container">
          <IonButton shape="round" onClick={btnClickHandler}>
            <IonIcon icon={addOutline}></IonIcon>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
