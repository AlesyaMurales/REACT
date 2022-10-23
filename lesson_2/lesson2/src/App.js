import './App.css';
import { useEffect, useState } from "react";


function App() {
  const [messageList, setMessageList] = useState([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addMessage = () => {
    let random = Math.random()
    setMessageList([...messageList, {
      title: title, author: author, id: random
    }])
  };

  useEffect(() => {
    setTimeout(() => {
      if (messageList.length > 0) {
        alert('Сообщение отправлено')
      }
    }, 3000)
  }, [messageList])

  return (
    <div>
      <input value={title} onChange={(event) => setTitle(event.target.value)} />
      <input value={author} onChange={(event) => setAuthor(event.target.value)} />
      <button onClick={addMessage}>Добавить</button>
      {messageList.map((item) => {
        return (
          <div key={item.id} style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
              {item.title}
            </div>
            <div>
              {item.author}
            </div>
          </div>
        )
      })}
    </div>
  );
}

export default App;