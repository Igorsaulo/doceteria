import { ReactElement } from "react"
import { GradiantButton } from "../shared/components/atomic/buttons/gradiantButton"
import BoloImg from "../assets/boloimg.png"

function Home ( ) : ReactElement{
  return (

    <main style={{display:"flex",gap:"5rem", background: "linear-gradient(334deg, rgb(248, 100, 134) 39%, rgb(241, 61, 104) 71%)", height: "100vh", width:"100%", padding:"7rem 18.5rem",color:"#fff"}}>
      <div  style={{maxWidth:"35%"}}>
      <h1>What is Lorem Ipsum?</h1>
          <p>
    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
          <br />
      <GradiantButton>Click me</GradiantButton>
      </div>
      <div style={{ position:"absolute", height:"100vh",  zIndex:"9999999999999999999999999999999",width:"63%", backgroundImage:`url(${BoloImg})`, backgroundSize:"cover", backgroundPosition:"center", backgroundRepeat:"no-repeat", borderRadius:"10px"}}>
      </div>
    </main>
  )
}

export { Home }