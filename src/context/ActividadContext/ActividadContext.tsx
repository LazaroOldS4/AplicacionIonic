import React, {createContext, useState} from 'react'
import {ActModel} from '../../models'
import {ActividadContextType} from './ActividadContext.type'

export const ActividadContext = createContext<ActividadContextType.Context>({
    totalAct: 0,
    totalCompActi: 0,
    actividades: [],
    completActi: [],
    abrirFormActi: () => {},
    crearActividad: () => {},
    checkCompleto: () => {},

})

export function ActividadesProvider (props: ActividadContextType.Props){
    const {children} = props;

    const [totalAct, setTotalAct] = useState(8);
    const [totalCompActi, setTotalCompActi] = useState(5);
    const [actividades, setActividades] = useState<ActModel[]>([])
    const [completActi, setCompletActi] = useState<ActModel[]>([])


    const valueContext : ActividadContextType.Context ={
        totalAct,
        totalCompActi,
        actividades: [],
        completActi: [],
        abrirFormActi: () => {},
        crearActividad: () => {},
        checkCompleto: () => {},
    }

    return (
        <ActividadContext.Provider value={valueContext}>
            {children}
        </ActividadContext.Provider>
    )
}