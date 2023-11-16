import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section4 = (props) => {
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
      question="Selama belajar di tema ini, Ale mengalami tantangan berupa kurang fokus saat mengikuti kelas. Bagi kamu, apa tantangan yang dihadapi saat mempelajari tema ini?"
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section4;