import { Dispatch, useState } from 'react';
import { useSession, useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import Button from './Button';



function CreateClass(props: {setClassId: any, setMenuState: any}) {
    let supabaseClient = useSupabaseClient();

    const [ className, setClassName ] = useState<string>()
    const user = useUser();

    async function SubmitClass() {
        let { data, error } = await supabaseClient.from( "classes" ).insert( {"owner": user?.id, "name": className} ).select().single();
        console.log(data);
        
        props.setClassId(data.id);
        props.setMenuState(true);
    }

    return (
        <div style={{display: "flex", flexDirection: "column", justifyContent:"center", alignItems:"center", gap: "1rem"}}>
            <label style={{fontWeight: "700"}}>Enter Class Name</label>
            <input style={{height: "1.5rem", width: "15rem"}} type="text" onChange = { (event) => {
                setClassName(event.target.value);
            }}></input>
            <Button onClick= { SubmitClass }>Create Class</Button>
        </div>
    )
}

export default CreateClass;