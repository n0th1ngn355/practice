'use client'
import { supabase } from '../../../lib/supabaseClient';
import { useState } from "react"

export default function MyForm({rowId, value}){
    const [val, setVal] = useState(value);
    async function update(){
        try {
            const { data, error } = await supabase.from('employee')
            .upsert({ id:rowId, name: val })
            if (error) throw error
            alert('Profile updated!')
          } catch (error) {
            alert('Error updating the data!')
          } finally {
            location.href='/example'
          }

    }
    return (
        <form method="POST" onSubmit={update} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm font-semibold leading-6 ">
              Name
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="name"
                id="name"
                autoComplete="off"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" value={val}
                onChange={(ev)=>setVal(ev.target.value)}
              />
            </div>
          </div>

        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Сохранить
          </button>
        </div>
      </form>
    )
    
}