import React, { useState } from "react";
import { FiArrowLeft } from 'react-icons/fi'
import api from "../../Services/api";


import './styles.css';

import logobth from '../../assets/Logo.png'

export default function Register(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [whatsapp, setWhatsapp] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    async function handleRegister(e){
        e.preventDefault();
        const data={name, email, whatsapp, city, uf};
        console.log(data);
        const response= await api.post("/ongs", data);
    }
        return (
            <div className="register-container">
                <div className='content'>
                    <section>
                        <img src={logobth} alt="Logo be the hero"/>
                        <h1>Cadastro</h1>
                        <p>Faça seu cadastro e ajude pessoas a encontrarem os casos da sua ONG. </p>

                    </section>
                

                    <form onSubmit={handleRegister}>
                        <input type="text" value={name} onChange={e=>setName(e.target.value)} placeholder="Nome da ONG"></input>
                        <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="E-mail"></input>
                        <input type="text" value={whatsapp} onChange={e=>setWhatsapp(e.target.value)} placeholder="WhatsApp"></input>
                        <div className="input-cidade-uf">
                            <input type="text" value={city} onChange={e=>setCity(e.target.value)} placeholder="Cidade"></input>
                            <input type="text" value={uf} onChange={e=>setUf(e.target.value)} placeholder="UF"></input>
                        </div>
                        <button className="button" type="submit">Cadastrar</button>
                    </form>
                </div>
            </div>
            
    )
            
}


//Pq quando coloco isso não carrega minha página mais
/*<link className="back-link" to="/">
<FiArrowLeft size={16} color="#E02041"/>Voltar para o login</link>*/