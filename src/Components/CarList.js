import { useSelector, useDispatch } from "react-redux"
import { deleteCar } from "../store"

function CarList() {
    const dispatch = useDispatch()
    const {cars,name} = useSelector(({ form , cars: { cars, searchTerm } }) => {
        const filteredCars = cars.filter((car) => car.name.toLowerCase().includes(searchTerm.toLowerCase()))
        
        return {
            cars: filteredCars,
            name:form.name
        }
    })
    const handleDeleteCar = (car) => {
        dispatch(deleteCar(car.id))
    }

    const renderedCars = cars.map(car => {
        const bold = name && car.name.toLowerCase().includes(name.toLowerCase())
        return (<div key={car.id} className={`panel ${bold && "bold"}`}>
            <p>{car.name} - ${car.cost}</p>
            <button className="button is-danger"
                onClick={() => handleDeleteCar(car)}>
                Delete
            </button>
        </div>)
    })
    return (<div className="car-list" >{renderedCars}</div>)
}

export default CarList