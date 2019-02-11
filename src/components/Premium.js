import React from "react";
import Button from "./Button";
import "./Premium.module.less";

const Premium = (props) => {
  return (
    <section className="premium__wrapper">
      <div className="premium__wrapper__btn">
        <h1 className="premium__wrapper__quote">Hazte Premium. Sonríe.</h1>
        <h2 className="premium__wrapper__sub">
          Premium suena increíble. Disfruta de música sin anuncios en todos sus
          dispositivos*
        </h2>
        <Button data="Obtén spotify premium" />
      </div>
      <div className="premium__wrapper__container" />
    </section>
  );
};

export default Premium;
