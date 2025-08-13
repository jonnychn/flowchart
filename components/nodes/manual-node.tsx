"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "reactflow"
import { User } from "lucide-react"
import type { NodeData } from "@/lib/types"

export const ManualNode = memo(({ data, isConnectable }: NodeProps<NodeData>) => {
  return (
    <div className="relative">
      {/* Trapezoid shape */}
      <div
        className="px-6 py-4 shadow-md bg-yellow-100 border-2 border-yellow-500 min-w-[150px] min-h-[80px] flex items-center justify-center"
        style={{ clipPath: "polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)" }}
      >
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <User className="h-4 w-4 mr-2 text-yellow-600" />
            <div className="text-sm font-bold text-yellow-800">{data.label || "Manual"}</div>
          </div>
          {data.description && <div className="text-xs text-yellow-600">{data.description}</div>}
        </div>
      </div>

      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-3 h-3 bg-yellow-500" />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-yellow-500"
      />
    </div>
  )
})

ManualNode.displayName = "ManualNode"
