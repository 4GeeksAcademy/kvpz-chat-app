import { CounterContainer } from "@/components/CounterContainer";
import { Col, Container, Row } from "react-bootstrap";
import { FaClock } from "react-icons/fa";

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