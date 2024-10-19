import { Dispatch, SetStateAction, useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AiFillWindows, AiOutlineLinux, AiFillAndroid, AiFillApple, AiOutlineCloudDownload, AiFillBug, AiFillStar } from "react-icons/ai";
import { FaBox } from "react-icons/fa";
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from "./ui/drawer"
import { Alert, AlertTitle } from "@/components/ui/alert"
import { Search } from "lucide-react"
import { GameVersion, gameVersions } from "@/data/gameVersions"
import { GrGithub } from "react-icons/gr"
import { FaShare } from "react-icons/fa6"


const SystemSelectItem = ({ value, icon }: { value: string, icon: React.ReactNode }) => {
  return <SelectItem value={value}>
    <div className="flex items-center">
      {icon}
      {value}
    </div>
  </SelectItem>
}

// 系统选择器
const SystemSelector = ({ systems, onSelect, selectedSystem }:
  { systems: string[], onSelect: Dispatch<SetStateAction<string | undefined>>, selectedSystem: string | undefined }) => {

  const icons: { [key: string]: React.ReactNode } = {
    "Windows": <AiFillWindows className="mr-2 h-4 w-4" />,
    "Linux": <AiOutlineLinux className="mr-2 h-4 w-4" />,
    "IOS": <AiFillApple className="mr-2 h-4 w-4" />,
    "Android": <AiFillAndroid className="mr-2 h-4 w-4" />,
    "Github": <GrGithub className="mr-2 h-4 w-4" />,
  }

  const items = systems.map((system) => (
    <SystemSelectItem key={system} value={system} icon={icons[system]} />
  ))

  return (
    <Select onValueChange={onSelect} value={selectedSystem}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="选择版本" />
      </SelectTrigger>
      <SelectContent>
        {items}
      </SelectContent>
    </Select>
  )
}

// Steam游戏分享嵌入块
function GameSteamShare() {
  return <div className="m-5 mx-auto max-w-lg" style={{
    width: "100%",
    maxWidth: "800px"
  }}>
    <iframe title="steam" src="https://store.steampowered.com/widget/647960/" width="100%" height="190"></iframe>
  </div>
}


function GameVersionCounter({ games }: { games: GameVersion[] }) {
  return (
    <Alert className="mb-2">
      <Search className="h-4 w-4" />
      <AlertTitle>总共有 <span className="text-blue-500 text-lg">{games.length}</span> 个版本</AlertTitle>
    </Alert>
  );
}

// 主容器
export function GameMuseumComponent() {
  const [showSteamWindow, setShowSteamWindow] = useState(false)

  useEffect(() => {
    document.title = "铁锈战争下载站";
  }, []);

  return (
    <div className="container">
      <img src="https://cdn1.d5v.cc/pan.d5v.cc/logo.png" style={{
        height: "10rem",
        display: "block",
        margin: "0 auto"
      }} />
      <h1 className="text-4xl font-bold text-center mb-4 mt-4">铁锈战争下载站</h1>
      <Badge variant="outline" className="bg-blue-500 text-blue-50 border-blue-600 border mr-2">免登录</Badge>
      <Badge variant="outline" className="bg-green-500 text-green-50 border-green-600 border mr-2">不限速</Badge>
      <Badge variant="outline" className="bg-lime-500 text-lime-50 border-lime-600 border">无广告</Badge>


      <Tabs defaultValue="all" style={{
        width: "80vw",
        maxWidth: "800px"
      }}>
        <TabsList className="w-full bg-black rounded-md mt-5 h-[50px] pl-2 pr-2 bg-gray-200">
          <TabsTrigger className="w-full pb-2 bg-gray-200 " value="all">全部版本</TabsTrigger>
          <TabsTrigger className="w-full pb-2 bg-gray-200 ml-2 mr-2" value="vanilla">原版</TabsTrigger>
          <TabsTrigger className="w-full pb-2 bg-gray-200 " value="thirdParty">第三方版本</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          {/* 全部数据 */}
          <GameVersionCounter games={gameVersions} />
          <div>
            {gameVersions.map((game) => (
              <GameVersionCard key={game.version} game={game} setShowSteamWindow={setShowSteamWindow} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="vanilla">
          {/* 原版 */}
          <GameVersionCounter games={gameVersions.filter((game) => !game.thirdParty)} />
          <div>
            {gameVersions.filter((game) => !game.thirdParty).map((game) => (
              <GameVersionCard key={game.version} game={game} setShowSteamWindow={setShowSteamWindow} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="thirdParty">
          {/* 第三方 */}
          <GameVersionCounter games={gameVersions.filter((game) => game.thirdParty)} />
          <div>
            {gameVersions.filter((game) => game.thirdParty).map((game) => (
              <GameVersionCard key={game.version} game={game} setShowSteamWindow={setShowSteamWindow} />
            ))}
          </div>
        </TabsContent>
      </Tabs>




      {/* 正在下载弹出 */}
      <Drawer open={showSteamWindow} onClose={() => setShowSteamWindow(false)}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>已经开始下载...</DrawerTitle>
            <DrawerDescription>是否考虑支持正版?</DrawerDescription>
          </DrawerHeader>
          <GameSteamShare />
        </DrawerContent>
      </Drawer>

    </div>
  )
}

function GameVersionCard({ game, setShowSteamWindow }: { game: GameVersion, setShowSteamWindow: Dispatch<SetStateAction<boolean>> }) {

  const [selectedSystem, setSelectedSystem] = useState<string | undefined>(
    Object.keys(game.downloads)[0]
  )

  const availableSystems = Object.keys(game.downloads)

  const handleDownload = () => {
    if (selectedSystem) {
      setShowSteamWindow(true)
      // console.log(game.downloads[selectedSystem])
      const url = game.downloads[selectedSystem]
      if (url.startsWith("*")) {
        window.open(url.slice(1), '_blank')
      } else {
        window.open(url, '_blank')
      }
    }
  }

  const [downloadButtonMessage, setDownloadButtonMessage] = useState<React.ReactNode>(<></>)

  useEffect(() => {
    // 如果是 Github 则前往 Github 页面
    if (selectedSystem && game.downloads[selectedSystem].startsWith("*")) {
      setDownloadButtonMessage(<><FaShare className="mr-2 h-4 w-4" />前往 {selectedSystem}</>)
    } else {
      setDownloadButtonMessage(<><AiOutlineCloudDownload className="mr-2 h-4 w-4" />下载 {selectedSystem} 版</>)
    }
  }, [game.downloads, selectedSystem])

  return (
    <Card className="flex flex-col mb-5">
      <CardHeader>
        <CardTitle className="flex justify-center flex-col">
          <div>
            {game.version}
          </div>
          <div className="flex items-center justify-center pt-2">
            {game.beta ?
              <div className="ml-2 bg-red-100 rounded pl-1 pr-2 text-sm flex justify-center items-center text-red-600 border-red-600 border"><AiFillBug className="mr-1" /><span>测试版</span></div> :
              <div className="ml-2 bg-green-100 rounded pl-2 pr-2 text-sm flex justify-center items-center text-green-600 border-green-600 border"><FaBox className="mr-1" /><span>正式版</span></div>
            }
            {
              game.recommended &&
              <div className="ml-2 bg-yellow-100 rounded pl-2 pr-2 text-sm flex justify-center items-center text-yellow-600 border-yellow-600 border"><AiFillStar className="mr-1" /><span>推荐</span></div>
            }
            {
              game.thirdParty &&
              <div className="ml-2 bg-blue-100 rounded pl-2 pr-2 text-sm flex justify-center items-center text-blue-600 border-blue-600 border"><FaBox className="mr-1" /><span>第三方</span></div>
            }
          </div>
        </CardTitle>
        {game.releaseDate && <CardDescription>发布于: {game.releaseDate}</CardDescription>}
      </CardHeader>
      <CardContent>
        <p className="mb-4">{game.description}</p>
        <SystemSelector
          systems={availableSystems}
          onSelect={setSelectedSystem}
          selectedSystem={selectedSystem}
        />
      </CardContent>
      <CardFooter className="mt-auto">
        <Button className="w-full" disabled={!selectedSystem} onClick={handleDownload}>
          {downloadButtonMessage}
        </Button>
      </CardFooter>
    </Card>
  )
}
