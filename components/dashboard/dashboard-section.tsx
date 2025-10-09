"use client"

import { useState } from "react"
import { ChevronDown, ChevronRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"

interface DashboardSectionProps {
  title: string
  description: string
  icon: string
  keyMetrics: React.ReactNode
  detailedContent: React.ReactNode
  defaultOpen?: boolean
}

export function DashboardSection({
  title,
  description,
  icon,
  keyMetrics,
  detailedContent,
  defaultOpen = false
}: DashboardSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <Card>
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-muted/50 transition-colors">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">{icon}</span>
                <div>
                  <CardTitle className="text-xl">{title}</CardTitle>
                  <CardDescription>{description}</CardDescription>
                </div>
              </div>
              <Button variant="ghost" size="icon">
                {isOpen ? (
                  <ChevronDown className="h-4 w-4" />
                ) : (
                  <ChevronRight className="h-4 w-4" />
                )}
              </Button>
            </div>
            <div className="mt-4">
              {keyMetrics}
            </div>
          </CardHeader>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <CardContent>
            {detailedContent}
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}