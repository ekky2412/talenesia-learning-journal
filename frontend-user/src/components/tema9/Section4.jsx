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
      question="
      Materi apa yang paling kamu sukai?
      "
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section4;
