import React from "react";
import Table1 from "../../Table/Table1";
import Table2 from "../../Table/Table2";
import Table3 from "../../Table/Table3";

const DisplayItem = ({ formData, editItem, deleteItem }) => {

    return (
        <div>
            <Table1 deleteItem={deleteItem} formData={formData} />
            <Table2 deleteItem={deleteItem} formData={formData} />
            <Table3 deleteItem={deleteItem} formData={formData} />
        </div>
    )
}
export default DisplayItem;