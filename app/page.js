import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link className='hover:bg-[#46464677]' href="example">Посмотреть записи</Link>
    </main>
  )
}
