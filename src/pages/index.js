import { CounterContainer } from "@/components/CounterContainer";
import { Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
      <Container>     
          <Row>
            <Col>
              <CounterContainer />
            </Col>
          </Row>
      </Container>
  );
}