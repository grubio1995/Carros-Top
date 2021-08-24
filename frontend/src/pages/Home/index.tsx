import Navbar from 'components/Navbar';
import CarImg from 'assets/images/car.png';

import './styles.css';
import Button from 'components/Button';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="base-card home-card">
          <div className="home-content-container">
            <h1>O carro perfeito para você</h1>
            <p>
              Conheça nossos carros e dê mais um passo na realização do seu
              sonho
            </p>
          </div>
          <div className="home-image-container">
            <img src={CarImg} alt="Carro" />
          </div>
        </div>
        <div className="base-card home-card-bottom">
          <div className="home-bottom-button-container">
            <Button texto={'VER CATÁLOGO'} />
          </div>
          <div className="home-bottom-content-container">
            <p>Comece agora a navegar</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
