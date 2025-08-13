"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "@xyflow/react"
import { Play } from "lucide-react"
import type { NodeData } from "@/lib/types"

export const StartNode = memo(({ data, isConnectable }: NodeProps<NodeData>) => {
  return (
    <div className="relative">
      {/* Oval/Ellipse shape */}
      <div className="px-6 py-4 shadow-md rounded-full bg-green-100 border-2 border-green-500 min-w-[120px] text-center">
        <div className="flex items-center justify-center">
          <Play className="h-4 w-4 mr-2 text-green-600" />
          <div>
            <div className="text-sm font-bold text-green-800">{data.label || "Start"}</div>
            {data.description && <div className="text-xs text-green-600">{data.description}</div>}
          </div>
        </div>
      </div>

      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} className="w-3 h-3 bg-green-500" />
    </div>
  )
})

StartNode.displayName = "StartNode"
