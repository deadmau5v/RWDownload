import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AiFillWindows,
  AiOutlineLinux,
  AiFillAndroid,
  AiFillApple,
  AiOutlineCloudDownload,
  AiFillBug,
  AiFillStar,
} from "react-icons/ai";
import { FaBox } from "react-icons/fa";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
} from "./ui/drawer";
import { Alert, AlertTitle } from "@/components/ui/alert";
import { Search, Download, ExternalLink, Shield, Zap, Eye } from "lucide-react";
import { GameVersion, gameVersions } from "@/data/gameVersions";
import { GrGithub } from "react-icons/gr";
import { FaShare } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { FaBox as FaBoxIcon } from "react-icons/fa";
import { AiOutlineArrowRight } from "react-icons/ai";

const SystemSelectItem = ({
  value,
  icon,
}: {
  value: string;
  icon: React.ReactNode;
}) => {
  return (
    <SelectItem value={value} className="focus:bg-gray-50">
      <div className="flex items-center">
        {icon}
        <span className="font-medium">{value}</span>
      </div>
    </SelectItem>
  );
};

// 系统选择器
const SystemSelector = ({
  systems,
  onSelect,
  selectedSystem,
}: {
  systems: string[];
  onSelect: Dispatch<SetStateAction<string | undefined>>;
  selectedSystem: string | undefined;
}) => {
  const icons: { [key: string]: React.ReactNode } = {
    Windows: <AiFillWindows className="mr-3 h-4 w-4 icon-windows" />,
    Linux: <AiOutlineLinux className="mr-3 h-4 w-4 icon-linux" />,
    IOS: <AiFillApple className="mr-3 h-4 w-4 icon-apple" />,
    Android: <AiFillAndroid className="mr-3 h-4 w-4 icon-android" />,
    Github: <GrGithub className="mr-3 h-4 w-4 icon-github" />,
  };

  const items = systems.map((system) => (
    <SystemSelectItem key={system} value={system} icon={icons[system]} />
  ));

  return (
    <Select onValueChange={onSelect} value={selectedSystem}>
      <SelectTrigger className="client-input h-11 font-medium">
        <SelectValue placeholder="选择平台" />
      </SelectTrigger>
      <SelectContent className="bg-white border border-gray-200 shadow-lg">
        {items}
      </SelectContent>
    </Select>
  );
};

// Steam游戏分享嵌入块
export function GameSteamShare() {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="client-card rounded-lg p-4">
        <iframe
          title="steam"
          src="https://store.steampowered.com/widget/647960/"
          width="100%"
          height="190"
          className="rounded border border-gray-200"
        ></iframe>
      </div>
    </div>
  );
}

function GameVersionCounter({ games }: { games: GameVersion[] }) {
  return (
    <Alert className="mb-6 client-card border-l-4 border-l-blue-500">
      <Search className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-gray-800 font-medium">
        共有 <span className="text-blue-600 font-bold text-lg">{games.length}</span> 个版本可供下载
      </AlertTitle>
    </Alert>
  );
}

// 特性标签组件
function FeatureBadges() {
  const features = [
    { icon: Shield, text: "免登录", style: "client-badge-info" },
    { icon: Zap, text: "不限速", style: "client-badge-success" },
    { icon: Eye, text: "无广告", style: "client-badge-warning" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`client-badge ${feature.style} transition-all duration-200 hover:scale-105`}
        >
          <feature.icon className="w-4 h-4" />
          <span>{feature.text}</span>
        </div>
      ))}
    </div>
  );
}

// 主容器
export function GameMuseumComponent() {
  const [showSteamWindow, setShowSteamWindow] = useState(false);

  useEffect(() => {
    document.title = "铁锈战争下载站";
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* 头部区域 */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img
              src="https://cdn1.d5v.cc/yk6baz03t0m000d5qauzx7785smauwhcDIYPAwFxDwe1DcxxDO==.webp"
              alt="铁锈战争 Logo"
              className="h-20 md:h-24 mx-auto drop-shadow-sm hover:scale-105 transition-transform duration-200"
            />
          </div>
          
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            铁锈战争下载站
          </h1>
          
          <p className="text-gray-600 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            提供最新版本的铁锈战争游戏下载，支持多平台，安全可靠
          </p>

          <FeatureBadges />

          {/* 模组下载站按钮 */}
          <div className="mb-8">
            <button
              className="client-button-primary px-6 py-3 rounded font-medium inline-flex items-center gap-2 text-sm"
              onClick={() => {
                window.open("https://rw.d5v.cc", "_blank");
              }}
            >
              <FaBoxIcon className="h-4 w-4" />
              前往模组下载站
              <AiOutlineArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white border border-gray-200 rounded-lg p-1 shadow-sm">
              <TabsTrigger 
                value="all" 
                className="client-tab rounded-md py-2 px-4 text-sm font-medium"
              >
                全部版本
              </TabsTrigger>
              <TabsTrigger 
                value="vanilla"
                className="client-tab rounded-md py-2 px-4 text-sm font-medium"
              >
                原版
              </TabsTrigger>
              <TabsTrigger 
                value="thirdParty"
                className="client-tab rounded-md py-2 px-4 text-sm font-medium"
              >
                第三方版本
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-4">
              <GameVersionCounter games={gameVersions} />
              <div className="space-y-4">
                {gameVersions.map((game) => (
                  <GameVersionCard
                    key={game.version}
                    game={game}
                    setShowSteamWindow={setShowSteamWindow}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vanilla" className="space-y-4">
              <GameVersionCounter
                games={gameVersions.filter((game) => !game.thirdParty)}
              />
              <div className="space-y-4">
                {gameVersions
                  .filter((game) => !game.thirdParty)
                  .map((game) => (
                    <GameVersionCard
                      key={game.version}
                      game={game}
                      setShowSteamWindow={setShowSteamWindow}
                    />
                  ))}
              </div>
            </TabsContent>

            <TabsContent value="thirdParty" className="space-y-4">
              <GameVersionCounter
                games={gameVersions.filter((game) => game.thirdParty)}
              />
              <div className="space-y-4">
                {gameVersions
                  .filter((game) => game.thirdParty)
                  .map((game) => (
                    <GameVersionCard
                      key={game.version}
                      game={game}
                      setShowSteamWindow={setShowSteamWindow}
                    />
                  ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Steam 弹窗 */}
      <Drawer open={showSteamWindow} onClose={() => setShowSteamWindow(false)}>
        <DrawerContent className="bg-white border-t border-gray-200">
          <DrawerHeader className="text-center">
            <DrawerTitle className="text-xl font-bold text-gray-900">
              下载已开始
            </DrawerTitle>
            <DrawerDescription className="text-gray-600">
              是否考虑支持正版游戏？
            </DrawerDescription>
          </DrawerHeader>
          <GameSteamShare />
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export function GameVersionCard({
  game,
  setShowSteamWindow,
}: {
  game: GameVersion;
  setShowSteamWindow: Dispatch<SetStateAction<boolean>>;
}) {
  const [selectedSystem, setSelectedSystem] = useState<string | undefined>(
    Object.keys(game.downloads)[0]
  );

  const availableSystems = Object.keys(game.downloads);

  const handleDownload = () => {
    if (selectedSystem) {
      setShowSteamWindow(true);
      let url = game.downloads[selectedSystem];

      if (url.startsWith("*")) {
        window.open(url.slice(1), "_blank");
      } else {
        window.open(url, "_blank");
      }
    }
  };

  const [downloadButtonMessage, setDownloadButtonMessage] =
    useState<React.ReactNode>(<></>);

  useEffect(() => {
    if (selectedSystem && game.downloads[selectedSystem].startsWith("*")) {
      setDownloadButtonMessage(
        <>
          <ExternalLink className="h-4 w-4" />
          前往 {selectedSystem}
        </>
      );
    } else {
      setDownloadButtonMessage(
        <>
          <Download className="h-4 w-4" />
          下载 {selectedSystem} 版
        </>
      );
    }
  }, [game.downloads, selectedSystem]);

  return (
    <Card className="client-card rounded-lg">
      <CardHeader className="pb-4">
        <CardTitle className="flex flex-col items-center text-center">
          <Link
            to={`/v/${encodeURIComponent(game.version)}`}
            className="text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors duration-200 mb-3"
          >
            {game.version}
          </Link>
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            {game.beta ? (
              <div className="client-badge client-badge-error">
                <AiFillBug className="h-3 w-3" />
                <span>测试版</span>
              </div>
            ) : (
              <div className="client-badge client-badge-success">
                <FaBox className="h-3 w-3" />
                <span>正式版</span>
              </div>
            )}
            
            {game.recommended && (
              <div className="client-badge client-badge-warning">
                <AiFillStar className="h-3 w-3" />
                <span>推荐</span>
              </div>
            )}
            
            {game.thirdParty && (
              <div className="client-badge client-badge-info">
                <FaBox className="h-3 w-3" />
                <span>第三方</span>
              </div>
            )}
          </div>
        </CardTitle>
        
        {game.releaseDate && (
          <CardDescription className="text-center text-gray-500 text-sm mt-2">
            发布于: {game.releaseDate}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="px-6 pb-4">
        <p className="text-gray-600 text-center mb-6 text-sm leading-relaxed">
          {game.description}
        </p>
        
        <div className="max-w-xs mx-auto">
          <SystemSelector
            systems={availableSystems}
            onSelect={setSelectedSystem}
            selectedSystem={selectedSystem}
          />
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6">
        <button
          className={`w-full client-button-primary py-3 rounded font-medium inline-flex items-center justify-center gap-2 text-sm ${
            !selectedSystem ? 'disabled' : ''
          }`}
          disabled={!selectedSystem}
          onClick={handleDownload}
        >
          {downloadButtonMessage}
        </button>
      </CardFooter>
    </Card>
  );
}