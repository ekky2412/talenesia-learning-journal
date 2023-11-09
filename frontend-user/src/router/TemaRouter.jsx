import React from 'react';
import { useParams, } from 'react-router-dom';
import Tema1 from '../pages/Tema1';
import { Navigate } from "react-router-dom";
import Tema6 from '../pages/Tema6';
function TemaRouter(props) {
    const themeid = useParams().themeid
    
    return <Navigate replace to={`/journal/${themeid}/section/1`}/>
    

}

function TemaRouterWithSection(props) {
    const themeid = parseInt(useParams().themeid)
    const sectionid = parseInt(useParams().sectionid)
    console.log("🚀 ~ file: TemaRouter.jsx:20 ~ TemaRouterWithSection ~ themeid:", themeid)
    console.log("🚀 ~ file: TemaRouter.jsx:21 ~ TemaRouterWithSection ~ sectionid:", sectionid)
    switch(themeid) {
        case 1:
            return <Tema1 themeid={themeid} sectionid={sectionid}/>   
        case 6:
        return <Tema6 themeid={themeid} sectionid={sectionid}/>      
    }
}

export { TemaRouter, TemaRouterWithSection}