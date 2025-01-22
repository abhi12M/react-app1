//Box.js
function Box(props) {

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', backgroundColor: '#f9f9f9' }}>
      {props.children}
      {props.text}
      {props.sentToParent && (
        <button onClick={() => props.sentToParent('yo')}>Send</button>
      )}
      <p>from box</p>
    </div>
  );
}

export default Box;
