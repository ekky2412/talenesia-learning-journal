import React, { useState } from "react";
import QuestionBorderDash from "../commons/QuestionBorderDash";

const Section8 = (props) => {
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
      question="Diantara teman di kelompokmu, siapa yang bisa membantumu?"
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section8;
