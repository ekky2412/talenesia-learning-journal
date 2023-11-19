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
      question='Apa hal yang paling menarik dari topik pembelajaran “berkarir
      sebagai admin”?'
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section4;
