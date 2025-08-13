"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "@xyflow/react"
import type { NodeData } from "@/lib/types"

export const ConnectorNode = memo(({ data, isConnectable }: NodeProps<NodeData>) => {
  return (
    <div className="relative">
      {/* Circle shape */}
      <div className="w-12 h-12 rounded-full bg-gray-100 border-2 border-gray-500 shadow-md flex items-center justify-center">
        <div className="text-xs font-bold text-gray-700">{data.label || "C"}</div>
      </div>

      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-3 h-3 bg-gray-500" />
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} className="w-3 h-3 bg-gray-500" />
      <Handle type="target" position={Position.Left} isConnectable={isConnectable} className="w-3 h-3 bg-gray-500" />
      <Handle type="source" position={Position.Right} isConnectable={isConnectable} className="w-3 h-3 bg-gray-500" />
    </div>
  )
})

ConnectorNode.displayName = "ConnectorNode"
