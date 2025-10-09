"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardSection } from "./dashboard-section"

export function ReportsSection() {
  const keyMetrics = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-primary">3</div>
        <div className="text-sm text-muted-foreground">Reports Generated</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-500">92%</div>
        <div className="text-sm text-muted-foreground">Data Coverage</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-blue-500">Last Week</div>
        <div className="text-sm text-muted-foreground">Latest Report</div>
      </div>
    </div>
  )

  const detailedContent = (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold">Weekly Reports</h4>
          <Button size="sm">Generate New Report</Button>
        </div>
        <div className="space-y-3">
          {[
            { title: "Week of Oct 2-8, 2024", status: "Complete", highlights: "3 major milestones, 0 blockers" },
            { title: "Week of Sep 25-Oct 1, 2024", status: "Complete", highlights: "2 releases, 1 critical fix" },
            { title: "Week of Sep 18-24, 2024", status: "Complete", highlights: "Sprint planning, team onboarding" },
          ].map((report, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h5 className="font-medium">{report.title}</h5>
                    <p className="text-sm text-muted-foreground">{report.highlights}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-xs text-green-500">{report.status}</span>
                    <Button size="sm" variant="outline">View</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Report Configuration</h4>
        <div className="p-4 border rounded-lg space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Auto-generate weekly reports</span>
            <span className="text-sm text-green-500">Enabled</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Include metrics from all sources</span>
            <span className="text-sm text-green-500">Enabled</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Email to stakeholders</span>
            <span className="text-sm text-muted-foreground">Disabled</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <DashboardSection
      title="Weekly Reports"
      description="Generate comprehensive weekly summaries when needed"
      icon="📊"
      keyMetrics={keyMetrics}
      detailedContent={detailedContent}
    />
  )
}