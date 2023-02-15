import { useSelector ,useDispatch} from "react-redux"
import { deleteCar } from "../store"

function CarList() {
    const dispatch = useDispatch()
    const carsList = useSelector((state) => {
        return state.cars.cars
    })
    const handleDeleteCar = (car) => {
        dispatch(deleteCar(car.id))
    }

    const renderedCars = carsList.map(car => {
        return (<div key={car.id} className="panel">
            <p>{car.name} - ${car.cost}</p>
            <button className="button is-danger"
                onClick={()=> handleDeleteCar(car)}>
                Delete
            </button>
        </div>)
    })
    return (<div className="car-list" >{renderedCars}</div>)
}

export default CarList