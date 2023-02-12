import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { useEffect, useState } from "react";
import { Database } from "./database";

type Message = Database['public']['Tables']['messages']['Row']

function Message(props: { message: Message }) {
  const user = useUser()
  const supabase = useSupabaseClient()
  const [isUpvoted, setIsUpvoted] = useState<boolean>()

  async function updateUpvote() {
    try { 
      if (!user) return
      const { data, error, status } = await supabase.from('upvotes').select('*').eq('message', props.message.id).eq('user', user.id);

      if (error && status !== 406) {
        throw error;
      }

      if (data?.length != 0) {
        const feedback = await supabase.from('upvotes').delete().eq('message', props.message.id).eq('user', user.id)
        setIsUpvoted(false)
      } else {
        await supabase.from('upvotes').insert({
          message: props.message.id,
          user: user.id
        })
        setIsUpvoted(true)
      }
    } catch (error) {
      alert(`Error: ${JSON.stringify(error)}`)
    } finally {
    }
  }

  return <div className="w-full h-fit bg-white rounded-3xl flex flex-row px-3 py-3 text-lg shadow-md">
    {/*<div className="h-full aspect-square flex justify-center items-center text-5xl" onClick={() => { updateUpvote() } }>
      <svg fill={isUpvoted ? "rgb(255, 132, 0)" : "rgba(0,0,0,0.1)"} className="h-4/5 aspect-square translate-y-1 stroke-slate-300" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 15h14l-7-8z"/>
      </svg>
</div>*/}
    <div className="flex flex-col w-full h-full">
      <div className="block w-full h-full">
        <span className="font-bold">
          {(props.message.user as unknown as any).name}
        </span>
        <span className="italic ml-2 font-thin text-base">
          {(props.message.user as unknown as any).pronouns}
        </span>
        <span className="ml-2 text-base font-thin float-right">
          {new Date(props.message.created_at as string).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
        </span>
      </div>
      <div>
        {props.message.content}
      </div>
    </div>
  </div>
}

export default Message;