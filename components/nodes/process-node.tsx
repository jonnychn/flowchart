"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "@xyflow/react"
import { Settings } from "lucide-react"
import type { NodeData } from "@/lib/types"

export const ProcessNode = memo(({ data, isConnectable }: NodeProps<NodeData>) => {
  return (
    <div className="relative">
      {/* Rectangle shape */}
      <div className="px-6 py-4 shadow-md bg-blue-100 border-2 border-blue-500 min-w-[150px] min-h-[80px] flex items-center justify-center">
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Settings className="h-4 w-4 mr-2 text-blue-600" />
            <div className="text-sm font-bold text-blue-800">{data.label || "Process"}</div>
          </div>
          {data.description && <div className="text-xs text-blue-600">{data.description}</div>}
          {data.processType && <div className="mt-1 text-xs bg-blue-50 p-1 rounded">Type: {data.processType}</div>}
        </div>
      </div>

      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-3 h-3 bg-blue-500" />
      <Handle type="source" position={Position.Bottom} isConnectable={isConnectable} className="w-3 h-3 bg-blue-500" />
    </div>
  )
})

ProcessNode.displayName = "ProcessNode"
