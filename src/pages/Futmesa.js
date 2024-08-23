import React from 'react';
import './esportes.css';
import logo from "../assets/Logo2.png"
import logosesi from "../assets/logosesi.jpg"
import logofutmesa from "../assets/logofutmesa.png"
import tcheca from "../assets/tcheca.jpeg"
import belgica from "../assets/belgica.jpeg"
import brasil from "../assets/brasil.jpeg"
import italia from "../assets/italia.jpeg"
import angola from "../assets/angola.jpeg"
import inglaterra from "../assets/inglaterra.jpeg"
import alemanha from "../assets/alemanha.jpeg"
import canada from "../assets/canada.jpeg"


const App = () => {
    return (
        <>
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
                    src={logofutmesa}
                    alt="Cabeçalho"
                    className="header-image"
                />
            </div>

            {/* Título "Fase de Grupo" */}
            <h1 className="title">Fase de Grupo</h1>

            {/* Informações dos Jogos */}
            <div class="match-info">
                <div class="match">
                    <strong>21/08 - Quarta - 10:00</strong>
                    <p class="match-p">
                        Brasil <img src={brasil} alt="Bandeira Itália" class="flag-circle" /> 2 x 0
                        <img src={belgica} alt="Bandeira Bélgica" class="flag-circle" /> Bélgica
                    </p>
                </div>
                <div class="match">
                    <strong>24/08 - Sábado - 16:00</strong>
                    <p class="match-p">
                        Itália <img src={italia} alt="Bandeira Brasil" class="flag-circle" /> 3 x 2
                        <img src={tcheca} alt="Bandeira italia" class="flag-circle" /> Rep. Tcheca
                    </p>
                </div>
                <div class="match">
                    <strong>27/08 - Terça - 19:30</strong>
                    <p class="match-p">
                        Angola <img src={angola} alt="Bandeira Angola" class="flag-circle" /> 1 x 2
                        <img src={inglaterra} alt="Bandeira Inglaterra" class="flag-circle" /> Inglaterra
                    </p>
                </div>
                <div class="match">
                    <strong>31/08 - Sábado - 18:25</strong>
                    <p class="match-p">
                        Alemanha <img src={alemanha} alt="Bandeira Alemanha" class="flag-circle" /> 1 x 0
                        <img src={canada} alt="Bandeira Canadá" class="flag-circle" /> Canadá
                    </p>
                </div>
            </div>

            {/* Tabela */}
            <div class="table-container">
                <div class="table">
                    <div class="table-header">
                        Grupo A
                    </div>
                    <div class="table-body">
                        <div class="table-row">
                            <img src={brasil} alt="Bandeira Brasil" class="flag-circle" />
                            <span>Brasil 9°A</span>
                        </div>
                        <div class="table-row">
                            <img src={canada} alt="Bandeira Canadá" class="flag-circle" />
                            <span>Canadá 1°B</span>
                        </div>
                        <div class="table-row">
                            <img src={inglaterra} alt="Bandeira Inglaterra" class="flag-circle" />
                            <span>Inglaterra 2°A</span>
                        </div>
                        <div class="table-row">
                            <img src={tcheca} alt="Bandeira Rep. Tcheca" class="flag-circle" />
                            <span>Rep. Tcheca 3°B</span>
                        </div>
                    </div>
                </div>

                <div class="table">
                    <div class="table-header">
                       Grupo B
                    </div>
                    <div class="table-body">
                        <div class="table-row">
                            <span>Alemanha 2°B</span>
                            <img src={alemanha} alt="Bandeira Alemanha" class="flag-circle" />
                        </div>
                        <div class="table-row">
                            <span>Angola 3°A</span>
                            <img src={angola} alt="Bandeira Angola" class="flag-circle" />
                        </div>
                        <div class="table-row">
                            <span>Itália 1°A</span>
                            <img src={italia} alt="Bandeira Itália" class="flag-circle" />
                        </div>
                        <div class="table-row">
                            <span>Bélgica 9°B</span>
                            <img src={belgica} alt="Bandeira Bélgica" class="flag-circle" />
                        </div>
                    </div>
                </div>
            </div>


            {/* Semifinal */}
            <>
                <h2 className="section-title">Semifinal</h2>
                <div className="match-semi">
                    <p class="match-p">
                        Venc. A ou B <img src="https://via.placeholder.com/40" alt="Bandeira Time A" className="flag-circle" /> x{' '}
                        <img src="https://via.placeholder.com/40" alt="Bandeira Time B" className="flag-circle" /> Venc. A ou B
                    </p>
                </div>
                <div className="match-semi">
                    <p class="match-p">
                        Venc. A ou B <img src="https://via.placeholder.com/40" alt="Bandeira Time A" className="flag-circle" /> x{' '}
                        <img src="https://via.placeholder.com/40" alt="Bandeira Time B" className="flag-circle" /> Venc. A ou B
                    </p>
                </div>
            </>
            {/* Final */}
            <>
                <h2 className="section-title">Final</h2>
                <div className="match-final">
                    <p class="match-p">
                        Venc. A ou B <img src="https://via.placeholder.com/40" alt="Bandeira Time A" className="flag-circle" /> x{' '}
                        <img src="https://via.placeholder.com/40" alt="Bandeira Time B" className="flag-circle" /> Venc. A ou B
                    </p>
                </div>
            </>
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
        </>
    );
};

export default App;
