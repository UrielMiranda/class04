import React from "react";
import Grid from "./Grid";
import Button from "./Button";

const Home = props => {
  return (
    <section className="display">
      <div className="display__premium">
        <span className="display__premium__bullet">
          Escuchado recientemente
        </span>
        <h1 className="display__premium__quote">Retoma el ritmo</h1>
        <h2 className="display__premium__quote__sub">
          Sigue disfrutando de la música que estabas escuchando justo donde la
          dejaste
        </h2>
        <Button data="Abrir Reproductor Web" />
      </div>
      <div className="grid">
          <div className="grid__container">
              <Grid start={0} limit={2} />
          </div>
          <div className="grid__container">
              <Grid start={3} limit={6} />
          </div>
      </div>
    </section>
  );
};

export default Home;
