import React, {useState} from "react";
import avtImage from "../img/avt.png"

export default function CustomerProfile(props) {
    const [customerName, setCustomerName] = useState("John Doe");
    return <div className={"d-flex align-items-center flex-column ml-2"}>
        <img src={avtImage} width={40} height={40} />
        <p className={"font-weight-bold"}>{customerName}</p>
    </div>
}