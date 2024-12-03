import { useParams } from 'react-router-dom';
import { gameVersions } from '@/data/gameVersions';
import { GameVersionCard } from './game-museum';
import { useState } from 'react';
import { Drawer, DrawerContent, DrawerDescription, DrawerHeader, DrawerTitle } from './ui/drawer';
import { GameSteamShare } from './game-museum';

export function VersionPage() {
  const { version } = useParams();
  const [showSteamWindow, setShowSteamWindow] = useState(false);
  
  const gameVersion = gameVersions.find(g => g.version === decodeURIComponent(version || ''));
  
  if (!gameVersion) {
    return <div className="container">
      <h1 className="text-4xl font-bold text-center mb-4">版本不存在</h1>
      <p className="text-center">请返回首页查看所有版本</p>
    </div>;
  }

  return (
    <div className="container">
      <h1 className="text-4xl font-bold text-center mb-4">{gameVersion.version}</h1>
      <GameVersionCard game={gameVersion} setShowSteamWindow={setShowSteamWindow} />

      {/* Steam窗口 */}
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
  );
}
