import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [name, setName] = useState('');
  const [email,setEmail] = useState('');
  const [error,setError]= useState('');
  const handleSubmit=(event) => {
    event.preventDefault();
    if (name.trim()==='') {
      setError('請輸入姓名!');
      return;
    }
    if (email.trim()==='') {
      setError('請輸入信箱!');
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)){
      setError('Email格式不正確!');
      return;
    }
    setError('') ;
    alert(`報名成功！`);
    setEmail('');
    setName('');
  }
  return (
    
    <div className="App" style={{maxWidth:'400px',margin:'30px auto',fontFamily:'arial, sans-serif'}}> 
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          <h2 style={{ textAlign:'center'}}>活動報名系統 </h2>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div style={{ marginBottom: '14px' }}>
      
      
    </div>
      <div style={{ marginBottom: '14px' }}>
      
      
      
      <form onSubmit={handleSubmit}>
        <label style={{ display: 'block', marginBottom: '5px' }}> 姓名：</label>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        /><br/><br/>
        <label style={{ display: 'block', marginBottom: '5px' }}>Email：</label>
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
      /><br/><br/>
      
      <button
        style={{
        width: '100%',
        padding: '10px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        fontSize: '15px',
            }}
        >
        送出報名
      </button>
      </form>
      </div>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
