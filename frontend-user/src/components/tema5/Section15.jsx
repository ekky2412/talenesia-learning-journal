import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section15 = (props) => {
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
      question="
      Apa yang membuatmu
      semangat mengikuti kelas,
      mengerjakan tugas, dan
      mengisi jurnal selama satu 
      bulan ini?
      "

      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section15;
