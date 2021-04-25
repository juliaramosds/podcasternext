// SPA - single page application - qualquer projeto react
// SSR - server side rendering - dentro de projeto com nextJs
// SSG - static side generation - dentro de projeto com nextJs

//SPA:
// import { useEffect } from "react"

// export default function Home() {
//   useEffect(() => {
//     fetch('http://localhost:3333/episodes')
//       .then(response => response.json())
//       .then(data => console.log(data))
//   }, [])//toda vez que essa varival mudar quero que faça um evento
//primeiro parametro é o que quero executar, segundo é quando

//   return (
//     <h1>Index</h1>
//   )
// }

//SSR disponivel mesmo com js desabilitado 
export default function Home(props) {
  return (
    <div>
      <h1>Index</h1>
      <p>{JSON.stringify(props.episodes)}</p>
    </div>
  )
}

// export async function getServerSideProps() {
//   const response = await fetch('http://localhost:3333/episodes')
//   const data = await response.json()

//   return {
//     props: {
//       episodes: data,
//     }
//   }
// }

//SSG conteudo estatico para cada acesso, menos requisicoes, ideal para conteudos que nao mudam muito, só funciona em producao, necessita build
export async function getStaticProps() {
  const response = await fetch('http://localhost:3333/episodes')
  const data = await response.json()

  return {
    props: {
      episodes: data,
    },
    revalidate: 60 * 60 * 8,//numero em segundos de quanto em quanto tempo fazer uma nova chamada a api nessa pagina
  }
}