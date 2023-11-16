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
      Salah satu kunci kesuksesan adalah memiliki 'Growth Mindet'
        atau mental berkembang. Orang-orang yang memiliki growth mindset
        tidak takut untuk gagal, tidak ragu-ragu mengerjakan pekerjaan
        yang sulit, dan selalu percaya bahwa tantangan dan kesulitan
        merupakan kesempatan untuk mereka belajar.
        Penelitian menemukan bahwa orang yang memiliki growth mindset
        cenderung lebih cepat mencapai kesuksesan dibandingkan
        orang-orang yang memilih untuk mengerjakan hal-hal yang
        sudah dia kuasai saja atau yang dia yakin pasti berhasil.
        Pernahkah kamu gagal?
      "
      value={data.jawaban}
      onValueChange={handleValue}
    />
  );
};

export default Section6;