"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Database, FileOutput, GitBranch, Code, Settings, Workflow } from "lucide-react"

const nodeTypes = [
  {
    type: "start",
    label: "Start",
    description: "Start terminal",
    icon: <Database className="h-4 w-4 mr-2" />,
  },
  {
    type: "end",
    label: "End",
    description: "End terminal",
    icon: <FileOutput className="h-4 w-4 mr-2" />,
  },
  {
    type: "process",
    label: "Process",
    description: "Process/Action step",
    icon: <Settings className="h-4 w-4 mr-2" />,
  },
  {
    type: "decision",
    label: "Decision",
    description: "Decision point (Yes/No)",
    icon: <GitBranch className="h-4 w-4 mr-2" />,
  },
  {
    type: "input",
    label: "Input/Output",
    description: "Data input/output",
    icon: <Database className="h-4 w-4 mr-2" />,
  },
  {
    type: "connector",
    label: "Connector",
    description: "Connect flowchart parts",
    icon: <Workflow className="h-4 w-4 mr-2" />,
  },
  {
    type: "preparation",
    label: "Preparation",
    description: "Setup/Initialization",
    icon: <Settings className="h-4 w-4 mr-2" />,
  },
  {
    type: "manual",
    label: "Manual Operation",
    description: "Human intervention required",
    icon: <Code className="h-4 w-4 mr-2" />,
  },
  {
    type: "document",
    label: "Document",
    description: "Documents or reports",
    icon: <FileOutput className="h-4 w-4 mr-2" />,
  },
  {
    type: "sticky",
    label: "Sticky Note",
    description: "Comments and feedback",
    icon: <FileOutput className="h-4 w-4 mr-2" />,
  },
]

export default function NodeLibrary() {
  const onDragStart = (event: React.DragEvent<HTMLButtonElement>, nodeType: string) => {
    event.dataTransfer.setData("application/reactflow", nodeType)
    event.dataTransfer.effectAllowed = "move"
  }

  return (
    <div className="flex flex-col gap-2">
      {nodeTypes.map((node) => (
        <Button
          key={node.type}
          variant="outline"
          className={`justify-start text-left`}
          draggable
          onDragStart={(e) => onDragStart(e, node.type)}
        >
          {node.icon}
          <div className="flex flex-col items-start">
            <span>{node.label}</span>
            <span className="text-xs text-gray-500">{node.description}</span>
          </div>
        </Button>
      ))}
      <div className="mt-4 text-xs text-gray-500">Drag and drop nodes onto the canvas to build your workflow</div>
    </div>
  )
}
