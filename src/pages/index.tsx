import { ReactElement } from "react"
import { GradiantButton } from "../shared/components/atomic/buttons/gradiantButton"
import { TopSection } from "../shared/components/atomic/layout"
import { BackgroundImage } from "../shared/components/atomic/image"

function Home ( ) : ReactElement{
  return (
    <main>
      <TopSection>
      <div  style={{maxWidth:"40%"}}>
        <div style={{paddingBottom:"5rem"}}>
        <h1>What is Lorem Ipsum?</h1>
          <p>but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
             and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </p>
        </div>
      <GradiantButton>Click me</GradiantButton>
      </div>
      <BackgroundImage />
      </TopSection>
    </main>
  )
}

export { Home }