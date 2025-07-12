"use client"

import type React from "react"
import { useState, useEffect } from "react"
import type { GameVersion } from "@/lib/gameVersions"
import { Button } from "@/components/ui/button"
import { ShareButton } from "@/components/share-button"
import { Download, ExternalLink, Bug, Star, CheckCircle, Users, Calendar } from "lucide-react"
import { AiFillWindows, AiOutlineLinux, AiFillAndroid, AiFillApple } from "react-icons/ai"
import { GrGithub } from "react-icons/gr"
import { cn } from "@/lib/utils"

const badgeStyles = {
  stable: "border-green-400/20 bg-green-500/8 text-green-400/80",
  beta: "border-red-400/20 bg-red-500/8 text-red-400/80",
  thirdParty: "border-blue-400/20 bg-blue-500/8 text-blue-400/80",
  recommended: "border-yellow-400/20 bg-yellow-500/8 text-yellow-400/80",
}

function Badge({
  icon: Icon,
  text,
  className,
}: {
  icon: React.ElementType
  text: string
  className: string
}) {
  return (
    <div className={cn("flex items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium", className)}>
      <Icon className="h-3.5 w-3.5" />
      <span>{text}</span>
    </div>
  )
}

const platformIcons: { [key: string]: React.ReactNode } = {
  Windows: <AiFillWindows className="h-6 w-6 text-blue-400" />,
  Linux: <AiOutlineLinux className="h-6 w-6 text-yellow-400" />,
  Android: <AiFillAndroid className="h-6 w-6 text-green-400" />,
  IOS: <AiFillApple className="h-6 w-6 text-neutral-400" />,
  Github: <GrGithub className="h-6 w-6 text-neutral-300" />,
}

export function GameVersionDetail({ game }: { game: GameVersion }) {
  const [selectedSystem, setSelectedSystem] = useState<string>(Object.keys(game.downloads)[0])
  const [isDownloading, setIsDownloading] = useState(false)
  const [countdown, setCountdown] = useState(0)
  const [isTextChanging, setIsTextChanging] = useState(false)
  const platforms = Object.keys(game.downloads)
  const selectedIndex = platforms.indexOf(selectedSystem)
  const [visualSelectedIndex, setVisualSelectedIndex] = useState(0)

  // 当切换平台时重置下载状态并添加文字切换动画
  useEffect(() => {
    setIsDownloading(false)
    setCountdown(0)
    setVisualSelectedIndex(selectedIndex)
    
    // 添加文字切换动画
    setIsTextChanging(true)
    const timer = setTimeout(() => {
      setIsTextChanging(false)
    }, 150)
    
    return () => clearTimeout(timer)
  }, [selectedSystem, selectedIndex])

  const handleSystemChange = (system: string) => {
    if (system !== selectedSystem) {
      const newIndex = platforms.indexOf(system)
      setVisualSelectedIndex(newIndex)
      setIsTextChanging(true)
      setTimeout(() => {
        setSelectedSystem(system)
      }, 150)
    }
  }

  const handleDownload = () => {
    if (isDownloading) return
    
    const url = game.downloads[selectedSystem]
    if (url) {
      
      const link = document.createElement('a')
      link.href = url.startsWith("*") ? url.slice(1) : url
      link.download = ''
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      
      // 设置等待状态
      setIsDownloading(true)
      setCountdown(5)
      
      // 倒计时
      const timer = setInterval(() => {
        setCountdown(prev => {
          if (prev <= 1) {
            clearInterval(timer)
            setIsDownloading(false)
            return 0
          }
          return prev - 1
        })
      }, 1000)
    }
  }

  const isExternalLink = game.downloads[selectedSystem]?.startsWith("*")

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up max-w-7xl mx-auto">
      {/* Left Column: Main Info */}
      <div className="md:col-span-2 space-y-6">
        <div className="flex items-start gap-6">
          <div className="p-3 bg-glass rounded-2xl border">
            <img src="/logo.png" alt="Game Logo" className="w-16 h-16 rounded-xl" />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-foreground mb-2">{game.version}</h1>
            {game.releaseDate && (
              <div className="flex items-center gap-2 text-muted-foreground">
                <Calendar className="h-4 w-4" />
                <span className="text-sm">发布于: {game.releaseDate}</span>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          {!game.beta && !game.thirdParty && <Badge icon={CheckCircle} text="正式版" className={badgeStyles.stable} />}
          {game.beta && <Badge icon={Bug} text="测试版" className={badgeStyles.beta} />}
          {game.thirdParty && <Badge icon={Users} text="第三方" className={badgeStyles.thirdParty} />}
          {game.recommended && <Badge icon={Star} text="推荐" className={badgeStyles.recommended} />}
        </div>

        <div className="bg-glass p-6 rounded-xl border">
          <h3 className="text-lg font-semibold mb-4 text-foreground">版本描述</h3>
          <p className="text-foreground/80 leading-relaxed text-sm">{game.description || "暂无详细描述。"}</p>
        </div>
      </div>

      {/* Right Column: Actions */}
      <div className="md:col-span-1">
        <div className="sticky top-24 space-y-6 bg-glass p-6 rounded-xl border">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">选择平台</h3>
            <div className="relative flex flex-col gap-1 p-2 bg-background/30 rounded-xl border border-border/40">
              {/* 滑动选择背景 */}
              <div 
                className="absolute left-2 w-[calc(100%-16px)] h-12 bg-primary/8 border border-primary/40 rounded-lg transition-all duration-300 ease-out"
                style={{
                  transform: `translateY(${visualSelectedIndex * 52}px)`,
                }}
              />
              
              {platforms.map((sys, index) => (
                <button
                  key={sys}
                  onClick={() => handleSystemChange(sys)}
                  className="relative z-10 flex items-center gap-3 p-3 rounded-lg transition-colors duration-200"
                >
                  <div className="transition-all duration-200">
                    {platformIcons[sys]}
                  </div>
                  <div className="flex-1 text-left">
                    <span className={cn(
                      "text-sm font-medium transition-colors duration-200",
                      selectedSystem === sys ? "text-primary" : "text-foreground/80"
                    )}>
                      {sys}
                    </span>
                  </div>
                  <div className={cn(
                    "w-1.5 h-1.5 rounded-full transition-all duration-200",
                    selectedSystem === sys 
                      ? "bg-primary opacity-100" 
                      : "bg-transparent opacity-0"
                  )} />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-3 pt-6 border-t border-border/60">
            <Button
              size="lg"
              className={cn(
                "w-full h-14 text-base font-bold rounded-xl transition-all duration-200",
                isDownloading
                  ? "bg-gray-400 text-gray-600 border border-gray-300 cursor-not-allowed"
                  : "bg-gradient-to-br from-primary/90 to-primary/70 text-primary-foreground border border-primary/30"
              )}
              onClick={handleDownload}
              disabled={isDownloading}
            >
              <div className="flex items-center gap-2">
                {isDownloading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin" />
                    <span className="transition-all duration-200">已开始下载</span>
                  </>
                ) : (
                  <>
                    <div className={cn(
                      "transition-all duration-300 ease-out",
                      isTextChanging ? "opacity-0 scale-95 translate-y-1" : "opacity-100 scale-100 translate-y-0"
                    )}>
                      {isExternalLink ? <ExternalLink className="h-5 w-5" /> : <Download className="h-5 w-5" />}
                    </div>
                    <div className="relative overflow-hidden">
                      <span className={cn(
                        "inline-block transition-all duration-300 ease-out",
                        isTextChanging 
                          ? "opacity-0 translate-y-2 scale-95" 
                          : "opacity-100 translate-y-0 scale-100"
                      )}>
                        {isExternalLink ? `前往 ${selectedSystem}` : `下载 ${selectedSystem} 版`}
                      </span>
                    </div>
                  </>
                )}
              </div>
            </Button>
            <ShareButton />
          </div>
        </div>
      </div>
    </div>
  )
}
