"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "@xyflow/react"
import { Settings } from "lucide-react"
import type { NodeData } from "@/lib/types"

export const PreparationNode = memo(({ data, isConnectable }: NodeProps<NodeData>) => {
  return (
    <div className="relative">
      {/* Hexagon shape */}
      <div
        className="px-6 py-4 shadow-md bg-orange-100 border-2 border-orange-500 min-w-[150px] min-h-[80px] flex items-center justify-center"
        style={{ clipPath: "polygon(20% 0%, 80% 0%, 100% 50%, 80% 100%, 20% 100%, 0% 50%)" }}
      >
        <div className="text-center">
          <div className="flex items-center justify-center mb-1">
            <Settings className="h-4 w-4 mr-2 text-orange-600" />
            <div className="text-sm font-bold text-orange-800">{data.label || "Preparation"}</div>
          </div>
          {data.description && <div className="text-xs text-orange-600">{data.description}</div>}
        </div>
      </div>

      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-3 h-3 bg-orange-500" />
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-orange-500"
      />
    </div>
  )
})

PreparationNode.displayName = "PreparationNode"
