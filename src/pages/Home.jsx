import React from "react";
import undraw from "../assets/undraw.svg";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="section-with-wave">
        <div className="max-w-screen-xl flex flex-col gap-10 px-4">
          <div className="grid md:grid-cols-2">
            <p></p>
            <p>
              Kami berkomitmen untuk memberikan pengalaman yang luar biasa
              kepada pelanggan kami. Dengan layanan ini, kami membantu Anda
              tidak hanya mencatat, tetapi juga mengoptimalkan setiap aspek
              bisnis Anda. Bergabunglah dengan kami di perjalanan menuju
              kesuksesan bisnis yang lebih besar dan lebih efisien.
            </p>
          </div>
          <div className="grid md:grid-cols-2 md:mt-24">
            <div className="flex flex-col gap-3">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <img src={undraw} alt="" height={200} width={200} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
