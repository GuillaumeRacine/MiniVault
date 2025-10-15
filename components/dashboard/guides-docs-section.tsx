"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { DashboardSection } from "./dashboard-section"
import { useProjectConfig } from "@/contexts/project-config-context"
import { ExternalLink } from "lucide-react"

export function GuidesDocsSection() {
  const { config } = useProjectConfig()

  const detailedContent = (
    <div className="space-y-6">
      <div>
        <div className="flex items-center justify-between mb-3">
          <h4 className="font-semibold">Important Links & References</h4>
          <Button size="sm">Add Link</Button>
        </div>
        <div className="space-y-3">
          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium text-sm">
                      {config.googleDrive?.folderName || "Google Drive Folder"}
                    </h5>
                    <p className="text-xs text-muted-foreground">Main project documentation</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Drive</Badge>
                    {config.googleDrive?.folderId ? (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          window.open(
                            `https://drive.google.com/drive/folders/${config.googleDrive?.folderId}`,
                            "_blank"
                          )
                        }
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        View
                      </Button>
                    )}
                  </div>
                </div>
                <div className="p-2 bg-muted/50 rounded text-xs font-mono text-muted-foreground">
                  {config.googleDrive?.folderId || "Not configured"}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium text-sm">
                      {config.notion?.databaseName || "Notion Database"}
                    </h5>
                    <p className="text-xs text-muted-foreground">Project tracking and tasks</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">Notion</Badge>
                    {config.notion?.databaseId ? (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          window.open(
                            `https://notion.so/${config.notion?.databaseId.replace(/-/g, "")}`,
                            "_blank"
                          )
                        }
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        View
                      </Button>
                    )}
                  </div>
                </div>
                <div className="p-2 bg-muted/50 rounded text-xs font-mono text-muted-foreground truncate">
                  {config.notion?.databaseId || "Not configured"}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h5 className="font-medium text-sm">GitHub Repository</h5>
                    <p className="text-xs text-muted-foreground">Source code repository</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary">GitHub</Badge>
                    {config.github?.owner && config.github?.repo ? (
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() =>
                          window.open(
                            `https://github.com/${config.github?.owner}/${config.github?.repo}`,
                            "_blank"
                          )
                        }
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View
                      </Button>
                    ) : (
                      <Button size="sm" variant="outline" disabled>
                        View
                      </Button>
                    )}
                  </div>
                </div>
                <div className="p-2 bg-muted/50 rounded text-xs font-mono text-muted-foreground">
                  {config.github?.owner && config.github?.repo
                    ? `${config.github.owner}/${config.github.repo}`
                    : "Not configured"}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-3">Quick Reference</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Card className="p-3">
            <div className="space-y-1">
              <div className="text-sm font-medium">Project Workspace</div>
              <div className="text-xs text-muted-foreground">Notion workspace link</div>
            </div>
          </Card>
          <Card className="p-3">
            <div className="space-y-1">
              <div className="text-sm font-medium">Shared Documents</div>
              <div className="text-xs text-muted-foreground">Google Drive shared folder</div>
            </div>
          </Card>
          <Card className="p-3">
            <div className="space-y-1">
              <div className="text-sm font-medium">API Documentation</div>
              <div className="text-xs text-muted-foreground">External API docs</div>
            </div>
          </Card>
          <Card className="p-3">
            <div className="space-y-1">
              <div className="text-sm font-medium">Meeting Notes</div>
              <div className="text-xs text-muted-foreground">Notion meeting archive</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )

  return (
    <DashboardSection
      title="Guides and Docs"
      description="Important links and references for project resources"
      icon="📚"
      detailedContent={detailedContent}
      defaultOpen={true}
    />
  )
}
