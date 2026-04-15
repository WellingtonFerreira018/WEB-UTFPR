import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl font-bold">404 | Pagina não encontrada</h2>
      <p className="text-gray-500">Volte para a pagina pricipal</p>
      <Link href="/" className="text-blue-500">
        Return Home
      </Link>
    </div>
  )
}
