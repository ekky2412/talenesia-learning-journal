import React, { useState } from "react";
import QuestionBorderDash from "../commons/QuestionBorderDash";


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
    <QuestionBorderDash
      question="Mana yang kamu merasa kesulitan/ butuh bantuan?"
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section7;
