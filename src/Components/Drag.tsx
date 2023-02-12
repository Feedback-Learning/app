import Draggable from 'react-draggable'


function Drag() {
    return (<Draggable>
        <div className="drag-ui">
          <div className="message">
            <div className="message-author">Username</div>
            <div className="message-contents">This is a message.</div>
            <div className="message-likes">&lt;3</div>
            <div className="message-timeout"></div>
          </div>
        </div>
      </Draggable>)
}

export default Drag;