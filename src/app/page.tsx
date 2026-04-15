import Link from "next/link"

export default function Home() {
  return (
    <main>
      <div className="h-screen flex flex-col gap-4 justify-center items-center">
        <h1 className="bg-zinc-100 p-4 rounded-lg">Olá, Mundo!</h1>
        <Link href={"/about"}>Pagina - Sobre</Link>
      </div>
    </main>
  )
}
