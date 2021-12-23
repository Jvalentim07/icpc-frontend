import * as React from "react"
// import { graphql, Link } from "gatsby"

import 'bootstrap/dist/css/bootstrap.min.css';
import LayoutPage from "../components/layoutPage"
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

import './imageHover.scss'
import './index.scss'

import BackGround from '../images/city.jpg'
import BrazilImage from '../images/BrazilImage.jpg'

class HomePage extends React.Component {
  state = {
  }
  async componentDidMount() {
    console.log('Novo')
  }
  render () {
  return (
    <LayoutPage>
      <div>
       <div style={{ display: 'flex', flexDirection: 'column'}}>
         <div style={{ height: '600px'}}><img src={BackGround} width='100%' height='700px' /></div>
         <div style={{ marginBottom: '50px'}}>
            <div className="cardGroup">
              <div className="card">
                <h5>Title</h5>
                <p style={{ color:'#CED0DB' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet.</p>
              </div>
              <div className="card">
                <h5>Title</h5>
                <p style={{ color:'#CED0DB' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet.</p>
              </div>
              <div className="card">
                <h5>Title</h5>
                <p style={{ color:'#CED0DB' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet.</p>
              </div>
              <div className="card">
                <h5>Title</h5>
                <p style={{ color:'#CED0DB' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet.</p>
              </div>
              <div className="card">
                <h5>Title</h5>
                <p style={{ color:'#CED0DB' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet.</p>
              </div>
            </div>
         </div>
         <div className="contentHome">
           <div className="contentText">
             <h1 style={{ width: '70%'}}>Example Title</h1>
             <p style={{ width: '70%'}}>orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non odio commodo, efficitur ipsum vel, ultrices nisi. Vivamus eleifend lectus nec magna molestie porttitor. Quisque maximus aliquam neque, et sagittis tortor pretium at. Praesent bibendum metus id arcu vehicula efficitur. Nulla eget pharetra ante, imperdiet consequat neque. In iaculis urna vel tempor eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
           </div>
           <div className="contentImage"><img src={BrazilImage} width="100%" height="100%"/></div>
         </div>
         <div className="contentHome">
           <div className="contentImage"><img src={BrazilImage} width="100%" height="100%"/></div>
           <div className="contentText">
             <h1 style={{ width: '70%'}}>Example Title</h1>
             <p style={{ width: '70%'}}>orem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum non odio commodo, efficitur ipsum vel, ultrices nisi. Vivamus eleifend lectus nec magna molestie porttitor. Quisque maximus aliquam neque, et sagittis tortor pretium at. Praesent bibendum metus id arcu vehicula efficitur. Nulla eget pharetra ante, imperdiet consequat neque. In iaculis urna vel tempor eleifend. Interdum et malesuada fames ac ante ipsum primis in faucibus. </p>
           </div>
         </div>
         {/* <div style={{ width: '100%', display: 'flex', justifyContent: 'space-evenly', padding: '50px 20px', backgroundColor: '#FFCA00'}}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={BackGround} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={BackGround} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={BackGround} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src={BackGround} />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
         </div> */}
       </div>
      </div>
    </LayoutPage>
    )
  }
}

export default HomePage

