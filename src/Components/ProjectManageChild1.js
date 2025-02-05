import img from '../Images/ProjectM.png';  // Ensure the image is imported

const ProjectManageChild1 = () => (
  <div
    style={{
      display: 'flex',  // Flexbox to center content
      justifyContent: 'center',  // Center the image horizontally
      alignItems: 'center',  // Center the image vertically
      width: '1100px',  // Set the width of the div
      height: '200px',  // Set the height of the div
      paddingTop: '40px',
    }}
  >
    <img
      src={img}  // The source of the image
     
      style={{
        
        width:"80%" , // Ensures the image scales down without stretching
        maxHeight: 'auto',  // Ensures the image scales down without stretching
        objectFit: 'contain',
        padding: '25px',  // Maintains the aspect ratio while fitting inside the div
      }}
    />
  </div>
);

export default ProjectManageChild1;
