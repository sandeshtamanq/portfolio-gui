import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";
import portfolioCli from "../../Assets/Projects/portfolio-cli.png";
import portfolioGui from "../../Assets/Projects/portfolio-gui.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={portfolioCli}
              title="Portfolio CLI Website"
              description="My personal Portfolio Website build with React and Tailwind with cli desigin"
              ghLink="https://github.com/sandeshtamanq/Portfolio"
              demoLink="https://sandeshtmg.com.np/"
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={portfolioGui}
              title="Portfolio GUI Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="#"
              demoLink="#"
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              title="Ecommerce"
              description="This is a fully functional eCommerce website that uses React.js + Tailwind and redux-toolkit in the front end and nestjs and typeorm in backend and PostgresSql as Database."
              ghLink="https://github.com/sandeshtamanq/7thsem-project_backend"
              demoLink="https://7th-sem-project-frontend.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
