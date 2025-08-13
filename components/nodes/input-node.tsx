"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "reactflow"
import { Database } from "lucide-react"
import type { NodeData } from "@/lib/types"

export const InputNode = memo(({ data, isConnectable }: NodeProps<NodeData>) => {
  return (
    <div className="relative">
      {/* Parallelogram shape */}
      <div
        className="px-6 py-4 shadow-md bg-purple-100 border-2 border-purple-500 min-w-[150px] min-h-[80px] flex items-center justify-center"
        style={{
          clipPath: "polygon(15% 0%, 100% 0%, 85% 100%, 0% 100%)",
          transform: "skew(-15deg)",
        }}
      >
        <div className="text-center" style={{ transform: "skew(15deg)" }}>
          <div className="flex items-center justify-center mb-1">
            <Database className="h-4 w-4 mr-2 text-purple-600" />
            <div className="text-sm font-bold text-purple-800">{data.label || "Input/Output"}</div>
          </div>
          {data.description && <div className="text-xs text-purple-600">{data.description}</div>}
          {data.dataSource && <div className="mt-1 text-xs bg-purple-50 p-1 rounded">Source: {data.dataSource}</div>}
        </div>
      </div>

      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-3 h-3 bg-purple-500" />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-purple-500"
      />
    </div>
  )
})

InputNode.displayName = "InputNode"
