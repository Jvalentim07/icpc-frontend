import * as React from "react"
import LayoutPage from "../components/layoutPage"

import GraphImage from '../images/Graph.jpg'

class ModelPage extends React.Component {
    render (){
        return (
            <LayoutPage>
                <div style={{width: '100%'}}>
                    <div style={{ width: '100%', height: '500px', backgroundColor: 'lightgrey'}}><img src={GraphImage} width="100%" height="100%"/></div>
                    <div style={{ color: 'whitesmoke', width: '100%', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#009541'}}>
                        <h2 style={{ fontWeight: '200', color: 'whitesmoke' }}>Engajamento Político</h2>
                        <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Apoio na política eleitoral</p>
                        <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Apoio a deputados eleitos</p>
                        <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Busca de soluções regionais via poder público (emendas parlamentares) para demandas locais</p>
                        <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Palestras, workshops, Lives, sobre temas relevantes alinhados com os Valores Permanentes</p>
                        <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}> Trabalho de conscientização política do cidadão comum</p>
                    </div>
                    <div style={{ width: '100%', height: '500px', backgroundColor: 'lightgrey'}}><img src={GraphImage} width="100%" height="100%"/></div>
                    <div style={{ display: 'flex', width: '100%', backgroundColor: '#FFCA00'}}>
                        <div style={{ height: '500px', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <h1 style={{ width: '70%'}}>Conteúdos</h1>
                            <p style={{ width: '70%'}}>Notícias</p>
                            <p style={{ width: '70%'}}>Artigos</p>
                            <p style={{ width: '70%'}}>Literatura</p>
                            <p style={{ width: '70%'}}>Relacionados com as estratégias do Engajamento Político</p>
                        </div>
                        <div style={{ height: '500px', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <h1 style={{ width: '70%'}}>Mídias</h1>
                            <p style={{ width: '70%'}}>Website</p>
                            <p style={{ width: '70%'}}>Blog de Artigos</p>
                            <p style={{ width: '70%'}}>Canal Youtube</p>
                            <p style={{ width: '70%'}}>Jornal Impresso</p>
                            <p style={{ width: '70%'}}>Redes Sociais</p>
                        </div>
                    </div>
                    <div style={{ width: '100%', height: '500px', backgroundColor: 'lightgrey'}}><img src={GraphImage} width="100%" height="100%"/></div>
                    <div style={{ width: '100%', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                        <h2 style={{ fontWeight: '200' }}>Formação</h2>
                        <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Candidatos a cargos no legislativo</p>
                        <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Profissionais para atuação em assessoria parlamentar</p>
                        <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Profissionais em Gestão Pública</p>
                        <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}> Ensino de cidadania infância e adolescência</p>
                        <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>História, Filosofia, Literatura, Ciências Políticas</p>
                    </div>
                </div>
            </LayoutPage>
        )
    }
}

export default ModelPage