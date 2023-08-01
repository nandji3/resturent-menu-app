import React from "react";
import Filter from "../Filter/Filter";



const Table1 = ({ formData, deleteItem }) => {

    const filteredData = formData.filter((item) => item.location === "Table-1");

    return (
        <div>
            <h2>Table-1</h2>
            <Filter deleteItem={deleteItem} filteredData={filteredData} />
        </div>
    )
}
export default Table1;