import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { GameMuseumComponent } from "./components/game-museum";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div>
          <Helmet>
            <title>铁锈战争下载站 - 免费下载铁锈战争游戏</title>
            <meta
              name="description"
              content="铁锈战争游戏下载站，提供各个版本的铁锈战争游戏下载，支持Windows、Android、Linux等多个平台。"
            />
            <meta
              name="keywords"
              content="铁锈战争,铁锈战争下载,Rusted Warfare,RTS游戏,策略游戏"
            />
            <link rel="canonical" href={window.location.href} />
          </Helmet>
          <Routes>
            <Route path="/" element={<GameMuseumComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
