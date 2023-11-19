import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section14 = (props) => {
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
      question='Apa saja
kebiasaan-kebiasaan baik
yang sudah kamu terapkan
secara disiplin selama satu
bulan terakhir?'
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section14;
