import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="
https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="home-page-img"
        />

        <div className="home__row">
          <Product
            title="The Lean Startup: How constant innovation creates radically successfull businesses all around the world"
            price={29.99}
            image="https://m.media-amazon.com/images/I/81jgCiNJPUL._AC_UY218_.jpg"
            rating={5}
          />
          <Product
            title="Wyze Cam 1080p HD Indoor WiFi Smart Home Camera with Night Vision, 2-Way Audio, Works with Alexa & the Google Assistant, White, 1-Pack
            "
            price={87.99}
            image="https://m.media-amazon.com/images/I/61B04f0ALWL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title="DualSense Wireless Controller"
            price={69.96}
            image="https://m.media-amazon.com/images/I/61o7ai+YDoL._AC_UY218_.jpg"
            rating={5}
          />

          <Product
            title="Logitech G502 Hero High Performance Gaming Mouse"
            price={19.99}
            image="https://m.media-amazon.com/images/I/51IOmsWQVAL._AC_UY218_.jpg"
            rating={3}
          />

          <Product
            title="Collective Minds Strike Pack F.P.S. Dominator Controller Adapter with MODS & Paddles for PS4
            "
            price={36.59}
            image="https://m.media-amazon.com/images/I/71LivfRjtSL._AC_UY218_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            title='SAMSUNG QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV'
            price={447.99}
            image="https://m.media-amazon.com/images/I/51NKhnjhpGL._AC_UY218_.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
