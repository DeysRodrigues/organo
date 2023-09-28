import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";

function App() {

  const [times, setTimes] = useState([
    {
      nome: 'Programação',
      cor: '#57C278'
    },
    {
      nome: 'Front-End',
      cor: '#82CFFA'
    },
    {
      nome: 'Data Science',
      cor: '#A6D157'
    },
    {
      nome: 'Devops',
      cor: '#E06B69'
    },
    {
      nome: 'UX e Design',
      cor: '#DB6EBF'
    },
    {
      nome: 'Mobile',
      cor: '#FFBA05'
    },
    {
      nome: 'Inovação e Gestão',
      cor: '#FF8A29'
    },
  ]);

  const inicial = [
    {
      nome: 'MORGAN LUCY',
      cargo: 'Designer Criativo',
      imagem: 'https://picsum.photos/200/200',
      time: times[0].nome
    },
    {
      nome: 'CAILO PINHEIRO',
      cargo: 'Especialista em Design',
      imagem: 'https://github.com/cailopinheiro.png',
      time: times[0].nome
    },
    {
      nome: 'DEYS RODRIGUES',
      cargo: 'Desenvolvedor Front-end',
      imagem: 'https://github.com/deysrodrigues.png',
      time: times[0].nome
    },
    {
      nome: 'DEYS RODRIGUES',
      cargo: 'Designer de Interface',
      imagem: 'https://loremflickr.com/200/200/dog',
      time: times[1].nome
    },
    {
      nome: 'DEYS RODRIGUES',
      cargo: 'Designer Gráfico',
      imagem: 'https://loremflickr.com/200/200/bird',
      time: times[1].nome
    },
    {
      nome: 'DEYS RODRIGUES',
      cargo: 'Desenvolvedor Web',
      imagem: 'https://loremflickr.com/200/200/cat',
      time: times[1].nome
    },
    {
      nome: 'JULIANA AMOASEI',
      cargo: 'Engenheiro de Software',
      imagem: 'https://loremflickr.com/200/200/woman',
      time: times[2].nome
    },
    {
      nome: 'DANIEL ARTINE',
      cargo: 'Analista de Sistemas',
      imagem: 'https://loremflickr.com/200/200/men',
      time: times[2].nome
    },
    {
      nome: 'GUILHERME LIMA',
      cargo: 'Especialista em Marketing',
      imagem: 'https://loremflickr.com/200/200/random',
      time: times[2].nome
    },
    {
      nome: 'JULIANA MULLER',
      cargo: 'Analista de Dados',
      imagem: 'https://loremflickr.com/200/200/people',
      time: times[3].nome
    },
    {
      nome: 'LAURA ARTINE',
      cargo: 'Gerente de Projeto',
      imagem: 'https://loremflickr.com/200/200/fuit',
      time: times[3].nome
    },
    {
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
      nome: 'DANIELA RIBEIRO',
      cargo: 'Arquiteto de Soluções',
      imagem: 'https://loremflickr.com/200/200/flower',
      time: times[4].nome
    },
    {
      nome: 'GUILHERME SOUZA',
      cargo: 'Analista de Suporte Técnico',
      imagem: 'https://loremflickr.com/200/200/queen',
      time: times[4].nome
    },
    {
      nome: 'MOLLY FERNANDES',
      cargo: 'UX Designer',
      imagem: 'https://loremflickr.com/200/200/moon',
      time: times[5].nome
    },
    {
      nome: 'LUCY GULLIVER',
      cargo: 'Desenvolvedor Web',
      imagem: 'https://loremflickr.com/200/200/girl',
      time: times[5].nome
    },
    {
      nome: 'JANAINA KOTLIN',
      cargo: 'Especialista em Marketing Digital',
      imagem: 'https://loremflickr.com/200/200/boy',
      time: times[5].nome
    }
  ];

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarPessoa() {

    console.log('deletando')
  }

  const mudarCorTime = (cor, nome) => {

    setTimes(times.map(time => {
      if (time.nome === nome) {
          time.corSecundaria = cor;
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
