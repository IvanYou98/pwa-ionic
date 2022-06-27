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
} from "@ionic/react";
import "./Create.css";
import { home } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const Create: React.FC = () => {
  const history = useHistory();
  const homeBtnClickHandler = () => {
    history.push("/home");
  };

  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleCreate = () => {
    console.log("title", title);
    console.log("content", content);
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
          <IonButton onClick={homeBtnClickHandler}>
            <IonIcon icon={home}></IonIcon>
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Create;
