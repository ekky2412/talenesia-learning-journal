import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section5 = (props) => {
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
      Apa saja hal yang baru saja kamu ketahui setelah mengikuti kelas?
      "
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section5;
