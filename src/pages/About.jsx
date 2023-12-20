import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="section-with-wave px-3">
        <div className="max-w-screen-lg">
          <h1 className="font-bold text-3xl text-center mb-4">About</h1>
          <p className="mb-3">
            Selamat datang di platform inovatif kami, sebuah persembahan dari
            startup berdedikasi untuk menciptakan pengalaman bisnis yang lebih
            baik – efisien, terorganisir, dan menguntungkan. Kami memahami bahwa
            setiap pengusaha menghadapi tantangan unik, itulah mengapa kami
            hadir dengan solusi ERP kelas dunia untuk memenuhi kebutuhan bisnis
            Anda.
          </p>
          <p>
            Website kami dirancang sebagai ERP (Enterprise Resource Planning)
            yang memungkinkan Anda mencatat setiap aspek pergerakan barang,
            mulai dari barang masuk hingga barang keluar. Dengan tingkatan TIER
            yang berbeda, kami memberikan fleksibilitas kepada Anda untuk
            memilih layanan sesuai dengan kebutuhan spesifik perusahaan Anda.
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
