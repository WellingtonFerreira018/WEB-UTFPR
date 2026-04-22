import { GradeBadgeProps } from "../types/student"

const gradeConfig = {
  A: { label: "A", bg: "bg-emerald-100", text: "text-emerald-700", border: "border-emerald-300" },
  B: { label: "B", bg: "bg-blue-100", text: "text-blue-700", border: "border-blue-300" },
  C: { label: "C", bg: "bg-yellow-100", text: "text-yellow-700", border: "border-yellow-300" },
  D: { label: "D", bg: "bg-orange-100", text: "text-orange-700", border: "border-orange-300" },
  F: { label: "F", bg: "bg-red-100", text: "text-red-700", border: "border-red-300" },
}

/**
 * Componente que recebe uma única prop `grade` e exibe um badge colorido.
 * Demonstra: props simples, desestruturação e componente com responsabilidade única.
 */
export default function GradeBadge({ grade }: GradeBadgeProps) {
  const config = gradeConfig[grade]

  return (
    <span
      className={`inline-flex items-center justify-center w-8 h-8 rounded-full border font-bold text-sm ${config.bg} ${config.text} ${config.border}`}
    >
      {config.label}
    </span>
  )
}
