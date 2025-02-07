import React from 'react';
import ProjectManageChild1 from "./ProjectManageChild1"; 
import ProjectManageChild2 from './ProjectManageChild2';

const ProjectManagementParent = () => (
  <div
    style={{
      backgroundColor: "#fff",
      width: "82%", 
      height: "900px",
      display: "flex",
      flexDirection: "column", 
      alignItems: "center",
      gap: "40px", 
      paddingTop: "20px",
      paddingBottom: "20px",
      marginLeft: "3cm",  
      marginRight: "3cm", 
    }}
  >
    <ProjectManageChild1 />
    <ProjectManageChild2 />
  </div>
);

export default ProjectManagementParent;
