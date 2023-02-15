import CarForm from "./Components/CarForm"
import CarList from "./Components/CarList"
import CarSubmit from "./Components/CarSubmit"
import CarValue from "./Components/CarValue"

function App() {
    return (<div className="container is-fluid">
        <CarForm />
        <CarList /> 
        <CarSubmit />  
        <CarValue/>
    </div>)
}


export { App }