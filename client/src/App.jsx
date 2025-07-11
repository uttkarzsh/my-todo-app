import Form from "./Form.jsx";
import Task from "./Task.jsx";


function App() {
  const n = "hadksjfhsk";

  return (<>
    <Form/><Task description={n} status="finished"/>
    </>
  );
}

export default App

