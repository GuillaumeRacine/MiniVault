"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardSection } from "./dashboard-section"

export function MetricsSection() {
  const keyMetrics = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-primary">12</div>
        <div className="text-sm text-muted-foreground">Active Projects</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-500">85%</div>
        <div className="text-sm text-muted-foreground">Completion Rate</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-orange-500">3</div>
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
              <CardTitle className="text-2xl">24</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Hours Logged</CardDescription>
              <CardTitle className="text-2xl">47.5</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Code Commits</CardDescription>
              <CardTitle className="text-2xl">18</CardTitle>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardDescription>Documents Created</CardDescription>
              <CardTitle className="text-2xl">6</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Team Velocity Trends</h4>
        <div className="p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground">
            📈 Team velocity has increased by 15% this week compared to last week.
            The completion rate for critical tasks remains strong at 92%.
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