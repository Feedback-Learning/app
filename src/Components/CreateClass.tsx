import { useState } from 'react';
import { useSession, useSupabaseClient, useUser } from "@supabase/auth-helpers-react";



function CreateClass() {
    let supabaseClient = useSupabaseClient();

    const [ className, setClassName ] = useState<string>()
    const user = useUser();

    async function SubmitClass() {
        await supabaseClient.from( "classes" ).insert( {"owner": user?.id, "name": className} );
    }

    return (
        <div>
            <label>Enter Class Name</label>
            <input type="text" onChange = { (event) => {
                setClassName(event.target.value);
            }}></input>
            <div className="submit-btn" onClick= { SubmitClass }>Create Class</div>
        </div>
    )
}

export default CreateClass;