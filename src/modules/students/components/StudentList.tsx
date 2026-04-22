import { StudentListProps } from "../types/student"
import StudentCard from "./StudentCard"

/**
 * Componente de lista de alunos.
 * Demonstra:
 *  - Props com array: recebe students[] do componente pai
 *  - Propagação de callbacks: repassa onDelete e onToggleEnrollment para StudentCard
 *  - Renderização condicional: exibe mensagem quando lista está vazia
 *  - Composição: usa StudentCard para cada item
 */
export default function StudentList({ students, onDelete, onToggleEnrollment }: StudentListProps) {
  if (students.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center text-zinc-400">
        <span className="text-4xl mb-3">🎓</span>
        <p className="text-sm">Nenhum aluno encontrado para este filtro.</p>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {students.map((student) => (
        <StudentCard
          key={student.id}
          student={student}
          onDelete={onDelete}
          onToggleEnrollment={onToggleEnrollment}
        />
      ))}
    </div>
  )
}
