"use client"

import Link from "next/link"
import { useLanguage } from "@/contexts/language-context"
import { CCLicenseBadge } from "@/components/cc-license-badge"

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white border-t py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">Noor - Neutral Open Objective Resource</p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="text-sm text-gray-600">
              <Link
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline flex items-center"
              >
                <CCLicenseBadge />
                Creative Commons Attribution 4.0
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link
                href="https://the-constellation.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline"
              >
                The Constellation
              </Link>
            </div>
            <div className="text-sm text-gray-600">
              <Link
                href="https://sites.google.com/communitylifecompetence.org/fanf?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-600 hover:underline"
              >
                Faith Competence Resources
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
