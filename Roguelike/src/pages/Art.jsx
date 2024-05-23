import Styles from "./Art.module.css"
import Header from "../components/header"

function Art(){

  return(
    <>
    <Header title = "Gotcha"/>
    <iframe className={Styles.container} width="560" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ?si=QHc2XB2OdJJjVKR-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </>
  );
};

export default Art;
// import React, { useState } from 'react';
// import imageSource from '../assets/sponge.png'; // Import your image

// const ImageViewer = () => {
//   const [position, setPosition] = useState({ x: 1.5, y: 85 });
//   const viewportHeight = 80; // Size of the viewport in pixels
//   const viewportWidth = 52;

//   const imageWidth = 377; // Width of the full image
//   const imageHeight = 425; // Height of the full image

//   return (
//     <div tabIndex={0}>
//       <div
//         style={{
//           width: viewportWidth,
//           height: viewportHeight,
//           overflow: 'hidden',
//           position: 'relative',
//         }}
//       >
//         <img
//           src={imageSource}
//           alt="Full Image"
//           style={{
//             position: 'absolute',
//             left: -position.x,
//             //54
//             top: -position.y,
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ImageViewer;