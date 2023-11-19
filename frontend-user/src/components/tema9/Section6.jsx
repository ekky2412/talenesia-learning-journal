import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section6 = (props) => {
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
      Apa saja materi yang membuatmu penasaran ingin belajar lebih lagi?
      "
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section6;
