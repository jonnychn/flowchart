import type { Node, XYPosition } from "reactflow"
import type { NodeData } from "./types"

let nodeIdCounter = 0

export const generateNodeId = (type: string): string => {
  nodeIdCounter++
  return `${type}-${nodeIdCounter}`
}

export const createNode = ({
  type,
  position,
  id,
}: {
  type: string
  position: XYPosition
  id: string
}): Node<NodeData> => {
  const baseNode = {
    id,
    type,
    position,
    data: {
      label: getDefaultLabel(type),
      description: getDefaultDescription(type),
    },
  }

  switch (type) {
    case "start":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
        },
      }
    case "end":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
        },
      }
    case "input":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
          dataSource: "manual",
          sampleData: '{"example": "data"}',
        },
      }
    case "output":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
          outputType: "console",
          outputFormat: "json",
        },
      }
    case "process":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
          processType: "transform",
          processConfig: '{"operation": "map"}',
        },
      }
    case "conditional":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
          condition: "data.value > 0",
          trueLabel: "Yes",
          falseLabel: "No",
        },
      }
    case "decision":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
          condition: "data.value > 0",
          trueLabel: "Yes",
          falseLabel: "No",
        },
      }
    case "connector":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
        },
      }
    case "preparation":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
        },
      }
    case "manual":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
        },
      }
    case "document":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
        },
      }
    case "code":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
          codeLanguage: "javascript",
          code: "// Write your code here\nfunction process(data) {\n  // Transform data\n  return data;\n}",
        },
      }
    case "sticky":
      return {
        ...baseNode,
        data: {
          ...baseNode.data,
          noteContent: "Add your comments or feedback here...",
          author: "",
        },
      }
    default:
      return baseNode
  }
}

const getDefaultLabel = (type: string): string => {
  switch (type) {
    case "start":
      return "Start"
    case "end":
      return "End"
    case "input":
      return "Input/Output"
    case "output":
      return "Output"
    case "process":
      return "Process"
    case "conditional":
      return "Conditional"
    case "decision":
      return "Decision"
    case "connector":
      return "Connector"
    case "preparation":
      return "Preparation"
    case "manual":
      return "Manual Operation"
    case "document":
      return "Document"
    case "code":
      return "Code"
    case "sticky":
      return "Sticky Note"
    default:
      return "Node"
  }
}

const getDefaultDescription = (type: string): string => {
  switch (type) {
    case "start":
      return "Start terminal"
    case "end":
      return "End terminal"
    case "input":
      return "Data input/output"
    case "output":
      return "Data output node"
    case "process":
      return "Process/Action step"
    case "conditional":
      return "Conditional branching"
    case "decision":
      return "Decision point"
    case "connector":
      return "Connect flowchart parts"
    case "preparation":
      return "Setup/Initialization"
    case "manual":
      return "Human intervention required"
    case "document":
      return "Documents or reports"
    case "code":
      return "Custom code execution"
    case "sticky":
      return "Comments and feedback"
    default:
      return "Workflow node"
  }
}
