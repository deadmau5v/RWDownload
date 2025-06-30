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
    <SelectItem value={value}>
      <div className="flex items-center">
        {icon}
        {value}
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
    Windows: <AiFillWindows className="mr-2 h-4 w-4 text-blue-500" />,
    Linux: <AiOutlineLinux className="mr-2 h-4 w-4 text-orange-500" />,
    IOS: <AiFillApple className="mr-2 h-4 w-4 text-gray-600" />,
    Android: <AiFillAndroid className="mr-2 h-4 w-4 text-green-500" />,
    Github: <GrGithub className="mr-2 h-4 w-4 text-gray-800" />,
  };

  const items = systems.map((system) => (
    <SystemSelectItem key={system} value={system} icon={icons[system]} />
  ));

  return (
    <Select onValueChange={onSelect} value={selectedSystem}>
      <SelectTrigger className="w-full bg-white/80 backdrop-blur-sm border-gray-200 hover:border-primary/50 transition-all duration-200">
        <SelectValue placeholder="选择版本" />
      </SelectTrigger>
      <SelectContent className="bg-white/95 backdrop-blur-md border-gray-200">
        {items}
      </SelectContent>
    </Select>
  );
};

// Steam游戏分享嵌入块
export function GameSteamShare() {
  return (
    <div className="mx-auto max-w-2xl p-6">
      <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border border-blue-100">
        <iframe
          title="steam"
          src="https://store.steampowered.com/widget/647960/"
          width="100%"
          height="190"
          className="rounded-lg shadow-sm"
        ></iframe>
      </div>
    </div>
  );
}

function GameVersionCounter({ games }: { games: GameVersion[] }) {
  return (
    <Alert className="mb-6 bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
      <Search className="h-4 w-4 text-blue-600" />
      <AlertTitle className="text-gray-700">
        总共有 <span className="text-blue-600 text-xl font-bold">{games.length}</span>{" "}
        个版本可供下载
      </AlertTitle>
    </Alert>
  );
}

// 特性标签组件
function FeatureBadges() {
  const features = [
    { icon: Shield, text: "免登录", color: "blue" },
    { icon: Zap, text: "不限速", color: "green" },
    { icon: Eye, text: "无广告", color: "purple" },
  ];

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`
            flex items-center px-4 py-2 rounded-full text-sm font-medium
            bg-gradient-to-r shadow-sm border transition-all duration-200 hover:scale-105
            ${
              feature.color === "blue"
                ? "from-blue-50 to-blue-100 text-blue-700 border-blue-200 hover:shadow-blue-200/50"
                : feature.color === "green"
                ? "from-green-50 to-green-100 text-green-700 border-green-200 hover:shadow-green-200/50"
                : "from-purple-50 to-purple-100 text-purple-700 border-purple-200 hover:shadow-purple-200/50"
            }
          `}
        >
          <feature.icon className="w-4 h-4 mr-2" />
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-100 rounded-full opacity-20 blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 py-8 max-w-6xl">
        {/* 头部区域 */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img
              src="https://cdn1.d5v.cc/yk6baz03t0m000d5qauzx7785smauwhcDIYPAwFxDwe1DcxxDO==.webp"
              alt="铁锈战争 Logo"
              className="h-24 md:h-32 mx-auto drop-shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent mb-4">
            铁锈战争下载站
          </h1>
          
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            提供最新版本的铁锈战争游戏下载，支持多平台，快速安全
          </p>

          <FeatureBadges />

          {/* 模组下载站按钮 */}
          <div className="mb-8">
            <Button
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={() => {
                window.open("https://rw.d5v.cc", "_blank");
              }}
            >
              <FaBoxIcon className="mr-3 h-5 w-5" />
              前往模组下载站
              <AiOutlineArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* 主要内容区域 */}
        <div className="max-w-4xl mx-auto">
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-2xl p-2 shadow-sm">
              <TabsTrigger 
                value="all" 
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white transition-all duration-200"
              >
                全部版本
              </TabsTrigger>
              <TabsTrigger 
                value="vanilla"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white transition-all duration-200"
              >
                原版
              </TabsTrigger>
              <TabsTrigger 
                value="thirdParty"
                className="rounded-xl data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white transition-all duration-200"
              >
                第三方版本
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="space-y-6">
              <GameVersionCounter games={gameVersions} />
              <div className="grid gap-6">
                {gameVersions.map((game) => (
                  <GameVersionCard
                    key={game.version}
                    game={game}
                    setShowSteamWindow={setShowSteamWindow}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="vanilla" className="space-y-6">
              <GameVersionCounter
                games={gameVersions.filter((game) => !game.thirdParty)}
              />
              <div className="grid gap-6">
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

            <TabsContent value="thirdParty" className="space-y-6">
              <GameVersionCounter
                games={gameVersions.filter((game) => game.thirdParty)}
              />
              <div className="grid gap-6">
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
        <DrawerContent className="bg-white/95 backdrop-blur-md border-t border-gray-200">
          <DrawerHeader className="text-center">
            <DrawerTitle className="text-2xl font-bold text-gray-800">
              下载已开始 🎉
            </DrawerTitle>
            <DrawerDescription className="text-gray-600 text-lg">
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
          <ExternalLink className="mr-2 h-4 w-4" />
          前往 {selectedSystem}
        </>
      );
    } else {
      setDownloadButtonMessage(
        <>
          <Download className="mr-2 h-4 w-4" />
          下载 {selectedSystem} 版
        </>
      );
    }
  }, [game.downloads, selectedSystem]);

  return (
    <Card className="group bg-white/80 backdrop-blur-sm border border-gray-200 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-100/50 hover:-translate-y-1">
      <CardHeader className="pb-4">
        <CardTitle className="flex flex-col items-center text-center">
          <Link
            to={`/v/${encodeURIComponent(game.version)}`}
            className="text-2xl font-bold text-gray-800 hover:text-primary transition-colors duration-300 mb-3"
          >
            {game.version}
          </Link>
          
          <div className="flex flex-wrap items-center justify-center gap-2">
            {game.beta ? (
              <div className="flex items-center px-3 py-1 bg-gradient-to-r from-red-50 to-red-100 rounded-full text-red-700 border border-red-200 text-sm font-medium">
                <AiFillBug className="mr-1 h-4 w-4" />
                <span>测试版</span>
              </div>
            ) : (
              <div className="flex items-center px-3 py-1 bg-gradient-to-r from-green-50 to-green-100 rounded-full text-green-700 border border-green-200 text-sm font-medium">
                <FaBox className="mr-1 h-4 w-4" />
                <span>正式版</span>
              </div>
            )}
            
            {game.recommended && (
              <div className="flex items-center px-3 py-1 bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-full text-yellow-700 border border-yellow-200 text-sm font-medium">
                <AiFillStar className="mr-1 h-4 w-4" />
                <span>推荐</span>
              </div>
            )}
            
            {game.thirdParty && (
              <div className="flex items-center px-3 py-1 bg-gradient-to-r from-purple-50 to-purple-100 rounded-full text-purple-700 border border-purple-200 text-sm font-medium">
                <FaBox className="mr-1 h-4 w-4" />
                <span>第三方</span>
              </div>
            )}
          </div>
        </CardTitle>
        
        {game.releaseDate && (
          <CardDescription className="text-center text-gray-500 mt-2">
            发布于: {game.releaseDate}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="px-6 pb-4">
        <p className="text-gray-600 text-center mb-6 leading-relaxed">
          {game.description}
        </p>
        
        <div className="max-w-sm mx-auto">
          <SystemSelector
            systems={availableSystems}
            onSelect={setSelectedSystem}
            selectedSystem={selectedSystem}
          />
        </div>
      </CardContent>
      
      <CardFooter className="px-6 pb-6">
        <Button
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          disabled={!selectedSystem}
          onClick={handleDownload}
        >
          {downloadButtonMessage}
        </Button>
      </CardFooter>
    </Card>
  );
}