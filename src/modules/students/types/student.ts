export type Grade = "A" | "B" | "C" | "D" | "F"

export interface Student {
  id: number
  name: string
  surname: string
  age: number
  grade: Grade
  enrolled: boolean
  course: string
}

export interface StudentCardProps {
  student: Student
  onDelete: (id: number) => void
  onToggleEnrollment: (id: number) => void
}

export interface StudentListProps {
  students: Student[]
  onDelete: (id: number) => void
  onToggleEnrollment: (id: number) => void
}

export interface StudentStatsProps {
  total: number
  enrolled: number
  averageAge: number
}

export interface GradeFilterProps {
  selectedGrade: Grade | "ALL"
  onChange: (grade: Grade | "ALL") => void
}

export interface GradeBadgeProps {
  grade: Grade
}

export interface CounterProps {
  label: string
  initialValue?: number
  min?: number
  max?: number
  step?: number
}
