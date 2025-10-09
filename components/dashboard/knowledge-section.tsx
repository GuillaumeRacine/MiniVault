"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { DashboardSection } from "./dashboard-section"

export function KnowledgeSection() {
  const keyMetrics = (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="text-center">
        <div className="text-2xl font-bold text-primary">24</div>
        <div className="text-sm text-muted-foreground">Documents</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-purple-500">6</div>
        <div className="text-sm text-muted-foreground">Knowledge Areas</div>
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-orange-500">2 days</div>
        <div className="text-sm text-muted-foreground">Last Updated</div>
      </div>
    </div>
  )

  const detailedContent = (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold">Recent Documents</h4>
          <Button size="sm">Create New</Button>
        </div>
        <div className="space-y-3">
          {[
            { title: "API Integration Guide", type: "Google Docs", category: "Technical", lastModified: "2 hours ago" },
            { title: "Team Onboarding Checklist", type: "Notion", category: "Process", lastModified: "1 day ago" },
            { title: "Project Requirements", type: "Google Docs", category: "Planning", lastModified: "3 days ago" },
            { title: "Code Review Guidelines", type: "GitHub", category: "Technical", lastModified: "1 week ago" },
          ].map((doc, i) => (
            <Card key={i}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium">{doc.title}</h5>
                    <p className="text-sm text-muted-foreground">
                      {doc.type} • Updated {doc.lastModified}
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">{doc.category}</Badge>
                    <Button size="sm" variant="outline">Open</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Knowledge Categories</h4>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {[
            { name: "Technical Docs", count: 8 },
            { name: "Process & Workflows", count: 6 },
            { name: "Project Planning", count: 4 },
            { name: "Team Guidelines", count: 3 },
            { name: "Architecture", count: 2 },
            { name: "Meeting Notes", count: 1 },
          ].map((category, i) => (
            <Card key={i} className="p-3">
              <div className="text-center">
                <div className="font-medium">{category.name}</div>
                <div className="text-sm text-muted-foreground">{category.count} documents</div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Quick Actions</h4>
        <div className="flex flex-wrap gap-2">
          <Button variant="outline" size="sm">Create Meeting Notes</Button>
          <Button variant="outline" size="sm">Generate Documentation</Button>
          <Button variant="outline" size="sm">Share Knowledge Base</Button>
          <Button variant="outline" size="sm">Export All Docs</Button>
        </div>
      </div>
    </div>
  )

  return (
    <DashboardSection
      title="Knowledge Base"
      description="Create clear instructions and context for all collaborators"
      icon="📚"
      keyMetrics={keyMetrics}
      detailedContent={detailedContent}
    />
  )
}