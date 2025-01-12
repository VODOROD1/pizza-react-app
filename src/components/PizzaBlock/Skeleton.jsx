import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={473}
    viewBox="0 0 500 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="406" rx="3" ry="3" width="90" height="43" /> 
    <rect x="130" y="405" rx="3" ry="3" width="150" height="44" /> 
    <rect x="-2" y="266" rx="3" ry="3" width="280" height="30" /> 
    <rect x="0" y="309" rx="3" ry="3" width="280" height="35" /> 
    <rect x="0" y="357" rx="3" ry="3" width="280" height="35" /> 
    <circle cx="133" cy="130" r="130" />
  </ContentLoader>
)

export default Skeleton;