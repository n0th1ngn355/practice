import { supabase } from '../../../lib/supabaseClient';
import Link from 'next/link';
import MyForm from './form';
export const revalidate = 0;

export default async function Page({ params }) {
  let { data } = await supabase.from('employee').select().eq('id', params.id);

  return (
    <div className="flex min-h-screen flex-col p-8">
      <Link href="/example">← Назад</Link>
      
      <MyForm rowId={params.id} value={data[0].name}></MyForm>
    </div>
  )
}