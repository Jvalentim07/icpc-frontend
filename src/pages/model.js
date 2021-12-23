import * as React from "react"
import LayoutPage from "../components/layoutPage"

import GraphImage from '../images/Graph.jpg'

class ModelPage extends React.Component {
    render (){
        return (
            <LayoutPage>
                <div style={{width: '100%'}}>
                 <div style={{ width: '100%', height: '500px', backgroundColor: 'lightgrey'}}><img src={GraphImage} width="100%" height="100%"/></div>
                 <div style={{ width: '100%', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#312682', color: 'whitesmoke'}}>
                   <h2 style={{ fontWeight: '200', color: 'whitesmoke' }}>Title Example</h2>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta id tortor eget suscipit. Cras quis nisl nunc. Etiam a elementum sem. Etiam pellentesque ligula eros, ut tempus ipsum luctus eget. Quisque pulvinar ac mi pharetra varius. Maecenas at volutpat metus, non viverra quam. Duis consequat elit in orci faucibus, quis laoreet tortor blandit.</p>
                 </div>
                 <div style={{ width: '100%', height: '500px', backgroundColor: 'lightgrey'}}><img src={GraphImage} width="100%" height="100%"/></div>
                 <div style={{ width: '100%', height: '500px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                   <h2 style={{ fontWeight: '200' }}>Title Example</h2>
                   <p style={{ textAlign: 'center', maxWidth: '800px', lineHeight: '3.0em'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer porta id tortor eget suscipit. Cras quis nisl nunc. Etiam a elementum sem. Etiam pellentesque ligula eros, ut tempus ipsum luctus eget. Quisque pulvinar ac mi pharetra varius. Maecenas at volutpat metus, non viverra quam. Duis consequat elit in orci faucibus, quis laoreet tortor blandit.</p>
                 </div>
                </div>
            </LayoutPage>
        )
    }
}

export default ModelPage