import React from "react";
import Filter from "../Filter/Filter";

const Table3 = ({ formData, deleteItem, hrStyle }) => {

    const filteredData = formData.filter((item) => item.location === "Table-3");

    return (
        <div>
            <h2>Table-3</h2>
            <Filter deleteItem={deleteItem} filteredData={filteredData} />
        </div >
    )
}
export default Table3;