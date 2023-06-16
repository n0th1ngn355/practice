import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link'
export const revalidate = 30;

export default async function  Page() {
    let { data } = await supabase.from('employee').select()

  return (
    <div className="flex min-h-screen flex-col p-8">
      <Link href="/">← Назад</Link>
    <ul role="list" className="w-1/2 m-auto">
      {data.map((person) => (
       <Link href={`/example/${person.id}`} key={person.id} className="flex justify-between gap-x-6 py-5 hover:bg-[#46464677] rounded-2xl">
          <div className="flex gap-x-4">
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src='{person.imageUrl}'/>
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 ">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">person.email</p>
            </div>
          </div>
        </Link>
      ))}
    </ul>   
    </div>
  );
}