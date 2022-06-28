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
  IonFabButton,
  IonFab,
} from "@ionic/react";
import "./Home.css";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";
import { addOutline, trashOutline } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Home: React.FC = () => {
  const history = useHistory();
  const [notes, setNotes] = useState<any[]>([]);

  const currentUser = JSON.parse(localStorage.getItem("user")!);
  if (!currentUser) history.replace("/login");

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
    history.replace("/create");
  };

  const btnRemoveHandler = async (noteId: any) => {
    await deleteDoc(doc(db, currentUser.uid, noteId));
    window.location.reload();
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
                <IonFab vertical="top" horizontal="end">
                  <IonFabButton
                    color="red"
                    onClick={() => btnRemoveHandler(note.id)}
                    size="small"
                    className="close-btn"
                  >
                    <IonIcon icon={trashOutline}></IonIcon>
                  </IonFabButton>
                </IonFab>
                <IonCardTitle>{note.title}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>{note.content}</IonCardContent>
            </IonCard>
          ))}
        </IonList>
        <IonFab slot="fixed" vertical="bottom" horizontal="end">
          <IonFabButton onClick={btnClickHandler}>
            <IonIcon icon={addOutline}></IonIcon>
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default Home;
