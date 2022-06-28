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
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { addOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const history = useHistory();
  const [notes, setNotes] = useState<any[]>([]);

  const currentUser = JSON.parse(localStorage.getItem("user")!);
  if (!currentUser) history.push("/login");

  useEffect(() => {
    const temp: any[] = [];
    const fetchData = async () => {
      const querySnapShot = await getDocs(collection(db, currentUser!.uid));
      querySnapShot.forEach((doc) => {
        temp.push({
          ...doc.data(),
          id: doc.id,
        });
      });
      setNotes(temp);
    };
    fetchData();
  }, []);

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
        {console.log(notes)}
        <IonList>
          {notes.map((note) => (
            <IonCard key={note.id}>
              <IonCardHeader>
                <IonCardTitle>{note.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{note.content}</IonCardContent>
            </IonCard>
          ))}
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
