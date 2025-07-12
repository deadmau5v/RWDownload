"use client"

import { useState, useMemo } from "react"
import type { GameVersion } from "@/lib/gameVersions"
import { GameCard } from "@/components/game-card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, FileSearch } from "lucide-react"

function EmptyState({ searchTerm }: { searchTerm: string }) {
  return (
    <div className="text-center py-16 px-6 rounded-xl bg-glass">
      <FileSearch className="mx-auto h-16 w-16 text-muted-foreground/50 mb-6" />
      <h3 className="text-2xl font-semibold text-foreground">{searchTerm ? "未找到匹配的版本" : "暂无可用版本"}</h3>
      <p className="mt-3 text-muted-foreground">
        {searchTerm ? `没有找到包含 "${searchTerm}" 的版本，请尝试其他关键词。` : "当前筛选条件下没有可用的版本。"}
      </p>
    </div>
  )
}

export function GameListClient({ allGames }: { allGames: GameVersion[] }) {
  const [searchTerm, setSearchTerm] = useState("")
  const [platformFilter, setPlatformFilter] = useState("all")
  const [versionTypeFilter, setVersionTypeFilter] = useState("all")

  const filteredGames = useMemo(() => {
    return allGames
      .filter((game) => game.version.toLowerCase().includes(searchTerm.toLowerCase()))
      .filter((game) => platformFilter === "all" || Object.keys(game.downloads).includes(platformFilter))
      .filter((game) => {
        if (versionTypeFilter === "all") return true
        if (versionTypeFilter === "stable") return !game.beta && !game.thirdParty
        if (versionTypeFilter === "beta") return game.beta
        if (versionTypeFilter === "thirdParty") return game.thirdParty
        return true
      })
      .sort((a, b) => {
        if (a.recommended && !b.recommended) return -1
        if (!a.recommended && b.recommended) return 1
        return 0
      })
  }, [searchTerm, platformFilter, versionTypeFilter, allGames])

  const platforms = ["all", "Windows", "Android", "Linux", "IOS", "Github"]
  const versionTypes = ["all", "stable", "beta", "thirdParty"]

  const platformLabels: { [key: string]: string } = {
    all: "全部平台",
    Windows: "Windows",
    Android: "Android",
    Linux: "Linux",
    IOS: "iOS",
    Github: "Github",
  }

  const versionTypeLabels: { [key: string]: string } = {
    all: "全部类型",
    stable: "正式版",
    beta: "测试版",
    thirdParty: "第三方",
  }

  return (
    <div className="space-y-6">
      <div className="p-6 bg-glass rounded-xl space-y-4 sticky top-[70px] z-20">
        <div className="relative">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="搜索版本号，例如：1.15, RWPP..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-11 h-12 text-base bg-transparent"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Select value={platformFilter} onValueChange={setPlatformFilter}>
            <SelectTrigger className="h-12 text-base bg-transparent">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter className="h-5 w-5" />
                <SelectValue placeholder="选择平台" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {platforms.map((p) => (
                <SelectItem key={p} value={p} className="text-base">
                  {platformLabels[p]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={versionTypeFilter} onValueChange={setVersionTypeFilter}>
            <SelectTrigger className="h-12 text-base bg-transparent">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Filter className="h-5 w-5" />
                <SelectValue placeholder="选择类型" />
              </div>
            </SelectTrigger>
            <SelectContent>
              {versionTypes.map((t) => (
                <SelectItem key={t} value={t} className="text-base">
                  {versionTypeLabels[t]}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredGames.length > 0 ? (
        <div className="grid grid-cols-1 gap-3">
          {filteredGames.map((game, index) => (
            <GameCard key={game.version} game={game} index={index} />
          ))}
        </div>
      ) : (
        <EmptyState searchTerm={searchTerm} />
      )}
    </div>
  )
}
