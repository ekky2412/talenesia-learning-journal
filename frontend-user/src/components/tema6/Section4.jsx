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
      question="Dari kelas tema mengurus sarana dan prasarana kantor,
      apa saja materi yang ingin kamu pelajari lebih lanjut?"
      value={data.jawaban}
      onValueChange={handleValue}
    />

  );
};

export default Section4;
