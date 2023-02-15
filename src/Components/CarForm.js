import { useSelector, useDispatch } from "react-redux"
import { changeName, changeCost, addCar } from "../store"


function CarForm() {
    const dispatch = useDispatch()
    const { name, cost } = useSelector((state) => {
        return {
            name: state.form.name,
            cost: state.form.cost
        }
    })

    const handleChangeName = (event) => {
        dispatch(changeName(event.target.value))
    }

    const handleChangeCost = (event) => {
        const carCost = +event.target.value || 0
        dispatch(changeCost(carCost))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addCar({
            name, cost
        }))
    }
    return (<div className="car-form panel">
        <h4 className="subtitle is-3">Add Car</h4>
        <form onSubmit={handleSubmit}>
            <div className="field-group">
            <div className="field">
                <label className="label">Name</label>
                <input value={name} onChange={handleChangeName} className="input is-expanded"/>
            </div>
            <div className="field"> 
                <label className="label">
                    Cost
                </label>
                <input value={cost || ""} type="number" onChange={handleChangeCost}  className="input is-expanded"/>
            </div>
            <div className="field">
                <button className="button is-link">Submit</button>
            </div>
            </div>
        </form>
    </div>)
}

export default CarForm