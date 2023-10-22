import React from 'react'
import {useState}  from 'react'

function Slide_1(props) {
  return (
    <div>
      <h1>Slide 1</h1>
      <div>
        <h1>Cara Mengisi Jurnal</h1>
  <ol>
    <li>Jurnal ini disusun sesuai dengan tema pembelajaran di kelas</li>
    <li>Jurnal boleh diisi kapan saja, namun pastikan sudah mengisi tema jurnal di setiap tema sebelum tema baru dimulai di sesi kelas</li>
    <li>Tidak isi jurnal yang lebih baik, lebih buruk, benar, maupun salah. Tulisan kalian juga tidak dinilai. Semua yang kamu tuliskan adalah benar dan valid karena sesuai dengan pikiran dan perasaanmu.</li>
    <li>Jurnal ini milikmu pribadi yang berisi rahasiamu, kamu boleh menceritakan apa yang kamu tuliskan kepada teman-teman agar saling belajar. Tetapi jika tidak nyaman, kamu boleh menuliskan dijurnalmu saja</li>
    <li>Jurnal juga membantu kamu dalam memantau proses pengerjaan dan pengumpulan tugas</li>
    <li>Mentormu akan selalu siap untuk membantumu mengisi jurnal jika kamu mengalami kebingungan</li>
    <li>Dalam jurnal juga terdapat catatan kosong yang bisa digunakan mencatat materi pembelajaran</li>
  </ol>
</div>
      <button onClick={() => props.setSlide(0)}>Back</button>
      <button onClick={() => props.setSlide(2)}>Next</button>
    </div>
  );
}

function Slide_0(props) {
  return (
    <div>
      <h1>Selamat datang kembali {props.user}</h1>
      <p>ayo kita isi journalnya</p>
      <button onClick={() => props.setSlide(1)}>Next</button>
    </div>
  );
}

function Journal0(props) {
    const [slide, setSlide] = useState(0);


    if (props.slideid) {
        setSlide(props.slideid)
    }

    switch(slide) {
      case 0:
        return <Slide_0 user={props.user} setSlide={setSlide} />;
      case 1:
        return <Slide_1 user={props.user} setSlide={setSlide} />;
  }
}

export default Journal0