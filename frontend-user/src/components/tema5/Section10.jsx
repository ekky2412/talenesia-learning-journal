import React, { useState } from "react";
import QuestionBorderDash from "../commons/QuestionBorderDash";

const Section10 = (props) => {
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
    <QuestionBorderDash
      question="Apa peran kamu pada saat mengerjakan tugas kelompok tersebut?"
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section10;
