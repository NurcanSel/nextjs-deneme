import Head from 'next/head'
import Layout from '../components/layout';
import Form from '../components/form';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../images/node-react-nextjs.jpg';

export default function Home() {
  return (
    <div className="container">
      <Layout>
        <Container>
          <Row>
            <Col md={6}>
              <img className="image" src={img} />
              <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard 
              dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen 
              book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
              unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more 
              recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </Col>
            <Col >
              <h3>Login</h3>
              <Form />
            </Col>
          </Row>
        </Container>
      </Layout>
     </div>
  )
}
