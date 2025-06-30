import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { GameMuseumComponent } from "./components/game-museum";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <div className="min-h-screen">
          <Helmet>
            <title>铁锈战争下载站 - 免费下载铁锈战争游戏</title>
            <meta
              name="description"
              content="铁锈战争游戏下载站，提供各个版本的铁锈战争游戏下载，支持Windows、Android、Linux等多个平台。免登录、不限速、无广告。"
            />
            <meta
              name="keywords"
              content="铁锈战争,铁锈战争下载,Rusted Warfare,RTS游戏,策略游戏,免费下载,多平台"
            />
            <link rel="canonical" href={window.location.href} />
            <meta name="theme-color" content="#3b82f6" />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="铁锈战争下载站 - 免费下载铁锈战争游戏" />
            <meta property="og:description" content="提供各个版本的铁锈战争游戏下载，支持多个平台，免登录、不限速、无广告。" />
            <meta property="og:url" content={window.location.href} />
          </Helmet>
          <Routes>
            <Route path="/" element={<GameMuseumComponent />} />
            <Route path="/v/:version" element={<GameMuseumComponent />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;