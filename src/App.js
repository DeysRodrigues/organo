import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      id: uuidv4(),
      nome: 'MORGAN LUCY',
      cargo: 'Designer Criativo',
      imagem: 'https://picsum.photos/200/200',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'CAILO PINHEIRO',
      cargo: 'Especialista em Design',
      imagem: 'https://github.com/cailopinheiro.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'DEYS RODRIGUES',
      cargo: 'Desenvolvedor Front-end',
      imagem: 'https://github.com/deysrodrigues.png',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'DEYS RODRIGUES',
      cargo: 'Designer de Interface',
      imagem: 'https://loremflickr.com/200/200/dog',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'DEYS RODRIGUES',
      cargo: 'Designer Gráfico',
      imagem: 'https://loremflickr.com/200/200/bird',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'DEYS RODRIGUES',
      cargo: 'Desenvolvedor Web',
      imagem: 'https://loremflickr.com/200/200/cat',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Engenheiro de Software',
      imagem: 'https://loremflickr.com/200/200/woman',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Analista de Sistemas',
      imagem: 'https://loremflickr.com/200/200/men',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME LIMA',
      cargo: 'Especialista em Marketing',
      imagem: 'https://loremflickr.com/200/200/random',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA MULLER',
      cargo: 'Analista de Dados',
      imagem: 'https://loremflickr.com/200/200/people',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'LAURA ARTINE',
      cargo: 'Gerente de Projeto',
      imagem: 'https://loremflickr.com/200/200/fuit',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'PIETRA ALMEIDA',
      cargo: 'Analista de Qualidade',
      imagem: 'https://loremflickr.com/200/200/animal',
      time: times[3].nome
    },
    {
      nome: 'JOAQUIM ALVES',
      cargo: 'Desenvolvedor de Software',
      imagem: 'https://loremflickr.com/200/200/fish',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIELA RIBEIRO',
      cargo: 'Arquiteto de Soluções',
      imagem: 'https://loremflickr.com/200/200/flower',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'GUILHERME SOUZA',
      cargo: 'Analista de Suporte Técnico',
      imagem: 'https://loremflickr.com/200/200/queen',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      nome: 'MOLLY FERNANDES',
      cargo: 'UX Designer',
      imagem: 'https://loremflickr.com/200/200/moon',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'LUCY GULLIVER',
      cargo: 'Desenvolvedor Web',
      imagem: 'https://loremflickr.com/200/200/girl',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      nome: 'JANAINA KOTLIN',
      cargo: 'Especialista em Marketing Digital',
      imagem: 'https://loremflickr.com/200/200/boy',
      time: times[5].nome
    }
  ];

  const [colaboradores, setColaboradores] = useState(inicial)

  const deletarPessoa = (id)=> {

    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id ))
  }
  const mudarCorTime = (cor, id) => {
    setTimes(times.map(time => {
      if (time.id === id) {
          time.cor = cor;
      }
      return time;

    }));

  } 

  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCorTime} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarPessoa} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
