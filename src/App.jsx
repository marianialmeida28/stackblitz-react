import { useState } from 'react';

import { auth } from './config/firebaseConfig.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
//import reactLogo from './assets/react.svg';
//import viteLogo from '/vite.svg';
import './App.css';

export default function App() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const autenticarComFirebase = async(evento) =>{
    evento.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, senha);
      alert('logado com sucesso');
    } catch (err) {
      alert('Erro no processo', err);
    }

  }
  return (
    <main>
      <form onSubmit={autenticarComFirebase()}>
        <label htmlFor="email">E-mail</label>
        <input
         id="email"
         name="email"
         type="email"
         value={email}
         onChange={(evento)=> setEmail(evento.target.value)}
        />
         <label htmlFor="senha">Senha</label>
        <input
         id="password"
         name="password"
         type="password"
         value={senha}
         onChange={(evento)=> setSenha(evento.target.value)}
        />
        <button type="submit">logar</button>
      </form>
    </main>
  )
}


