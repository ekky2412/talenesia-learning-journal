import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";
import { Stack } from "@chakra-ui/react";

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
    <QuestionTextArea
      question="Apa pendapat yang sudah kamu sampaikan ke dalam kelas / sesi kelompok?"
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section8;
