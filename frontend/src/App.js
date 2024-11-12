
import "./App.css";

import RouteClient from "./routes/client/index.jsx";
import RouteAdmin from "./routes/admin/index.jsx";
function App() {
  return (
    <div className="App">
      <RouteClient/>
      <RouteAdmin/>
    </div>
  );
}

export default App;
