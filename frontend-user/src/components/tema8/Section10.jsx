import React, { useState } from "react";
import QuestionTextArea from "../commons/QuestionTextArea";

const Section10 = (props) => {
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
      Coba ingat-ingat ketika kamu menyampaikan pendapat di sesi bersama mentor atau saat mengerjakan tugas kelompok.
      Bagaimana respon orang lain atas pendapatmu?
      "
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section10;