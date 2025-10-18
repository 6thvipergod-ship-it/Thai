"use client";

import { useAdaptiveUx } from "@/contexts/adaptive-ux-context";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Bot, ChevronUp, Loader2 } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

export function AiSuggestionsPanel() {
  const { adjustments, isLoading } = useAdaptiveUx();
  const [isOpen, setIsOpen] = useState(false);

  const hasAdjustments = Object.values(adjustments).some(adj => adj);

  if (isLoading && !hasAdjustments) {
    return (
        <div className="fixed bottom-4 right-4 z-50">
            <Button variant="outline" disabled>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Analyzing UX...
            </Button>
        </div>
    );
  }

  if (!hasAdjustments) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <Button>
            <Bot className="mr-2 h-4 w-4" />
            AI UX Suggestions
            <ChevronUp className={cn("ml-2 h-4 w-4 transition-transform", isOpen && "rotate-180")} />
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <Card className="mt-2 w-80 max-w-xs shadow-2xl">
            <CardHeader>
              <CardTitle className="font-headline flex items-center gap-2"><Bot size={20}/> Optimization Report</CardTitle>
              <CardDescription>AI-powered suggestions to improve site performance and engagement.</CardDescription>
            </CardHeader>
            <CardContent className="text-sm space-y-4 max-h-64 overflow-y-auto">
              {Object.entries(adjustments).map(([key, value]) => {
                if (!value) return null;
                const sectionName = key.replace(/([A-Z])/g, ' $1').replace('Adjustments', '').trim();
                return (
                  <div key={key}>
                    <p className="font-bold text-foreground">{sectionName}</p>
                    <p className="text-muted-foreground">{value}</p>
                  </div>
                )
              })}
            </CardContent>
          </Card>
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
