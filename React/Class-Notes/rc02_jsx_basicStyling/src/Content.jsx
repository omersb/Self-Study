//* JSX'de stillendirme farklli sekillerde yapilabilr.
//* 1-) Harici CSS sayfalari ile (index.css, app.css v.b)
//* 2-) Inline stillendirme ile (style = {{color:"red"}})
//* 3- )Local veya global degiskenler ile.

//! NOTLAR:
//* Stillendirme icin property-value(object) yapisi kullanilir.
//* property isimlerinde camelCase kullanimalidir.
//* class isimleri icin className kullanilir.
//* Material UI, Styled Component, Sass, Bootstrap v.b harici kutuphaneler kullanilabilir.
import React from "react";
import img2 from "./img/spring2.jpg";
//dahili resim eklemek için import yapmak gereklidir.
const Content = () => {
  return (
    <div>
      {/* inline style */}
      <h2 style={{ color: "red" }}>React Js </h2>

      <p style={{ backgroundColor: "lightgreen" }}>
        React, Kullanıcı arabirimi tasarlamak için kullanılan bir Js
        kütüphanesidir.
      </p>

      <img
        src="https://cdn.pixabay.com/photo/2017/02/15/13/40/tulips-2068692__340.jpg"
        alt="Spring-Flower"
      />
      <img src={img2} alt="img2" />
    </div>
  );
};

export default Content;