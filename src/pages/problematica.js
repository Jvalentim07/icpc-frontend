import * as React from "react"
import LayoutPage from "../components/layoutPage"

import BackGround from '../images/city.jpg'

class ModelPage extends React.Component {
    render (){
        return (
            <LayoutPage>
                <div className="headerProblematic">
                    <div style={{ width: '100%', height: '500px'}}>
                        <div style={{ width:'100%', position: 'absolute', height: '500px', display: 'flex', alignItems: 'center', padding: '200px'}}><h1 style={{ fontSize: '4.5em', width: '430px', fontWeight: '600', color: '#FFFFFF' }}>Nossas Problematicas</h1></div>
                        <div style={{ width: '100%', height: '100%', backgroundColor: 'lightgrey'}}><img src={BackGround} width="100%" height="100%"/></div>
                    </div>
                    <div style={{ display: 'flex', width: '100%', backgroundColor: '#312682', color: 'whitesmoke'}}>
                        <div style={{ border: '2px solid #fff', height: '500px', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <h1 style={{ width: '70%', color: 'whitesmoke'}}>Ambiente Social</h1>
                            <p style={{ width: '70%'}}>Baixa Conscientização Política do cidadão comum</p>
                            <p style={{ width: '70%'}}>Restrição de Liberdades Individuais</p>
                            <p style={{ width: '70%'}}>Restrições à Livre Iniciativa</p>
                            <p style={{ width: '70%'}}>Imposição de normas de condutas sociais incompatíveis com a tradição brasileira</p>
                            <p style={{ width: '70%'}}>Clamor popular por solução salvadora</p>
                            <p style={{ width: '70%'}}>Falta de organização política da base da sociedade de direita</p>
                            <p style={{ width: '70%'}}>Fenômeno “bolha da internet” e cidadãos não impactados</p>
                            <p style={{ width: '70%'}}>Risco crescente de convulsão social</p>
                        </div>
                        <div style={{ border: '2px solid #fff', height: '500px', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <h1 style={{ width: '70%', color: 'whitesmoke'}}>Ambiente Político</h1>
                            <p style={{ width: '70%'}}>Crescente desequilíbrio de força entre os três poderes, gerando instabilidade institucional, jurídica e social</p>
                            <p style={{ width: '70%'}}>Restrição de Liberdades Individuais</p>
                            <p style={{ width: '70%'}}>Restrições à Livre Iniciativa</p>
                            <p style={{ width: '70%'}}>Imposição de normas de condutas sociais incompatíveis com a tradição brasileira</p>
                            <p style={{ width: '70%'}}>Clamor popular por solução salvadora</p>
                            <p style={{ width: '70%'}}>Falta de organização política da base da sociedade de direita</p>
                            <p style={{ width: '70%'}}>Fenômeno “bolha da internet” e cidadãos não impactados</p>
                            <p style={{ width: '70%'}}>Risco crescente de convulsão social</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', width: '100%'}}>
                        <div style={{ height: '500px', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', border: '2px solid #312682'}}>
                            <h1 style={{ width: '70%'}}>Ambiente Econômico</h1>
                            <p style={{ width: '70%'}}>Depressão do ambiente de negócios para micro e pequenas empresas</p>
                            <p style={{ width: '70%'}}>Risco de Estagflação</p>
                            <p style={{ width: '70%'}}>Baixo crescimento econômico</p>
                            <p style={{ width: '70%'}}>Alto desemprego</p>
                            <p style={{ width: '70%'}}>Alta de inflação</p>
                            <p style={{ width: '70%'}}>Economia sustentada pelo Agronegócio via exportação.</p>
                            <p style={{ width: '70%'}}>Queda da atividade industrial</p>
                        </div>
                        <div style={{ border: '2px solid #312682', height: '500px', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <h1 style={{ width: '70%'}}>Ambiente Internacional</h1>
                            <p style={{ width: '70%'}}>Imposição de agendas globais(Clima, Combate à Covid, Vacinas obrigatórias)</p>
                            <p style={{ width: '70%'}}>Tensões EUA-Russia</p>
                            <p style={{ width: '70%'}}>Tensões EUA-China</p>
                            <p style={{ width: '70%'}}>Tensões Russia-Ucrânia</p>
                            <p style={{ width: '70%'}}>Tensões China-Índia</p>
                            <p style={{ width: '70%'}}>Avanço de táticas de subversão de nações soberanas</p>
                        </div>
                    </div>
                    <div style={{ display: 'flex', width: '100%', backgroundColor: '#009541', color: 'whitesmoke'}}>
                        <div style={{ border: '2px solid #fff', height: '500px', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <h1 style={{ width: '70%', color: 'whitesmoke'}}>Baixa Formação da Classe Política</h1>
                            <p style={{ width: '70%'}}>Desconhecimento de leis gerais e regulamentos internos</p>
                            <p style={{ width: '70%'}}>Desconhecimento da dinâmica interna de poder</p>
                            <p style={{ width: '70%'}}>Desconhecimento de atividades possíveis de resolução de problemas de suas regiões</p>
                            <p style={{ width: '70%'}}>Falta de preparo para o debate</p>
                            <p style={{ width: '70%'}}>Baixo conhecimento dos movimentos históricos até o tempo presente</p>
                            <p style={{ width: '70%'}}>Baixo conhecimento da base intelectual da ideologia que defendem</p>
                        </div>
                        <div style={{ border: '2px solid #fff', height: '500px', width: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                            <h1 style={{ width: '70%', color: 'whitesmoke'}}>Baixa Capacidade Técnica de Assessores</h1>
                            <p style={{ width: '70%'}}>Desconhecimento da burocracia, documentos, prazos</p>
                            <p style={{ width: '70%'}}>Falta de dinamismo do gabinete para apoio das ações dos eleitos.</p>
                            <p style={{ width: '70%'}}>Falta de capacidade de articulação entre assessorias para agendas comuns</p>
                            <p style={{ width: '70%'}}>Baixo conhecimento dos movimentos históricos até o tempo presente</p>
                            <p style={{ width: '70%'}}>Tensões China-Índia</p>
                            <p style={{ width: '70%'}}>Baixo conhecimento da base intelectual da ideologia que defendem</p>
                        </div>
                    </div>
                </div>
            </LayoutPage>
        )
    }
}

export default ModelPage