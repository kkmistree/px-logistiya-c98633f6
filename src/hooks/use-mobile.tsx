
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(false)

  React.useEffect(() => {
    // Function to check if device is mobile
    const checkIsMobile = () => {
      const isMobileByWidth = window.innerWidth < MOBILE_BREAKPOINT
      // Additional check for mobile devices via user agent
      const isMobileByAgent = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
      // Also check for touch capability
      const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0)
      
      setIsMobile(isMobileByWidth || (isMobileByAgent && isTouchDevice))
    }

    // Initial check
    checkIsMobile()
    
    // Check on resize
    const mql = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
    const handleResize = () => checkIsMobile()
    
    // Modern event listener for resize
    window.addEventListener('resize', handleResize)
    mql.addEventListener('change', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      mql.removeEventListener('change', handleResize)
    }
  }, [])

  return isMobile
}
