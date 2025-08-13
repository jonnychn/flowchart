"use client"

import { memo } from "react"
import { Handle, Position, type NodeProps } from "reactflow"
import { GitBranch } from "lucide-react"
import type { NodeData } from "@/lib/types"

export const DecisionNode = memo(({ data, isConnectable }: NodeProps<NodeData>) => {
  return (
    <div className="relative">
      {/* Diamond/Rhombus shape */}
      <div
        className="w-32 h-32 bg-amber-100 border-2 border-amber-500 shadow-md transform rotate-45 flex items-center justify-center"
        style={{ clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)" }}
      >
        <div className="transform -rotate-45 text-center">
          <GitBranch className="h-4 w-4 mx-auto mb-1 text-amber-600" />
          <div className="text-xs font-bold text-amber-800">{data.label || "Decision"}</div>
        </div>
      </div>

      {/* Condition text below diamond */}
      {data.condition && (
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs bg-white p-1 rounded border shadow-sm whitespace-nowrap">
          {data.condition}
        </div>
      )}

      {/* Labels for Yes/No paths */}
      <div className="absolute -bottom-8 left-0 text-xs text-green-600 font-medium">{data.trueLabel || "Yes"}</div>
      <div className="absolute -bottom-8 right-0 text-xs text-red-600 font-medium">{data.falseLabel || "No"}</div>

      <Handle type="target" position={Position.Top} isConnectable={isConnectable} className="w-3 h-3 bg-amber-500" />
      <Handle
        type="source"
        position={Position.Bottom}
        id="true"
        style={{ left: "25%" }}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-green-500"
      />
      <Handle
        type="source"
        position={Position.Bottom}
        id="false"
        style={{ left: "75%" }}
        isConnectable={isConnectable}
        className="w-3 h-3 bg-red-500"
      />
    </div>
  )
})

DecisionNode.displayName = "DecisionNode"
