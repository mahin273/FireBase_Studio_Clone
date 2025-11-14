
import { Routes ,Route} from 'react-router-dom'
import { CreateProject } from './pages/CreateProject'
import { CodePlayground } from './pages/CodePlayground'

export const Router =()=>{
    return(
    <Routes>
        <Route path='/'element={<CreateProject />}/>
        <Route path='/project/:projectId' element={<CodePlayground />}/>
     </Routes>
        
    )
     
}