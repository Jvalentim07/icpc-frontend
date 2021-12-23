import * as React from "react"
import LayoutPage from "../components/layoutPage"

import GraphImage from '../images/Graph.jpg'

class ModelPage extends React.Component {
    render (){
        return (
            <LayoutPage>
                <div style={{width: '100%'}}>
                 <div style={{ width: '100%', height: '500px', backgroundColor: 'lightgrey'}}><img src={GraphImage} width="100%" height="100%"/></div>
                 <div style={{ width: '100%', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                   <h2 style={{ fontWeight: '200' }}>Metas Atual - 2022</h2>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Candidato próprio à Deputado Estadual de São Paulo, partindo cúpula da Direita São Paulo coligado direto</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Geração de conteúdos originais para geração de relevância de mídia (Blog, Canais de Youtube (vídeos, lives, entrevistas, mídia impressa local)</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Formação de polos regionais</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Aproximação com a classe política paulista nos diversos níveis de governo, com base nos Valores Permanentes</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Apoio acessório às candidaturas alinhadas</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Aproximação com a cúpula de direita em formação no Brasil, Abraham e Arthur Weintraub, outros</p>
                 </div>
                 <div style={{ width: '100%', height: '500px', backgroundColor: 'lightgrey'}}><img src={GraphImage} width="100%" height="100%"/></div>
                 <div style={{ width: '100%', height: '600px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',  backgroundColor: '#312682', color: 'whitesmoke' }}>
                   <h2 style={{ fontWeight: '200', color: 'whitesmoke' }}>Metas 2021 - 2024</h2>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Formação, promoção e apoio a candidatos próprios às Câmaras de Vereadores das cidades da área de atuação da Direita São Paulo.</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Formação, promoção e apoio a candidatos a prefeituras </p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Criação de Cursos de Capacitação Política</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Formação de Candidatos a cargos eletivos o legislativo</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Formação de técnicos em gestão pública</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Formação de técnicos em atuação política (assessores)</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Palestras, Workshops, Lives, para geração de conscientização política Estabelecer a Direita São Paulo mídia como referência em Conscientização Política</p>
                 </div>
                 <div style={{ width: '100%', height: '500px', backgroundColor: 'lightgrey'}}><img src={GraphImage} width="100%" height="100%"/></div>
                 <div style={{ width: '100%', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                   <h2 style={{ fontWeight: '200' }}>Metas Atual - 2025</h2>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Geração de conteúdos originais para geração de relevância de mídia (Blog, Canais de Youtube (vídeos, lives, entrevistas, mídia impressa local)</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Consolidar a Direita São Paulo como referência na formação de classe política e gestores públicos de excelência</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Crescimento da participação de candidatos de direita nas esferas legislativas de todos os níveis.</p>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Fiscalização e cobrança contínua do poder público</p>
                 </div>
                </div>
            </LayoutPage>
        )
    }
}

export default ModelPage