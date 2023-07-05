import React, { useState } from 'react'
import './Prime.css'
function Prime() {
    const [value, setValue] = useState("");
    const [result, setResult] = useState("");

    const handleChange = e => {
        setValue(e.target.value);
        setResult("");
    }

    const isPrime = num => {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    }

    const handleClick = _ => {
        if (isNaN(value)) {
            setResult("ERROR");
        } else {
            const res = isPrime(parseInt(value, 10)) ? "YES" : "NO";
            setResult(res);
        }
    }

    let text = "";
    let classValue = "";

    if (result === "YES") {
        text = `${value} is a prime number`;
        classValue = "success panel";
    } else if (result === "NO") {
        text = `${value} is not a prime number`;
        classValue = "error panel";
    } else if (result === "ERROR") {
        text = `${value} is not a number`;
        classValue = "error panel";
    }

    return (
        <div className="Peime">
            <div>
                <p>Enter number to verify prime number</p>
                <input type="text" className="input" value={value} onChange={handleChange} />
            </div>
            <br></br>
            <div>
                <button className="button" onClick={handleClick}>Check</button>
            </div>
            <div className={classValue}>{text}</div>
        </div>
    );
}
export default Prime