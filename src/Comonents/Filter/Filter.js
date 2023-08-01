import React from "react";

//We make a Filter as a re-usable component which is re-used in Table-1, 2 & 3
const Filter = ({ filteredData, deleteItem }) => {

    const hrStyle = { width: "65%", border: "0", height: "3px", background: "#095484", backgroundImage: "linear-gradient(to right, #ccc, #095484, #ccc)" }

    return (
        <div>
            <hr style={hrStyle} />
            {filteredData.map((item) => {
                return (
                    <div key={`${item.orderId}-${item.itemName}-${item.location}`}>
                        <li id={`${item.orderId}-${item.itemName}-${item.location}`}>
                            Order ID : {item.orderId}  --  Dish Name : {item.itemName}  --  Price : {item.price}
                            {/* <button onClick={() => editItem(`${item.orderId}${item.itemName}${item.location}`)}>Edit Item</button> */}
                            <button onClick={() => deleteItem(`${item.orderId}-${item.itemName}-${item.location}`)}>Delete Item</button>
                        </li>
                    </div>
                );
            })}
        </div>
    )
}
export default Filter;