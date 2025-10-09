"use client"

import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { DashboardHeader } from "./header"
import { MetricsSection } from "./metrics-section"
import { ProjectTrackingSection } from "./project-tracking-section"
import { ReportsSection } from "./reports-section"
import { KnowledgeSection } from "./knowledge-section"

export function MainDashboard() {
  const { data: session, status } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (status === "loading") return
    if (!session) {
      router.push("/auth/signin")
    }
  }, [session, status, router])

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-2xl font-semibold mb-2">Loading...</div>
          <div className="text-muted-foreground">Please wait while we load your dashboard</div>
        </div>
      </div>
    )
  }

  if (!session) {
    return null
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto py-6 space-y-6">
        <DashboardHeader />
        <div className="space-y-6">
          <MetricsSection />
          <ProjectTrackingSection />
          <ReportsSection />
          <KnowledgeSection />
        </div>
      </div>
    </div>
  )
}