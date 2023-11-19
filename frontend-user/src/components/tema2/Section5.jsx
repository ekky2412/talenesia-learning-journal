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
      question=" Setelah belajar berkarir sebagai admin, apa hal yang
      membuatmu tertarik untuk belajar lagi tentang profesi admin?"
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section5;
