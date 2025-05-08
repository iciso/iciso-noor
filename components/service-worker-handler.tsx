"use client"

import { useEffect } from "react"

export function ServiceWorkerHandler() {
  useEffect(() => {
    // Check if we're in a browser environment
    if (typeof window === "undefined" || !("serviceWorker" in navigator)) {
      return
    }

    // Check if we're in the v0 preview environment
    const isV0Preview = window.location.hostname.includes("vusercontent.net")

    if (isV0Preview) {
      // Unregister any service workers in the v0 preview environment
      navigator.serviceWorker
        .getRegistrations()
        .then((registrations) => {
          for (const registration of registrations) {
            registration.unregister()
            console.log("Service worker unregistered for v0 preview environment")
          }
        })
        .catch((error) => {
          console.error("Error unregistering service worker:", error)
        })
    }
  }, [])

  // This component doesn't render anything
  return null
}
