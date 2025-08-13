"use client"

import { memo } from "react"
import type { NodeProps } from "reactflow"
import { StickyNote } from "lucide-react"
import type { NodeData } from "@/lib/types"

export const StickyNoteNode = memo(({ data }: NodeProps<NodeData>) => {
  return (
    <div className="relative">
      {/* Sticky note shape with shadow and curl effect */}
      <div className="relative">
        {/* Main sticky note body */}
        <div
          className="px-4 py-3 bg-yellow-200 border border-yellow-300 min-w-[180px] min-h-[120px] shadow-md"
          style={{
            background: "linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)",
            transform: "rotate(-1deg)",
          }}
        >
          {/* Folded corner effect */}
          <div
            className="absolute top-0 right-0 w-6 h-6 bg-yellow-300 border-l border-b border-yellow-400"
            style={{
              clipPath: "polygon(0% 0%, 100% 100%, 0% 100%)",
              transform: "rotate(45deg) translate(3px, -3px)",
            }}
          />

          {/* Content area */}
          <div className="relative z-10">
            <div className="flex items-center mb-2">
              <StickyNote className="h-4 w-4 mr-2 text-yellow-700" />
              <div className="text-sm font-bold text-yellow-800">{data.label || "Sticky Note"}</div>
            </div>

            {/* Note content */}
            <div className="text-xs text-yellow-800 leading-relaxed">
              {data.noteContent || "Add your comments or feedback here..."}
            </div>

            {/* Author signature if provided */}
            {data.author && (
              <div className="mt-2 text-xs text-yellow-700 italic border-t border-yellow-300 pt-1">- {data.author}</div>
            )}
          </div>
        </div>

        {/* Drop shadow */}
        <div
          className="absolute top-1 left-1 w-full h-full bg-gray-400 opacity-20 -z-10"
          style={{ transform: "rotate(-1deg)" }}
        />
      </div>
    </div>
  )
})

StickyNoteNode.displayName = "StickyNoteNode"
