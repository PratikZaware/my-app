import React from 'react'
import {useState} from 'react';


export default function Myform()
{
    // state
    // const [text, setText] = useState("Enter Text in me");
    const [state, setstate] = useState("Enter Text");
    function BtnClicked()
    {
        setstate(state.toUpperCase())
    }
    function handleMe(event)
    {
        setstate(event.target.value);
    }

    function ClearEverything()
    {
        setstate("");
    }
    return(
        <>
            <div className="container">
                <textarea name="area1" value={state} onChange={handleMe} id="id1" cols="30" rows="10"></textarea>
            </div>
            <div>
                <button onClick={BtnClicked}>Convert To UpperCase</button>
            </div>

            <div>
                <button onClick={ClearEverything}>ClearEverything</button>
            </div>
            <div>
                <h1>Facts about your text</h1>
                <br />
                <p>No of words={state.split(" ").length} No of characters={state.length}</p>

            </div>
        </>
        
    );
}