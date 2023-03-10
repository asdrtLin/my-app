import React from "react";


function App(props:{children:React.ReactNode}) {
  return (
    <div>{props.children}</div>
  );
}

export default App;
