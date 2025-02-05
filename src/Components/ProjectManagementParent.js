import React from 'react';
import ProjectManageChild1 from "./ProjectManageChild1";  // Import the child component

const ProjectManagementParent = () => (
  <div
    style={{
      backgroundColor: "#fff", // Parent background color
      width: "1290px",  // Set width for parent container
      height: "500px",  // Set height for parent container
      color: "#fff",  // Set text color for parent (if any text is added)
    }}
  >
    <ProjectManageChild1 />  {/* Child component with centered background image */}
  </div>
);

export default ProjectManagementParent;
