"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardSection } from "./dashboard-section"

export function ProjectTrackingSection() {
  const keyMetrics = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-muted-foreground">-</div>
        <div className="text-sm text-muted-foreground">In Progress</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-muted-foreground">-</div>
        <div className="text-sm text-muted-foreground">Review Needed</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-muted-foreground">-</div>
        <div className="text-sm text-muted-foreground">Completed</div>
      </div>
    </div>
  )

  const detailedContent = (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-3">Recent Tasks from Notion</h4>
        <div className="p-8 border rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            No tasks available. Data will be fetched from Notion API.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Configure NOTION_TOKEN and NOTION_DATABASE_ID to see real tasks.
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Project Filters</h4>
        <div className="p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground text-center">
            Filters will be available once tasks are loaded from Notion.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <DashboardSection
      title="Project Tracking"
      description="Monitor tasks and sub-projects from Notion with filters and tags"
      icon="📋"
      keyMetrics={keyMetrics}
      detailedContent={detailedContent}
    />
  )
}