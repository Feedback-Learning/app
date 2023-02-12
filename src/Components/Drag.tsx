import Draggable from 'react-draggable'
import { useState } from 'react';
import { Database } from './database';
import ChatHistory from './ChatHistory';

type Messages = Database['public']['Tables']['messages']['Row']


function Drag() {
    return (<Draggable>
        <div className="drag-ui">
            <ChatHistory></ChatHistory>
        </div>
      </Draggable>)
}

export default Drag;