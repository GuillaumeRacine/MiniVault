"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardSection } from "./dashboard-section"

export function MetricsSection() {
  const keyMetrics = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-muted-foreground">-</div>
        <div className="text-sm text-muted-foreground">Active Projects</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-muted-foreground">-</div>
        <div className="text-sm text-muted-foreground">Completion Rate</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-muted-foreground">-</div>
        <div className="text-sm text-muted-foreground">Overdue Tasks</div>
      </div>
    </div>
  )

  const detailedContent = (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-3">Weekly Performance</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Tasks Completed</CardDescription>
              <CardTitle className="text-2xl text-muted-foreground">-</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Hours Logged</CardDescription>
              <CardTitle className="text-2xl text-muted-foreground">-</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Code Commits</CardDescription>
              <CardTitle className="text-2xl text-muted-foreground">-</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Documents Created</CardDescription>
              <CardTitle className="text-2xl text-muted-foreground">-</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Team Velocity Trends</h4>
        <div className="p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground">
            No data available. Connect to Notion, GitHub, and other services to see velocity trends.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <DashboardSection
      title="Metrics Overview"
      description="Track key input and output metrics to understand project outcomes"
      icon="🎯"
      keyMetrics={keyMetrics}
      detailedContent={detailedContent}
      defaultOpen={true}
    />
  )
}