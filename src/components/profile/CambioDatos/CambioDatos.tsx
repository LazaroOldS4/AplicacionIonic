import { IonInput, IonButton} from "@ionic/react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useUser} from "../../../hooks";

import {CambioDatosType} from "./CambioDatos.type"

import "./CambioDatos.scss"

export function CambioDatos(props:CambioDatosType.Props){
    const {onClose} = props;
    const {onChangeUserName}=useUser();

    const formik= useFormik({
        initialValues:{
            nombre:""
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("danger")
        }),
        onSubmit: (formValue)=>{
            onChangeUserName(formValue.nombre);
            onClose();
        }
    })

    
    return(
        <div className="change-dato">
            <IonInput name="nombre" placeholder="Cambiar nombre" autoFocus color={"red"}
            onIonChange={(e)=>formik.setFieldValue("nombre", e.detail.value)}/>
            <IonButton expand="block" onClick={()=>formik.handleSubmit}>
                Actualizar Nombre...
            </IonButton>
        </div>
    )
}