"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "reactflow"
import { FileText } from "lucide-react"
import type { NodeData } from "@/lib/types"

export const DocumentNode = memo(({ data, isConnectable }: NodeProps<NodeData>) => {
  return (
    <div className="relative">
      {/* Document shape with wavy bottom */}
      <div className="relative px-6 py-4 shadow-md bg-indigo-100 border-2 border-indigo-500 min-w-[150px] min-h-[80px] flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <FileText className="h-4 w-4 mr-2 text-indigo-600" />
            <div className="text-sm font-bold text-indigo-800">{data.label || "Document"}</div>
          </div>
          {data.description && <div className="text-xs text-indigo-600">{data.description}</div>}
        </div>

        {/* Wavy bottom border */}
        <svg className="absolute bottom-0 left-0 w-full h-3" viewBox="0 0 150 12" preserveAspectRatio="none">
          <path
            d="M0,12 Q37.5,0 75,6 Q112.5,12 150,6 L150,12 Z"
            fill="rgb(165 180 252)"
            stroke="rgb(99 102 241)"
            strokeWidth="2"
          />
        </svg>
      </div>

      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-3 h-3 bg-indigo-500" />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-indigo-500"
      />
    </div>
  )
})

DocumentNode.displayName = "DocumentNode"
