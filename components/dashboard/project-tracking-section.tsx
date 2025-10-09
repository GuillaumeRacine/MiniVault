"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DashboardSection } from "./dashboard-section"

export function ProjectTrackingSection() {
  const keyMetrics = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-primary">8</div>
        <div className="text-sm text-muted-foreground">In Progress</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-yellow-500">5</div>
        <div className="text-sm text-muted-foreground">Review Needed</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-green-500">15</div>
        <div className="text-sm text-muted-foreground">Completed</div>
      </div>
    </div>
  )

  const detailedContent = (
    <div className="space-y-6">
      <div>
        <h4 className="font-semibold mb-3">Recent Tasks from Notion</h4>
        <div className="space-y-3">
          {[
            { title: "Update API documentation", status: "In Progress", priority: "High", assignee: "John" },
            { title: "Fix authentication bug", status: "Review", priority: "Critical", assignee: "Sarah" },
            { title: "Design new landing page", status: "In Progress", priority: "Medium", assignee: "Mike" },
            { title: "Setup CI/CD pipeline", status: "Planning", priority: "Low", assignee: "Alex" },
          ].map((task, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium">{task.title}</h5>
                    <p className="text-sm text-muted-foreground">Assigned to {task.assignee}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant={task.priority === "Critical" ? "destructive" : task.priority === "High" ? "default" : "secondary"}>
                      {task.priority}
                    </Badge>
                    <Badge variant="outline">{task.status}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Project Filters</h4>
        <div className="flex flex-wrap gap-2">
          <Badge variant="outline">Frontend</Badge>
          <Badge variant="outline">Backend</Badge>
          <Badge variant="outline">Design</Badge>
          <Badge variant="outline">Documentation</Badge>
          <Badge variant="outline">Testing</Badge>
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