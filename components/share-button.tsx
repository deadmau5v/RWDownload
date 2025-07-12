"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Share2, Check } from "lucide-react"

export function ShareButton() {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Button size="lg" variant="outline" className="w-full h-12 text-base bg-transparent" onClick={handleCopy}>
      {copied ? (
        <>
          <Check className="mr-2 h-5 w-5 text-green-500" />
          已复制
        </>
      ) : (
        <>
          <Share2 className="mr-2 h-5 w-5" />
          分享链接
        </>
      )}
    </Button>
  )
}
