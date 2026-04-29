export default async function ContactDynamic({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  return (
    <div className="flex justify-center font-bold text-5xl items-center h-screen">
      Contato - {slug}
    </div>
  )
}
