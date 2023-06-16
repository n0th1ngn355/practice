import { supabase } from '../../lib/supabaseClient';
import Link from 'next/link'

export const revalidate = 30;
export default async function  Page() {
  let { data } = await supabase.from('employee').select()

  return (
    <div className="flex min-h-screen flex-col">
      <h1 className="text-center">Я идиот</h1>
      <ol className="col-6 m-auto my-2">
        {data.map((emp) => (
          <p className=" bg-cyan-600 rounded-md" key={emp.id}>
          {/* <li className=" bg-cyan-600 rounded-md" key={emp.id}>{emp.name}</li> */}
          <Link href={`/users/${emp.id}`}>{emp.name}</Link>
        </p>
        ))}
      </ol>
    </div>
  );
}