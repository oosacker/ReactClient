import React, { useState, useEffect } from 'react';

function App() {
  const [apiResponse, setReponse] = useState(null);

  useEffect(() => {
    fetch("http://localhost:9000/testAPI")
        .then(res => res.text())
        .then(res => setReponse(res));
  });

  return (
    <div className="App">
      <p>Test API: {apiResponse}</p>
    </div>
  );
}

export default App;
