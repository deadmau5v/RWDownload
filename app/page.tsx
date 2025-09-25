import { GameListClient } from "@/components/game-list-client"
import { gameVersions } from "@/lib/gameVersions"

export default function HomePage() {
  return (
    <div className="container mx-auto px-6 py-8 md:py-12">
      <div className="relative text-center mb-12 animate-fade-in-up overflow-hidden rounded-xl p-8">
        {/* 暗色模式背景 - 白色网格 */}
        <div className="absolute inset-0 -z-10 bg-grid-white/[0.05] dark:block hidden"></div>
        {/* 亮色模式背景 - 绿色网格 */}
        <div className="absolute inset-0 -z-10 bg-grid-green/[0.1] dark:hidden block"></div>
        <div className="absolute inset-0 -z-20 bg-background"></div>
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-neutral-50 dark:to-neutral-400 mb-4 tracking-tight">
          铁锈战争下载站
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          最新版本的铁锈战争游戏下载，多平台，资源全。
        </p>
      </div>

      <div id="game-list" className="max-w-3xl mx-auto">
        <GameListClient allGames={gameVersions} />
      </div>
    </div>
  )
}
