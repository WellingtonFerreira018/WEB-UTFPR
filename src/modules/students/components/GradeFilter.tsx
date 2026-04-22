import { Grade, GradeFilterProps } from "../types/student"

const grades: Array<Grade | "ALL"> = ["ALL", "A", "B", "C", "D", "F"]

const labelMap: Record<Grade | "ALL", string> = {
  ALL: "Todas",
  A: "Nota A",
  B: "Nota B",
  C: "Nota C",
  D: "Nota D",
  F: "Nota F",
}

/**
 * Componente de filtro por nota.
 * Demonstra:
 *  - Lifting State Up: o estado do filtro vive no pai (StudentsScreen)
 *  - Callback via prop `onChange`: eventos sobem, dados descem
 *  - Props `selectedGrade` controlam o estado visual (componente controlado)
 */
export default function GradeFilter({ selectedGrade, onChange }: GradeFilterProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {grades.map((grade) => (
        <button
          key={grade}
          onClick={() => onChange(grade)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
            selectedGrade === grade
              ? "bg-zinc-800 text-white border-zinc-800"
              : "bg-white text-zinc-600 border-zinc-300 hover:border-zinc-400"
          }`}
        >
          {labelMap[grade]}
        </button>
      ))}
    </div>
  )
}
