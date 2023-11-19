import QuestionTextArea from "../commons/QuestionTextArea";
import { useState } from "react";


const Section2 = (props) => {
    const [data, setData] = useState({
        tipeSoal: 'isian',
        jawaban: ''
    });

    const handleValue = (e) => {
        const newValue = e.target.value;
        setData(prevData => ({
            ...prevData,
            jawaban: newValue
        }));
        props.onSectionDataChange({ ...data, jawaban: newValue });
    };

    return (
        <QuestionTextArea
            question="Setelah tes potensi, aku baru tau kalo potensi aku adalah ..."
            value={data.jawaban}
            onValueChange={handleValue}
        />
    )
}

export default Section2