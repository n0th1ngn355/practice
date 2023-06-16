import { supabase } from '../../../lib/supabaseClient';

export default async function  Page({ params }) {
  let { data } = await supabase.from('employee').select().eq('id', params.id)

  return (
    <div className="flex flex-col">
      <h1 className="text-center">Я идиот</h1>
      <h2 className=" bg-cyan-600 rounded-md" key={data[0]?.id}>{data[0]?.name}</h2>
    </div>
  );
}