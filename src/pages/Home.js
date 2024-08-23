import React from "react";
import { Link } from "react-router-dom";
import "../Home.css";
import logo from "../assets/Logo2.png"
import brasil from "../assets/brasil.jpeg"
import inglaterra from "../assets/inglaterra.jpeg"
import canada from "../assets/canada.jpeg"
import tcheca from "../assets/tcheca.jpeg"
import alemanha from "../assets/alemanha.jpeg"
import angola from "../assets/angola.jpeg"
import italia from "../assets/italia.jpeg"
import belgica from "../assets/belgica.jpeg"
import futsal from "../assets/futsal.jpeg"
import volei from "../assets/volei.jpeg"
import queimada from "../assets/queimada.jpeg"
import basquete from "../assets/basquete.jpeg"
import tenisdemesa from "../assets/tenisdemesa.jpeg"
import futmesa from "../assets/futmesa.jpeg"
import handbol from "../assets/handbol.jpeg"
import atletismo from "../assets/atletismo.jpeg"
import logo2 from "../assets/Logo2.png"
import logosesi from "../assets/logosesi.jpg"

function Home() {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="left">

            {<img className="logo-space" src={logo} />}

          </div>
          <div className="right">
            <a href="#jogos" className="header-link">Jogos</a>
            <a href="sobrenos" className="header-link">Sobre Nós</a>
          </div>
        </div>
      </header>

      <section className="banner">
        <h2>PRÓXIMOS JOGOS</h2>
        <div className="games">
          <div className="game-list">
            {/* Jogo 1 */}
            <div className="game-item">
              <h4>Futsal</h4>
              <strong>12/08 segunda 10:40</strong>
              <div className="teams">
                <div className="team">
                  <img src={brasil} alt="Time A" className="team-flag" />
                  <p>BRA</p>
                </div>
                <span>x</span>
                <div className="team">
                  <img src={canada} alt="Time B" className="team-flag" />
                  <p>CAN</p>
                </div>
              </div>
            </div>
            {/* Jogo 2 */}
            <div className="game-item">
              <h4>Futsal</h4>
              <strong>12/08 segunda 10:40</strong>
              <div className="teams">
                <div className="team">
                  <img src={belgica} alt="Time C" className="team-flag" />
                  <p>BEL</p>
                </div>
                <span>x</span>
                <div className="team">
                  <img src={tcheca} alt="Time D" className="team-flag" />
                  <p>CZE</p>
                </div>
              </div>
            </div>
          </div>
          <div className="game-list">
            {/* Jogo 3 */}
            <div className="game-item">
              <h4>Vôlei</h4>
              <strong>12/08 segunda 10:40</strong>
              <div className="teams">
                <div className="team">
                  <img src={angola} alt="Time E" className="team-flag" />
                  <p>ANG</p>
                </div>
                <span>x</span>
                <div className="team">
                  <img src={italia} alt="Time F" className="team-flag" />
                  <p>ITA</p>
                </div>
              </div>
            </div>
            {/* Jogo 4 */}
            <div className="game-item">
              <h4>Vôlei</h4>
              <strong>12/08 segunda 10:40</strong>
              <div className="teams">
                <div className="team">
                  <img src={brasil} alt="Time G" className="team-flag" />
                  <p>BRA</p>
                </div>
                <span>x</span>
                <div className="team">
                  <img src={alemanha} alt="Time H" className="team-flag" />
                  <p>ALE</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pontuacao">
        <h2>Quadro de Pontuação</h2>
        <table>
          <thead>
            <tr>
              <th>Posição</th>
              <th>País</th>
              <th>Ouro</th>
              <th>Prata</th>
              <th>Bronze</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td><img src={brasil} alt="Brasil" className="flag" /></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>2</td>
              <td><img src={inglaterra} alt="Inglaterra" className="flag" /></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>3</td>
              <td><img src={canada} alt="Canadá" className="flag" /></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>4</td>
              <td><img src={tcheca} alt="República Tcheca" className="flag" /></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>5</td>
              <td><img src={alemanha} alt="Alemanha" className="flag" /></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>6</td>
              <td><img src={angola} alt="Angola" className="flag" /></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>7</td>
              <td><img src={italia} alt="Itália" className="flag" /></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>8</td>
              <td><img src={belgica} alt="Bélgica" className="flag" /></td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
          </tbody>
        </table>
      </section>


      <section id="jogos" className="esportes">
        <div className="esporte-row">
          <a className="esporte" href="futsal"><img src={futsal} alt="Futsal" /><p>Futsal</p></a>
          <a className="esporte" href="volei"><img src={volei} alt="Vôlei" /><p>Vôlei</p></a>
          <a className="esporte" href="queimada"><img src={queimada} alt="Queimada" /><p>Queimada</p></a>
          <a className="esporte" href="basquete"><img src={basquete} alt="Basquete" /><p>Basquete</p></a>
          <a className="esporte" href="tenisDeMesa"><img src={tenisdemesa} alt="Tênis de Mesa" /><p>Tênis de Mesa</p></a>
          <a className="esporte" href="futMesa"><img src={futmesa} alt="Fut-mesa" /><p>Fut-mesa</p></a>
          <a className="esporte" href="handbol"><img src={handbol} alt="Handbol" /><p>Handbol</p></a>
          <a className="esporte" href="atletismo"><img src={atletismo} alt="Atletismo" /><p>Atletismo</p></a>
        </div>
      </section>

      <footer>
        <div className="footer-container">
          <div className="contact-info">
            <ul>
              <li>INFORMAÇÕES DE CONTATO:</li>
              <li>sesisp.org.br</li>
              <li>(16) 99234-5464</li>
              <li>Av. Sebastião Morgatto n°90 - Jaboticabal-SP</li>
            </ul>
          </div>
          <div className="footer-center">
            <img src={logo2} alt="Imagem Central" />
          </div>
          <div className="footer-right">
            <img src={logosesi} alt="Imagem Lateral Direita" />
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
