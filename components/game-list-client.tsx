"use client"

import { useState, useMemo } from "react"
import type { GameVersion } from "@/lib/gameVersions"
import { GameCard } from "@/components/game-card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter, FileSearch, Package, ArrowUpRight, ChevronDown } from "lucide-react"

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
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false)

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

  const platforms = ["all", "Windows", "Android", "Linux", "IOS", "Github", "MacOS"]
  const versionTypes = ["all", "stable", "beta", "thirdParty"]

  const platformLabels: { [key: string]: string } = {
    all: "全部平台",
    Windows: "Windows",
    Android: "Android",
    Linux: "Linux",
    IOS: "iOS",
    MacOS: "MacOS",
    Github: "Github",
  }

  const versionTypeLabels: { [key: string]: string } = {
    all: "全部类型",
    stable: "正式版",
    beta: "测试版",
    thirdParty: "第三方",
  }

  const filterFields = (
    <>
      <div className="relative">
        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        <Input
          type="text"
          placeholder="搜索版本号，例如：1.15, RWPP..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="h-12 bg-transparent pl-11 text-base"
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <Select value={platformFilter} onValueChange={setPlatformFilter}>
          <SelectTrigger className="h-12 bg-transparent text-base">
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
          <SelectTrigger className="h-12 bg-transparent text-base">
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
    </>
  )

  return (
    <div className="space-y-6">
      <div className="space-y-3">
        <Button
          asChild
          size="lg"
          className="h-14 w-full rounded-xl bg-primary px-4 text-primary-foreground shadow-sm hover:bg-primary/90 md:hidden"
        >
          <a href="https://rw.denox.cc" target="_blank" rel="noopener noreferrer">
            <span className="grid w-full grid-cols-[36px_1fr_20px] items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/14">
                <Package className="h-5 w-5" />
              </span>
              <span className="text-center">
                <span className="block text-base font-semibold leading-tight">铁锈工坊</span>
                <span className="mt-1 block text-xs text-primary-foreground/80">数百款汉化模组</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </Button>
      </div>

      <Collapsible open={mobileFiltersOpen} onOpenChange={setMobileFiltersOpen} className="md:hidden">
        <div className="rounded-xl bg-glass">
          <CollapsibleTrigger asChild>
            <Button
              variant="ghost"
              className="flex h-auto w-full items-center justify-between rounded-xl px-4 py-4 text-left"
            >
              <span>
                <span className="block text-sm font-medium text-foreground">筛选下载版本</span>
                <span className="mt-1 block text-xs text-muted-foreground">
                  {mobileFiltersOpen ? "收起筛选条件" : "默认折叠，点此展开"}
                </span>
              </span>
              <ChevronDown className={`h-4 w-4 shrink-0 transition-transform ${mobileFiltersOpen ? "rotate-180" : ""}`} />
            </Button>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-4 px-4 pb-4">
            {filterFields}
          </CollapsibleContent>
        </div>
      </Collapsible>

      <div className="hidden rounded-xl bg-glass p-6 md:sticky md:top-[70px] md:z-20 md:block md:space-y-4">
        {filterFields}
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
