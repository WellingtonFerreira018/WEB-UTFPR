import { StudentStatsProps } from "../types/student"

/**
 * Componente de estatísticas.
 * Demonstra:
 *  - Props como dados derivados (computados no pai, exibidos no filho)
 *  - Responsabilidade única: apenas apresentação de métricas
 *  - Múltiplas props com desestruturação
 */
export default function StudentStats({ total, enrolled, averageAge }: StudentStatsProps) {
  const inactive = total - enrolled
  const enrollmentRate = total > 0 ? Math.round((enrolled / total) * 100) : 0

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      <StatCard label="Total de Alunos" value={total} unit="alunos" color="zinc" />
      <StatCard label="Matriculados" value={enrolled} unit="ativos" color="emerald" />
      <StatCard label="Inativos" value={inactive} unit="alunos" color="orange" />
      <StatCard label="Taxa de Matrícula" value={`${enrollmentRate}%`} unit={`Média: ${averageAge} anos`} color="blue" />
    </div>
  )
}

interface StatCardProps {
  label: string
  value: number | string
  unit: string
  color: "zinc" | "emerald" | "orange" | "blue"
}

const colorMap = {
  zinc: "bg-zinc-50 border-zinc-200 text-zinc-700",
  emerald: "bg-emerald-50 border-emerald-200 text-emerald-700",
  orange: "bg-orange-50 border-orange-200 text-orange-700",
  blue: "bg-blue-50 border-blue-200 text-blue-700",
}

function StatCard({ label, value, unit, color }: StatCardProps) {
  return (
    <div className={`rounded-xl border p-4 ${colorMap[color]}`}>
      <p className="text-xs font-medium opacity-70 mb-1">{label}</p>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-xs opacity-60 mt-0.5">{unit}</p>
    </div>
  )
}
