"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "reactflow"
import { Square } from "lucide-react"
import type { NodeData } from "@/lib/types"

export const EndNode = memo(({ data, isConnectable }: NodeProps<NodeData>) => {
  return (
    <div className="relative">
      {/* Oval/Ellipse shape */}
      <div className="px-6 py-4 shadow-md rounded-full bg-red-100 border-2 border-red-500 min-w-[120px] text-center">
        <div className="flex items-center justify-center">
          <Square className="h-4 w-4 mr-2 text-red-600" />
          <div>
            <div className="text-sm font-bold text-red-800">{data.label || "End"}</div>
            {data.description && <div className="text-xs text-red-600">{data.description}</div>}
          </div>
        </div>
      </div>

      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-3 h-3 bg-red-500" />
    </div>
  )
})

EndNode.displayName = "EndNode"
