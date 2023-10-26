import Styles from "./styles";
import Typewriter from "typewriter-effect";


export default function Home() {
  return (
    <Styles.Home>
      <Styles.Banner>
        <Styles.ConteudoBanner>
          <Styles.TituloBanner>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Seja bem vindo(a)")
                  .pauseFor(50)
                  .deleteAll()
                  .changeDelay(40)
                  .typeString("A Moppe tem a <b>missão de transformar o mundo</b> por meio de uma educação forte aliada ao prazer de aprender, com intuito maior de explorar o potencial de cada aluno. ")
                  .start();
              }}
            /> 

          </Styles.TituloBanner>
        </Styles.ConteudoBanner>

      </Styles.Banner>

    </Styles.Home>
  )
}
