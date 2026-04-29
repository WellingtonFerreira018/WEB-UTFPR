"use client"

import Link from "next/link"
import { useEffect, useState } from "react"

export default function Contact() {
  const [id, setId] = useState(1)

  useEffect(() => {
    console.log(`Olá estou aqui contato ${id}.`)
  }, [id])

  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">Contato</h1>

      <Link className="border p-4 rounded-2xl" href={`/contact/${id}`}>
        Ir para o contato {id}
      </Link>

      <button
        className="border rounded-2xl p-4 cursor-pointer"
        onClick={() => setId(id + 1)}
      >
        Novo contato
      </button>
    </div>
  )
}
