import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section9 = (props) => {
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
      Kira-kira jika kemalasan kembali menyerang, apa yang kamu 
      lakukan agar bisa kembali semangat belajar?
      "
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section9;
