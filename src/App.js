import "./style.css";
import { useState } from "react";

function App() {

  const [pagina, setPagina] = useState("dashboard");

  const renderConteudo = () => {

    switch(pagina) {

      case "dashboard":
        return (
          <>
            <section className="dashboard">

              <div className="card destaque">

                <span className="titulo">
                  Métrica Principal
                </span>

                <div className="percentual">
                  80%
                </div>

                <p>
                  Usuários conseguiram acessar serviços sem ajuda externa.
                </p>

                <div className="barra">
                  <div className="progresso"></div>
                </div>

              </div>

              <div className="card">
                <span className="titulo">
                  Usuários Testados
                </span>

                <div className="numero">
                  100
                </div>
              </div>

              <div className="card">
                <span className="titulo">
                  Serviços Disponíveis
                </span>

                <div className="numero">
                  24
                </div>
              </div>

            </section>

            <section className="fluxo">

              <h2>
                Fluxo Principal
              </h2>

              <div className="fluxo-grid">

                <div className="etapa">
                  Cadastro/Login
                </div>

                <div className="seta">→</div>

                <div className="etapa">
                  Tela Inicial
                </div>

                <div className="seta">→</div>

                <div className="etapa">
                  Buscar Serviço
                </div>

                <div className="seta">→</div>

                <div className="etapa">
                  Conclusão
                </div>

              </div>

            </section>
          </>
        );

      case "servicos":
        return (
          <section className="servicos">

            <h2>
              Serviços Digitais
            </h2>

            <div className="cards-servicos">

              <div className="servico">
                🏥
                <h3>Agendamento SUS</h3>
                <p>Acesso simplificado à saúde pública.</p>
              </div>

              <div className="servico">
                🏛
                <h3>Serviços Públicos</h3>
                <p>INSS, CPF e documentos digitais.</p>
              </div>

              <div className="servico">
                📱
                <h3>Aplicativos Úteis</h3>
                <p>Links rápidos para serviços essenciais.</p>
              </div>

            </div>

          </section>
        );

      case "empregos":
        return (
          <section className="servicos">

            <h2>
              Vagas de Emprego
            </h2>

            <div className="cards-servicos">

              <div className="servico">
                💼
                <h3>Assistente Administrativo</h3>
                <p>Vagas para início imediato.</p>
              </div>

              <div className="servico">
                🧾
                <h3>Auxiliar de Escritório</h3>
                <p>Oportunidades para jovens e adultos.</p>
              </div>

              <div className="servico">
                🏪
                <h3>Atendimento Comercial</h3>
                <p>Vagas em comércios locais.</p>
              </div>

            </div>

          </section>
        );

      case "cursos":
        return (
          <section className="servicos">

            <h2>
              Cursos Gratuitos
            </h2>

            <div className="cards-servicos">

              <div className="servico">
                📚
                <h3>Informática Básica</h3>
                <p>Introdução ao uso de computadores.</p>
              </div>

              <div className="servico">
                🌐
                <h3>Internet e Navegação</h3>
                <p>Aprenda a acessar serviços digitais.</p>
              </div>

              <div className="servico">
                💻
                <h3>Programação Básica</h3>
                <p>Primeiros passos em tecnologia.</p>
              </div>

            </div>

          </section>
        );

      case "assistente":
        return (
          <section className="assistente">

            <div>

              <h2>
                Assistente por Voz
              </h2>

              <p>
                Ferramenta criada para auxiliar usuários
                com baixa alfabetização digital.
              </p>

            </div>

            <button>
              🎤 Ativar Assistente
            </button>

          </section>
        );

      case "config":
        return (
          <section className="servicos">

            <h2>
              Configurações
            </h2>

            <div className="cards-servicos">

              <div className="servico">
                🌙
                <h3>Modo Escuro</h3>
                <p>Personalização de acessibilidade visual.</p>
              </div>

              <div className="servico">
                🔊
                <h3>Volume do Assistente</h3>
                <p>Controle do áudio da plataforma.</p>
              </div>

              <div className="servico">
                🌎
                <h3>Idioma</h3>
                <p>Português, Inglês e Espanhol.</p>
              </div>

            </div>

          </section>
        );

      default:
        return null;
    }

  };

  return (

    <div className="app">

      <aside className="sidebar">

        <div className="logo">
          🌎 Conecta
        </div>

        <nav>

          <div
            className={`menu ${pagina === "dashboard" ? "active" : ""}`}
            onClick={() => setPagina("dashboard")}
          >
            📊 Dashboard
          </div>

          <div
            className={`menu ${pagina === "servicos" ? "active" : ""}`}
            onClick={() => setPagina("servicos")}
          >
            🏥 Serviços
          </div>

          <div
            className={`menu ${pagina === "empregos" ? "active" : ""}`}
            onClick={() => setPagina("empregos")}
          >
            💼 Empregos
          </div>

          <div
            className={`menu ${pagina === "cursos" ? "active" : ""}`}
            onClick={() => setPagina("cursos")}
          >
            📚 Cursos
          </div>

          <div
            className={`menu ${pagina === "assistente" ? "active" : ""}`}
            onClick={() => setPagina("assistente")}
          >
            🎤 Assistente
          </div>

          <div
            className={`menu ${pagina === "config" ? "active" : ""}`}
            onClick={() => setPagina("config")}
          >
            ⚙ Configurações
          </div>

        </nav>

      </aside>

      <main className="main">

        <header className="hero">

          <div>

            <h1>
              Conecta Comunidade
            </h1>

            <p>
              Plataforma digital de inclusão tecnológica,
              acesso simplificado a serviços essenciais
              e fortalecimento da cidadania digital.
            </p>

          </div>

          <button>
            Acessar Plataforma
          </button>

        </header>

        {renderConteudo()}

      </main>

    </div>
  );
}

export default App;