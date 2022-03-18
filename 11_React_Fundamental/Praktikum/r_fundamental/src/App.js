import Todoapp from './pages/Todoapp'; 
import {dataUser} from "./dataApp"


function App() {
  return (
    <> 
    <Todoapp users={dataUser}/>
    </>
  );
}

export default App;
 