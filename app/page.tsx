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
        <div className="flex justify-center">
          <a
            href="https://rw.d5v.cc"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-64 py-4 bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground rounded-xl border border-primary/30"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            <span className="font-semibold">下载模组</span>
          </a>
        </div>
      </div>

      <div id="game-list" className="max-w-3xl mx-auto">
        <GameListClient allGames={gameVersions} />
      </div>
    </div>
  )
}
