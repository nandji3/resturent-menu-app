import React from "react";
import Filter from "../Comonents/Filter/Filter";

const Table2 = ({ formData, deleteItem, hrStyle }) => {

    const filteredData = formData.filter((item) => item.location === "Table-2");

    return (
        <div>
            <h2>Table-2</h2>
            <Filter deleteItem={deleteItem} filteredData={filteredData} />
        </div>
    )
}
export default Table2;