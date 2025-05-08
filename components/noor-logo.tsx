import Image from "next/image"
import Link from "next/link"

interface NoorLogoProps {
  size?: number
  withText?: boolean
  className?: string
}

export function NoorLogo({ size = 40, withText = true, className = "" }: NoorLogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <div className="relative" style={{ width: size, height: size }}>
        <Image
          src="/favicon.png"
          alt="Noor Logo - Arabic letter Nun"
          width={size}
          height={size}
          className="object-contain"
        />
      </div>
      {withText && <span className="font-bold text-xl">Noor</span>}
    </Link>
  )
}
