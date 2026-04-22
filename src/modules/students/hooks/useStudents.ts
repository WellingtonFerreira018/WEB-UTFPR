"use client"

import { useState } from "react"
import { Grade, Student } from "../types/student"
import { filterByGrade, getAllStudents, getAverageAge } from "../services/studentsService"

export function useStudents() {
  const [students, setStudents] = useState<Student[]>(getAllStudents())
  const [selectedGrade, setSelectedGrade] = useState<Grade | "ALL">("ALL")

  const filteredStudents = filterByGrade(students, selectedGrade)

  const enrolledCount = students.filter((s) => s.enrolled).length
  const averageAge = getAverageAge(students)

  function deleteStudent(id: number) {
    setStudents((prev) => prev.filter((s) => s.id !== id))
  }

  function toggleEnrollment(id: number) {
    setStudents((prev) =>
      prev.map((s) => (s.id === id ? { ...s, enrolled: !s.enrolled } : s))
    )
  }

  function handleGradeChange(grade: Grade | "ALL") {
    setSelectedGrade(grade)
  }

  return {
    students: filteredStudents,
    total: students.length,
    enrolledCount,
    averageAge,
    selectedGrade,
    deleteStudent,
    toggleEnrollment,
    handleGradeChange,
  }
}
