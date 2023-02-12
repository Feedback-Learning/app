import Draggable from 'react-draggable'
import { useState } from 'react';
import { Database } from './database';
import ChatHistory from './ChatHistory';
import CreateClass from './CreateClass';

type Messages = Database['public']['Tables']['messages']['Row']


function Drag() {
    // const [ classId, setClassId] = useState<number>
    // const [ menuState, setMenuState] = useState<boolean>(false);

    return (<Draggable>
        <div className="drag-ui">
            <ChatHistory classId={null}></ChatHistory>
            <div style={{width: "50px", height: "10px", backgroundColor:"grey"}}></div>
        </div>
      </Draggable>)
}

export default Drag;