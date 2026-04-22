import { StudentCardProps } from "../types/student"
import GradeBadge from "./GradeBadge"

/**
 * Componente de cartão de aluno.
 * Demonstra:
 *  - Desestruturação de props no parâmetro da função
 *  - Props são somente leitura (não modificamos o objeto student)
 *  - Composição de componentes (usa GradeBadge)
 *  - Callbacks: onDelete e onToggleEnrollment sobem eventos para o pai
 */
export default function StudentCard({ student, onDelete, onToggleEnrollment }: StudentCardProps) {
  const { id, name, surname, age, grade, enrolled, course } = student

  return (
    <div className="bg-white border border-zinc-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col gap-3">
      <div className="flex items-start justify-between gap-2">
        <div>
          <h3 className="font-semibold text-zinc-800 text-base">
            {name} {surname}
          </h3>
          <p className="text-sm text-zinc-500">{course}</p>
        </div>
        <GradeBadge grade={grade} />
      </div>

      <div className="flex items-center gap-3 text-sm text-zinc-600">
        <span>
          <span className="font-medium">Idade:</span> {age} anos
        </span>
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-medium ${
            enrolled
              ? "bg-emerald-100 text-emerald-700"
              : "bg-zinc-100 text-zinc-500"
          }`}
        >
          {enrolled ? "Matriculado" : "Inativo"}
        </span>
      </div>

      <div className="flex gap-2 pt-1 border-t border-zinc-100">
        <button
          onClick={() => onToggleEnrollment(id)}
          className="flex-1 text-xs py-1.5 rounded-lg border border-zinc-300 text-zinc-600 hover:bg-zinc-50 transition-colors"
        >
          {enrolled ? "Desativar" : "Reativar"}
        </button>
        <button
          onClick={() => onDelete(id)}
          className="flex-1 text-xs py-1.5 rounded-lg border border-red-200 text-red-500 hover:bg-red-50 transition-colors"
        >
          Remover
        </button>
      </div>
    </div>
  )
}
