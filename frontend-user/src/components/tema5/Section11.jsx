import React, { useState } from "react";
import QuestionBorderDash from "../commons/QuestionBorderDash";

const Section11 = (props) => {
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
      question="Adakah masalah atau kesulitan yang kamu alami saat bekerja dalam
        kelompok? Bagaimana kamu mengatasi masalah itu?"
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section11;
