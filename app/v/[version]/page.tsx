import { gameVersions } from "@/lib/gameVersions"
import { GameVersionDetail } from "@/components/game-version-detail"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

type Props = {
  params: Promise<{ version: string }>
}

export async function generateStaticParams() {
  return gameVersions.map((game) => ({
    version: game.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { version } = await params
  const game = gameVersions.find((g) => g.slug === version)

  if (!game) {
    return {
      title: "版本未找到",
    }
  }

  const description = game.description || `下载 ${game.version}。支持Windows、Android、Linux等多个平台。`

  return {
    title: `${game.version} - 铁锈战争下载`,
    description: description,
    alternates: {
      canonical: `/v/${game.slug}/`,
    },
    openGraph: {
      title: `${game.version} - 铁锈战争下载`,
      description: description,
      url: `/v/${game.slug}/`,
      images: [
        {
          url: "/logo.png",
          width: 256,
          height: 256,
        },
      ],
    },
  }
}

export default async function VersionPage({ params }: Props) {
  const { version } = await params
  const game = gameVersions.find((g) => g.slug === version)

  if (!game) {
    notFound()
  }

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8 md:py-12">
      <div className="mb-8">
        <Button asChild variant="ghost" className="text-muted-foreground hover:text-foreground">
          <Link href="/">
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回列表
          </Link>
        </Button>
      </div>
      <GameVersionDetail game={game} />
    </div>
  )
}
