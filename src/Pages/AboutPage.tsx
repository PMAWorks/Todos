import React from "react";
import { useHistory } from "react-router";

export const AboutPage: React.FC = () =>{
    const history = useHistory()
  return(
      <>
      <h1>Страница информации</h1>
      <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti obcaecati praesentium eum dolorum quae eligendi rerum adipisci beatae perferendis debitis, sit odio, reiciendis atque consectetur perspiciatis odit enim. Magnam, quas.
      </p>
      <button className="btn" onClick={() => history.push('/')}>Обратно к списку дел</button>
      </>
  )  
} 