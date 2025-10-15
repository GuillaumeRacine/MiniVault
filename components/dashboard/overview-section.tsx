"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { DashboardSection } from "./dashboard-section"

export function OverviewSection() {
  const detailedContent = (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold">Project Description</h4>
          <Button size="sm" variant="outline">Edit</Button>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground">
            No project description available. Add a description to help team members understand the project goals and context.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold">Vision</h4>
          <Button size="sm" variant="outline">Edit</Button>
        </div>
        <div className="p-4 border rounded-lg">
          <p className="text-sm text-muted-foreground">
            No vision statement defined. Define your project vision to align team efforts toward common objectives.
          </p>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold">Milestones</h4>
          <Button size="sm">Add Milestone</Button>
        </div>
        <div className="p-8 border rounded-lg text-center">
          <p className="text-sm text-muted-foreground">
            No milestones created yet. Milestones help track major project achievements and deadlines.
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Click "Add Milestone" to create your first project milestone.
          </p>
        </div>
      </div>
    </div>
  )

  return (
    <DashboardSection
      title="Overview"
      description="High-level summary of your project status and activity"
      icon="📊"
      detailedContent={detailedContent}
      defaultOpen={true}
    />
  )
}
