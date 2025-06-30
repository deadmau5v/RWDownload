import { Dispatch, SetStateAction, useEffect, useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
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
import { 
  Search, 
  Download, 
  ExternalLink, 
  Shield, 
  Zap, 
  Eye, 
  Filter,
  X,
  FileSearch
} from "lucide-react";
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

// 搜索和筛选组件
function SearchAndFilter({
  searchTerm,
  setSearchTerm,
  platformFilter,
  setPlatformFilter,
  versionTypeFilter,
  setVersionTypeFilter,
}: {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  platformFilter: string;
  setPlatformFilter: (platform: string) => void;
  versionTypeFilter: string;
  setVersionTypeFilter: (type: string) => void;
}) {
  const platforms = ["all", "Windows", "Android", "Linux", "IOS", "Github"];
  const versionTypes = ["all", "stable", "beta", "thirdParty"];

  const platformLabels: { [key: string]: string } = {
    all: "全部平台",
    Windows: "Windows",
    Android: "Android",
    Linux: "Linux",
    IOS: "iOS",
    Github: "Github",
  };

  const versionTypeLabels: { [key: string]: string } = {
    all: "全部类型",
    stable: "正式版",
    beta: "测试版",
    thirdParty: "第三方",
  };

  return (
    <div className="mb-6 space-y-4">
      {/* 搜索框 */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <input
          type="text"
          placeholder="搜索版本名称..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {searchTerm && (
          <button
            onClick={() => setSearchTerm("")}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 clear-button"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* 筛选器 */}
      <div className="search-filter-container flex gap-4">
        <div className="flex-1">
          <Select value={platformFilter} onValueChange={setPlatformFilter}>
            <SelectTrigger className="filter-select">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <SelectValue placeholder="选择平台" />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg">
              {platforms.map((platform) => (
                <SelectItem key={platform} value={platform}>
                  {platformLabels[platform]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex-1">
          <Select value={versionTypeFilter} onValueChange={setVersionTypeFilter}>
            <SelectTrigger className="filter-select">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-500" />
                <SelectValue placeholder="选择类型" />
              </div>
            </SelectTrigger>
            <SelectContent className="bg-white border border-gray-200 shadow-lg">
              {versionTypes.map((type) => (
                <SelectItem key={type} value={type}>
                  {versionTypeLabels[type]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}

function GameVersionCounter({ games }: { games: GameVersion[] }) {
  return (
    <Alert className="mb-6 client-card border-l-4 border-l-green-500">
      <Search className="h-4 w-4 text-green-600" />
      <AlertTitle className="text-gray-800 font-medium">
        共有 <span className="text-green-600 font-bold text-lg">{games.length}</span> 个版本可供下载
      </AlertTitle>
    </Alert>
  );
}

// 空状态组件
function EmptyState({ searchTerm }: { searchTerm: string }) {
  return (
    <div className="empty-state">
      <FileSearch className="empty-state-icon" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        {searchTerm ? "未找到匹配的版本" : "暂无版本"}
      </h3>
      <p className="text-gray-500">
        {searchTerm 
          ? `没有找到包含 "${searchTerm}" 的版本，请尝试其他关键词`
          : "当前筛选条件下没有可用的版本"
        }
      </p>
    </div>
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
          className={`client-badge ${feature.style}`}
        >
          <feature.icon className="w-4 h-4" />
          <span>{feature.text}</span>
        </div>
      ))}
    </div>
  );
}

// 游戏版本列表组件
function GameVersionList({ 
  games, 
  setShowSteamWindow 
}: { 
  games: GameVersion[];
  setShowSteamWindow: Dispatch<SetStateAction<boolean>>;
}) {
  if (games.length === 0) {
    return <EmptyState searchTerm="" />;
  }

  return (
    <div className="space-y-4">
      {games.map((game, index) => (
        <div
          key={game.version}
          className="card-list-enter"
          style={{
            animationDelay: `${index * 50}ms`,
            animationFillMode: 'both'
          }}
        >
          <GameVersionCard
            game={game}
            setShowSteamWindow={setShowSteamWindow}
          />
        </div>
      ))}
    </div>
  );
}

// 主容器
export function GameMuseumComponent() {
  const [showSteamWindow, setShowSteamWindow] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [platformFilter, setPlatformFilter] = useState("all");
  const [versionTypeFilter, setVersionTypeFilter] = useState("all");

  useEffect(() => {
    document.title = "铁锈战争下载站";
  }, []);

  // 筛选逻辑
  const filteredGames = useMemo(() => {
    let filtered = gameVersions;

    // 按搜索词筛选
    if (searchTerm) {
      filtered = filtered.filter(game =>
        game.version.toLowerCase().includes(searchTerm.toLowerCase()) ||
        game.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // 按平台筛选
    if (platformFilter !== "all") {
      filtered = filtered.filter(game =>
        Object.keys(game.downloads).includes(platformFilter)
      );
    }

    // 按版本类型筛选
    if (versionTypeFilter !== "all") {
      if (versionTypeFilter === "stable") {
        filtered = filtered.filter(game => !game.beta && !game.thirdParty);
      } else if (versionTypeFilter === "beta") {
        filtered = filtered.filter(game => game.beta);
      } else if (versionTypeFilter === "thirdParty") {
        filtered = filtered.filter(game => game.thirdParty);
      }
    }

    return filtered;
  }, [searchTerm, platformFilter, versionTypeFilter]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* 头部区域 */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <img
              src="https://cdn1.d5v.cc/yk6baz03t0m000d5qauzx7785smauwhcDIYPAwFxDwe1DcxxDO==.webp"
              alt="铁锈战争 Logo"
              className="h-20 md:h-24 mx-auto drop-shadow-sm"
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
          {/* 搜索和筛选 */}
          <SearchAndFilter
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            platformFilter={platformFilter}
            setPlatformFilter={setPlatformFilter}
            versionTypeFilter={versionTypeFilter}
            setVersionTypeFilter={setVersionTypeFilter}
          />

          <div className="content-animation">
            <GameVersionCounter games={filteredGames} />
            {filteredGames.length === 0 ? (
              <EmptyState searchTerm={searchTerm} />
            ) : (
              <GameVersionList 
                games={filteredGames} 
                setShowSteamWindow={setShowSteamWindow} 
              />
            )}
          </div>
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
            className="card-title text-xl font-bold mb-3"
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
          <CardDescription className="card-description text-center text-sm mt-2">
            发布于: {game.releaseDate}
          </CardDescription>
        )}
      </CardHeader>
      
      <CardContent className="px-6 pb-4">
        <p className="card-content text-center mb-6 text-sm leading-relaxed">
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