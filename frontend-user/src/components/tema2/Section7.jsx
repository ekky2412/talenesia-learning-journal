import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section7 = (props) => {
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
      Coba ingat-ingat lagi masa sekolah dulu. Biasanya, hal apa
      saja yang membuatmu semangat untuk belajar?
      "
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section7;
