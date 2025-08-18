import type React from "react"
import Link from "next/link"
import type { GameVersion } from "@/lib/gameVersions"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Bug, CheckCircle, Star, Users } from "lucide-react"
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
    <div className={cn("flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium", className)}>
      <Icon className="h-3.5 w-3.5" />
      <span>{text}</span>
    </div>
  )
}

export function GameCard({ game, index }: { game: GameVersion; index: number }) {
  const isStable = !game.beta && !game.thirdParty

  return (
    <Card
      className={cn(
        "group bg-glass flex flex-col h-full rounded-xl overflow-hidden transition-all duration-300 animate-fade-in",
        "hover:scale-[1.01] hover:shadow-lg hover:shadow-primary/5",
        game.recommended 
          ? "border-2 border-primary/60 ring-1 ring-primary/20 ring-offset-1 ring-offset-background" 
          : "border border-border/60",
      )}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* Header with improved spacing and layout */}
      <CardHeader className="pb-4 pt-6 px-6">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <CardTitle className="text-xl font-bold text-foreground mb-2 line-clamp-1">
              {game.version}
            </CardTitle>
            {/* Platform count indicator */}
            <div className="text-xs text-muted-foreground">
              {Object.keys(game.downloads).length} 个平台可用
            </div>
          </div>
        </div>
      </CardHeader>

      {/* Content with better spacing */}
      <CardContent className="flex-grow px-6 pb-2">
        <div className="space-y-4">
          {/* Badges with improved layout */}
          <div className="flex flex-wrap items-center gap-2">
            {isStable && <Badge icon={CheckCircle} text="正式版" className={badgeStyles.stable} />}
            {game.beta && <Badge icon={Bug} text="测试版" className={badgeStyles.beta} />}
            {game.thirdParty && <Badge icon={Users} text="第三方" className={badgeStyles.thirdParty} />}
            {game.recommended && <Badge icon={Star} text="推荐" className={badgeStyles.recommended} />}
          </div>
          
          {/* Description with improved typography */}
          <div className="space-y-2">
            <p className="text-foreground/80 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
              {game.description || "暂无详细描述，点击查看更多信息。"}
            </p>
          </div>
        </div>
      </CardContent>

      {/* Footer with modern button */}
      <CardFooter className="p-6 pt-4">
        <Button 
          asChild 
          className={cn(
            "w-full group/btn rounded-lg transition-all duration-200",
            "bg-gradient-to-r from-primary/90 to-primary/70 text-primary-foreground",
            "border border-primary/30 hover:border-primary/50",
            "hover:from-primary hover:to-primary/80"
          )}
          size="sm"
        >
          <Link href={`/v/${encodeURIComponent(game.version)}`}>
            <span>查看详情</span>
            <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
