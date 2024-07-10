import { Col } from "react-bootstrap";
import React from 'react'
export const ProjectCard = ({ title, description, imgUrl, projUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
       <a href={projUrl}> <img src={imgUrl} alt=""/>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
       </div> </a>
      </div>
    </Col>
  )
}