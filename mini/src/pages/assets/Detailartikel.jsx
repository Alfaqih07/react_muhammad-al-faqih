import axios from "axios";
import { useParams } from 'react-router-dom';
const Test = () => {
  let { id } = useParams();
  return (
    <div>Test ID: {id}</div>
  );
}

// export default function Detailartikel(){
//     return(
//         <> 
        
//         </>
//     )
// }
export default Test