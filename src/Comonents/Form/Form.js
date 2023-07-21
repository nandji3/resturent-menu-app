import React, { useEffect, useState } from "react";
import DisplayItem from "../Display/DisplayItem";

const initialItem = {
    orderId: "",
    itemName: "",
    price: "",
    location: ""
}

//To get all formData from localStorage to show on screen
const getLatestFormDataFetchedFromLocalStorage = () => {
    let listOfArrayObjectOfFormData = JSON.parse(localStorage.getItem("data"));
    if (listOfArrayObjectOfFormData) {
        return listOfArrayObjectOfFormData;
    }
    else {
        return [];
    }
}

const Form = () => {

    const [formData, setFormData] = useState(getLatestFormDataFetchedFromLocalStorage())
    const [item, setItem] = useState(initialItem);
    // const [editId, setEditId] = useState();
    // const [table, setTabel] = useState();
    console.log(item)

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setItem((prevItem) => {
            return { ...prevItem, [name]: value }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (item.orderId && item.itemName && item.price && item.location) {
            setFormData((prevFormData) => {
                return ([...prevFormData, item])
            });
        }
        setItem(initialItem);
    }

    //To set formData into localStorage
    useEffect(() => {
        localStorage.setItem("data", JSON.stringify(formData));
    }, [formData])

    // const editItem = () => {

    // }

    const deleteItem = (id) => {
        // console.log(id);
        const updatedFormData = formData.filter((item) => {
            return (`${item.orderId}-${item.itemName}-${item.location}` !== id)
        })
        setFormData(updatedFormData)
    }

    return (
        <>
            <div className="form">
                <form className='form' onSubmit={handleSubmit}>
                    <div className='form-control'>
                        <label >
                            Unique Order Id :
                            &nbsp;<input type="number" name="orderId" value={item.orderId} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label>
                            Choose Dish :
                            &nbsp;<input type="text" name="itemName" value={item.itemName} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label>
                            Price :
                            &nbsp;<input type="number" name="price" value={item.price} onChange={handleChange} required />
                        </label>
                    </div>
                    <div className='form-control'>
                        <label>
                            Choose a Table :
                            &nbsp;
                            <select name="location" defaultValue={"Table-1"} onChange={handleChange} required>
                                <option value="Table-1">Select Table</option>
                                <option value="Table-1" >Table-1</option>
                                <option value="Table-2" >Table-2</option>
                                <option value="Table-3" >Table-3</option>
                            </select>
                        </label>
                    </div>
                    <button type='submit'>Add Item</button>
                </form >
            </div >
            <hr />
            <h2>Display Item</h2>
            <div>
                <DisplayItem formData={formData} deleteItem={deleteItem} />
            </div>
        </>
    )
}
export default Form;