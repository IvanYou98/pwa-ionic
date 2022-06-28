import {
  IonContent,
  IonHeader,
  IonList,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonButton,
  IonInput,
  IonItem,
  IonLabel,
  IonTextarea,
  IonFabButton,
} from "@ionic/react";
import "./Create.css";
import { home } from "ionicons/icons";
import { useHistory, useLocation } from "react-router-dom";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { db } from "../firebase";

const Create: React.FC = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem("user")!);
  if (user === null) history.replace("/home");

  const homeBtnClickHandler = () => {
    history.replace("/home");
  };

  const [title, setTitle] = useState<string>("");
  const location = useLocation();
  const [content, setContent] = useState<string>("");

  const handleCreate = async () => {
    console.log("title", title);
    console.log("content", content);
    const docRef = await addDoc(collection(db, user.uid), {
      title: title,
      content: content,
    });
    console.log(docRef);
    history.go(1);
    history.replace("/home");
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>New</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent class="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="stacked" color="dark">
              <h2>Title</h2>
            </IonLabel>
            <IonInput
              value={title}
              onIonChange={(e: any) => setTitle(e.target.value)}
            ></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">
              <h2>Content</h2>
            </IonLabel>
            <IonTextarea
              autoGrow={true}
              onIonChange={(e: any) => setContent(e.target.value)}
            ></IonTextarea>
          </IonItem>
        </IonList>

        <div className="create-btn-container">
          <IonButton onClick={handleCreate}>Create</IonButton>
        </div>

        <div className="home-btn-container">
          <IonFabButton onClick={homeBtnClickHandler}>
            <IonIcon icon={home}></IonIcon>
          </IonFabButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Create;
