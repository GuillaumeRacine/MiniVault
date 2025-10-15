"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardSection } from "./dashboard-section"

export function ReportsSection() {
  const keyMetrics = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-muted-foreground">-</div>
        <div className="text-sm text-muted-foreground">Reports Generated</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-muted-foreground">-</div>
        <div className="text-sm text-muted-foreground">Data Coverage</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-muted-foreground">-</div>
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
        <div className="p-8 border rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            No reports available. Reports will be generated from connected data sources.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Click &quot;Generate New Report&quot; to create your first weekly summary.
          </p>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Report Configuration</h4>
        <div className="p-4 border rounded-lg space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm">Auto-generate weekly reports</span>
            <span className="text-sm text-muted-foreground">Not configured</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Include metrics from all sources</span>
            <span className="text-sm text-muted-foreground">Not configured</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Email to stakeholders</span>
            <span className="text-sm text-muted-foreground">Not configured</span>
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