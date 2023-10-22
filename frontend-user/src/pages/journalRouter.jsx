import React from 'react';
import { useParams } from 'react-router-dom';
import Journal0 from './journal0';


function JournalRouter(props) {
    const themeid = useParams().themeid
    console.log("🚀 ~ file: journal.jsx:8 ~ JournalRouter ~ themeid:", themeid)
    switch(themeid) {
        case "0":
            return <Journal0 />
        default:
            return <Journal0 />
    }
}

function JournalRouterWithSlide(props) {
    const themeid = useParams().themeid
    const slideid = useParams().slideid

    switch(themeid) {
        case "0":
            return <Journal0 slideid={slideid} />
        default:
            return <Journal0 slideid={slideid} />
    }
}

export { JournalRouter, JournalRouterWithSlide}