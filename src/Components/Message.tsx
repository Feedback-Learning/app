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

  return <div className="messageContainer">
    <div className="messageBodyContainer">
      <div className="messageMetadata">
        <span className="bold">
          {(props.message.user as unknown as any).name}
        </span>
        <span className="pronouns">
          {(props.message.user as unknown as any).pronouns}
        </span>
        <span className="timestamp">
          {new Date(props.message.created_at as string).toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })}
        </span>
      </div>
      <div className="messageContent">
        {props.message.content}
      </div>
    </div>
  </div>
}

export default Message;