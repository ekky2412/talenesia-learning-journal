import React from 'react';
import { useParams, } from 'react-router-dom';
import { Tema1, Tema3, Tema4, Tema5, Tema6, Tema7, Tema8, Tema9 } from '../router';
function TemaRouter() {

    const themeid = parseInt(useParams().themeid)
    const sectionid = parseInt(useParams().sectionid)
    switch (themeid) {
        case 1:
            return <Tema1 themeid={themeid} sectionid={sectionid} />
        case 3:
            return <Tema3 themeid={themeid} sectionid={sectionid} />
        case 4:
            return <Tema4 themeid={themeid} sectionid={sectionid} />
        case 5:
            return <Tema5 themeid={themeid} sectionid={sectionid} />
        case 6:
            return <Tema6 themeid={themeid} sectionid={sectionid} />
        case 7:
            return <Tema7 themeid={themeid} sectionid={sectionid} />
        case 8:
            return <Tema8 themeid={themeid} sectionid={sectionid} />
        case 9:
            return <Tema9 themeid={themeid} sectionid={sectionid} />
    }
}

export { TemaRouter }
