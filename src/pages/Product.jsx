/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/jsx-no-target-blank */
import { useContext, useEffect, useState } from "react";
import Sidebar from "../components/Sidebar/Sidebar";
import HeaderMobile from "../components/HeaderMobile/HeaderMobile";
import { SearchContext } from "../hooks/useSearch";
import { Container } from "@material-ui/core";
import Slider from "react-slick";

import "~../../slick-carousel/slick/slick.css";
import "~../../slick-carousel/slick/slick-theme.css";

import { useLocation, useHistory } from "react-router-dom";

import { apiGame } from "../services/api";

import "../styles/Product.scss";

export function Product() {
  const { isMobile, sidebar, toggleSidebar } = useContext(SearchContext);

  const [product, setProduct] = useState([]);
  const [viewMore, setViewMore] = useState(false);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const id = location.search.split("=")[1]

    if (id !== '') {
      apiGame(id).then(function (response) {
        setProduct(response.data);
      });
    }else {
      history.push("/")
    }

    console.log(id.match("\\d"));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000,
    draggable: true,
  };

  return  (
    <>
      <Sidebar toggleSidebar={{ toggleSidebar, sidebar }} />
      {isMobile && <HeaderMobile toggleSidebar={toggleSidebar} />}
      <main className="main-product">
        <Container>
          <div className="box-product">
            <div className="box-product-flex">
              <div className="img-product">
                <img src={product.thumbnail} alt={product.title} />
              </div>
              <div className="product-info">
                <div className="info">
                  <p>Nome:</p>
                  <p>{product.title}</p>
                </div>
                <div className="info">
                  <p>Desenvolvedor(a):</p>
                  <p>{product.developer}</p>
                </div>
                <div className="info">
                  <p>Plataforma:</p>
                  <p>{product.platform}</p>
                </div>
                <div className="info">
                  <p>Gênero:</p>
                  <p>{product.genre}</p>
                </div>
                <div className="info">
                  <p>Lançamento:</p>
                  <p>
                    {product.release_date
                      ? new Intl.DateTimeFormat().format(
                          new Date(product.release_date)
                        )
                      : product.release_date}
                  </p>
                </div>
              </div>
            </div>
            <div className="button-and-description">
              <div className="shop">
                <a href={product.game_url} target="_blank">
                  Ir ao Game
                </a>
              </div>
              <div className="box-description">
                <p className={viewMore ? "open" : ""}>{product.description}</p>
                <button
                  className="view-more"
                  onClick={() =>
                    !viewMore ? setViewMore(true) : setViewMore(false)
                  }
                >
                  {viewMore ? "Ver Menos" : "Ver Mais"}
                </button>
              </div>
            </div>

            {product.minimum_system_requirements && (
              <div className="config-info">
                <div className="title">
                  <h3>Configurações Mínimas e Recomendadas</h3>
                </div>
                <div className="info">
                  <p>Sistema Operacional:</p>
                  <p>{product.minimum_system_requirements.os}</p>
                </div>
                <div className="info">
                  <p>Processador:</p>
                  <p>{product.minimum_system_requirements.processor}</p>
                </div>
                <div className="info">
                  <p>Memoria:</p>
                  <p>{product.minimum_system_requirements.memory}</p>
                </div>
                <div className="info">
                  <p>Placa grafica:</p>
                  <p>{product.minimum_system_requirements.graphics}</p>
                </div>
                <div className="info">
                  <p>Espaço de Armazenamento:</p>
                  <p>{product.minimum_system_requirements.storage}</p>
                </div>
              </div>
            )}
            <div className="slider">
              <Slider {...settings}>
                {product.screenshots &&
                  product.screenshots.map((img) => (
                    <div key={img.id}>
                      <img src={img.image} />
                    </div>
                  ))}
              </Slider>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
