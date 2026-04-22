"use client"

import Counter from "../components/Counter"
import GradeFilter from "../components/GradeFilter"
import StudentList from "../components/StudentList"
import StudentStats from "../components/StudentStats"
import { useStudents } from "../hooks/useStudents"

/**
 * Tela principal do módulo de Alunos.
 *
 * Demonstra o FLUXO DE DADOS UNIDIRECIONAL do slide:
 *
 *   StudentsScreen (Pai — gerencia estado via useStudents)
 *     ├─ StudentStats    ← recebe props computadas (dados descem)
 *     ├─ GradeFilter     ← recebe selectedGrade + onChange (lifting state up)
 *     ├─ Counter         ← estado interno próprio (estado local)
 *     └─ StudentList     ← recebe students[] + callbacks (dados descem, eventos sobem)
 *          └─ StudentCard ← recebe student + callbacks propagados
 *               └─ GradeBadge ← recebe grade (prop simples, folha da árvore)
 */
export default function StudentsScreen() {
  const {
    students,
    total,
    enrolledCount,
    averageAge,
    selectedGrade,
    deleteStudent,
    toggleEnrollment,
    handleGradeChange,
  } = useStudents()

  return (
    <div className="min-h-screen bg-zinc-50">
      <header className="bg-white border-b border-zinc-200 px-6 py-5">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs text-zinc-400 uppercase tracking-widest mb-1">
            React · Props, Estado e Estruturação de Componentes
          </p>
          <h1 className="text-2xl font-bold text-zinc-800">
            Gerenciamento de Alunos
          </h1>
          <p className="text-sm text-zinc-500 mt-1">
            Exemplo prático demonstrando props, useState, callbacks e fluxo de
            dados unidirecional
          </p>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-8 flex flex-col gap-8">
        {/* SEÇÃO 1: Props com dados computados → StudentStats */}
        <section>
          <SectionHeader
            number="01"
            title="Props — Dados Descem"
            description="StudentStats recebe total, enrolled e averageAge como props. Dados computados no pai fluem para o filho via props (imutáveis no filho)."
          />
          <StudentStats
            total={total}
            enrolled={enrolledCount}
            averageAge={averageAge}
          />
        </section>

        {/* SEÇÃO 2: useState interno → Counter */}
        <section>
          <SectionHeader
            number="02"
            title="useState — Estado Local"
            description="O Counter gerencia seu próprio estado interno com useState. A configuração (label, min, max, step) vem via props; o valor atual é estado local."
          />
          <div className="max-w-xs">
            <Counter
              label="Contador de Sessão"
              initialValue={0}
              min={0}
              max={20}
              step={1}
            />
          </div>
        </section>

        {/* SEÇÃO 3: Lifting State Up → GradeFilter */}
        <section>
          <SectionHeader
            number="03"
            title="Lifting State Up — Eventos Sobem"
            description="O filtro de nota não guarda estado próprio. O estado selectedGrade vive aqui (pai) e desce via prop. O evento onChange sobe via callback quando o usuário clica."
          />
          <GradeFilter
            selectedGrade={selectedGrade}
            onChange={handleGradeChange}
          />
        </section>

        {/* SEÇÃO 4: Composição e propagação de callbacks → StudentList */}
        <section>
          <SectionHeader
            number="04"
            title="Composição — Árvore de Componentes"
            description={`Exibindo ${students.length} aluno(s). StudentList recebe o array filtrado e propaga os callbacks onDelete e onToggleEnrollment para cada StudentCard.`}
          />
          <StudentList
            students={students}
            onDelete={deleteStudent}
            onToggleEnrollment={toggleEnrollment}
          />
        </section>
      </main>
    </div>
  )
}

interface SectionHeaderProps {
  number: string
  title: string
  description: string
}

function SectionHeader({ number, title, description }: SectionHeaderProps) {
  return (
    <div className="flex gap-4 items-start mb-4">
      <span className="text-xs font-bold text-zinc-400 bg-zinc-100 px-2 py-1 rounded-md mt-0.5 shrink-0">
        {number}
      </span>
      <div>
        <h2 className="text-base font-semibold text-zinc-700">{title}</h2>
        <p className="text-sm text-zinc-400 mt-0.5">{description}</p>
      </div>
    </div>
  )
}
