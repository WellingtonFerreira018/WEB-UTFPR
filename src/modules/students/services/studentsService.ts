import { Grade, Student } from "../types/student"

const studentsData: Student[] = [
  {
    id: 1,
    name: "Maria",
    surname: "Silva",
    age: 20,
    grade: "A",
    enrolled: true,
    course: "Desenvolvimento Web",
  },
  {
    id: 2,
    name: "João",
    surname: "Oliveira",
    age: 22,
    grade: "B",
    enrolled: true,
    course: "Engenharia de Software",
  },
  {
    id: 3,
    name: "Ana",
    surname: "Costa",
    age: 19,
    grade: "A",
    enrolled: false,
    course: "Sistemas de Informação",
  },
  {
    id: 4,
    name: "Carlos",
    surname: "Santos",
    age: 24,
    grade: "C",
    enrolled: true,
    course: "Desenvolvimento Web",
  },
  {
    id: 5,
    name: "Beatriz",
    surname: "Lima",
    age: 21,
    grade: "B",
    enrolled: true,
    course: "Engenharia de Software",
  },
  {
    id: 6,
    name: "Lucas",
    surname: "Ferreira",
    age: 23,
    grade: "D",
    enrolled: false,
    course: "Sistemas de Informação",
  }
]

export function getAllStudents(): Student[] {
  return studentsData
}

export function getStudentById(id: number): Student | undefined {
  return studentsData.find((student) => student.id === id)
}

export function filterByGrade(students: Student[], grade: Grade | "ALL"): Student[] {
  if (grade === "ALL") return students
  return students.filter((student) => student.grade === grade)
}

export function getAverageAge(students: Student[]): number {
  if (students.length === 0) return 0
  const total = students.reduce((sum, s) => sum + s.age, 0)
  return Math.round(total / students.length)
}
