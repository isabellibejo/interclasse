import React from 'react';
import './sobrenos.css'; // Importe um arquivo CSS para adicionar estilos personalizados
import logo from "../assets/Logo2.png"
import logosesi from "../assets/logosesi.jpg"
import sobrenos from "../assets/sobrenos.png"
import leticia from "../assets/leticia.jpeg"
import analivia from "../assets/analivia.jpeg"
import tainan from "../assets/tainan.jpeg"
import isabelli from "../assets/isabelli.jpeg"
import eduarda from "../assets/eduarda.jpeg"

const SobreNos = () => {
    return (
        <div className="sobre-nos-container">

            <header>
                <div className="header-container">
                    <div className="left">
                       
                        {<img className="logo-space" src={logo} />}
                    </div>
                    <div className="right">
                        <a href="/" className="header-link">Home</a>
                        <a href="sobrenos" className="header-link">Sobre Nós</a>
                    </div>
                </div>
            </header>

            <div className="second-header">
                <img
                    src={sobrenos}
                    alt="Cabeçalho"
                    className="header-image"
                />
            </div>

            {/* Texto de boas-vindas */}
            <p>
                Seja bem-vindo(a) ao nosso site <strong>SESI INTERCLASSE</strong>, nós
                estamos responsáveis e dispostos a entregar as melhores
                atualizações do interclasse de nossa escola.
            </p>

            {/* Desenvolvedores do Design */}
            <h3>Desenvolvedores do Design</h3>

            {/* Imagens dos Desenvolvedores do Design */}
            <div className="designers">
                <div className="designer">
                    <img src={leticia} alt="Letícia" />
                    <p>Letícia</p>
                </div>
                <div className="designer">
                    <img src={analivia} alt="Ana Lívia" />
                    <p>Ana Lívia</p>
                </div>
                <div className="designer">
                    <img src={tainan} alt="Thainan" />
                    <p>Thainan</p>
                </div>
            </div>

            {/* Texto sobre o trabalho dos desenvolvedores de design */}
            <p>
                Trabalharam para o design do site ficar o mais parecido com o intuito do interclasse, que é mostrar as atualizações dos jogos e os placares.
            </p>

            {/* Desenvolvedores do Sistema */}
            <h3>Desenvolvedores do Sistema do Site</h3>

            {/* Imagens dos Desenvolvedores do Sistema */}
            <div className="developers">
                <div className="developer">
                    <img src={isabelli} alt="Isabelli" />
                    <p>Isabelli</p>
                </div>
                <div className="developer">
                    <img src={eduarda} alt="Eduarda" />
                    <p>Eduarda</p>
                </div>
            </div>

            {/* Texto sobre o trabalho dos desenvolvedores do sistema */}
            <p>
                Trabalharam na programação do site para um funcionamento responsivo e objetivo.
            </p>

            {/* Mensagem final */}
            <div className="final-message">
                <p>É no presente que o SESI constrói o futuro da educação e do trabalho.</p>
            </div>

            {/* Rodapé */}
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
                        <img src={logo} alt="Imagem Central" />
                    </div>
                    <div className="footer-right">
                        <img src={logosesi} alt="Imagem Lateral Direita" />
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default SobreNos;

