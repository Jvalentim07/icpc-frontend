import * as React from "react"
import LayoutPage from "../components/layoutPage"

import BackGround from '../images/city.jpg'
import GraphImage from '../images/Graph.jpg'

class ModelPage extends React.Component {
    render (){
        return (
            <LayoutPage>
                <div style={{width: '100%', display: 'flex', flexDirection: 'column'}}>
                    <div style={{ width: '100%', height: '500px'}}>
                        <div style={{ width:'100%', position: 'absolute', height: '500px', display: 'flex', alignItems: 'center', padding: '200px'}}><h1 style={{ fontSize: '4.5em', width: '430px', fontWeight: '600', color: '#312682' }}>Valores Permanentes</h1></div>
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'lightgrey'}}><img src={GraphImage} width="100%" height="100%"/></div>
                    </div>
                    <div style={{ display: 'flex', width: '100%', backgroundColor: '#312682', color: 'whitesmoke'}}>
                        <div style={{ border: '2px solid #fff', height: '700px', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <h1 style={{ width: '70%', color: 'whitesmoke'}}>Enredo</h1>
                            <p style={{ width: '70%'}}>Todas as ações, alinhamentos políticos, conteúdos de artigos, vídeos, jornais e futuras palestras, workshops e cursos de formação de gestores públicos têm como base, um conjunto de VALORES PERMANENTES.</p>
                        </div>
                        <div style={{ border: '2px solid #fff', height: '700px', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <h1 style={{ width: '70%', color: 'whitesmoke'}}>Ambiente Político</h1>
                            <p style={{ width: '70%'}}>Defesa das liberdades individuais e combate à crescente imposição de força do Estado, em quaisquer de suas instâncias e instituições </p>
                            <p style={{ width: '70%'}}>Combate ostensivo à corrupção, prevaricação e outros crimes contra a sociedade em suas diversas formas</p>
                            <p style={{ width: '70%'}}>Defesa dos valores da família, baseados na tradição brasileira</p>
                            <p style={{ width: '70%'}}>Defesa dos valores cristãos e da liberdade de crenças e cultos</p>
                            <p style={{ width: '70%'}}>Defesa da liberdade econômica e apoio a Micro e Pequenas Empresas</p>
                            <p style={{ width: '70%'}}>Defesa da Lei, da Constituição Vigente e da Democracia como forma de governo.</p>
                            <p style={{ width: '70%'}}>Defesa da Soberania Nacional</p>
                            <p style={{ width: '70%'}}>Atuações profissionais nas esferas Executiva, Legislativa e Judiciária</p>
                            <p style={{ width: '70%'}}>Combate à agenda ideológica da esquerda, bem como sua proposta de Estado no Brasil.</p>
                        </div>
                    </div>
                </div>
            </LayoutPage>
        )
    }
}

export default ModelPage