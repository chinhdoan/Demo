import {useState} from "react"


function Test(){


   //const a = ["TV","mouse","computer","box","cooker"]
    
    const [items,setItems] = useState(["TV","mouse","computer","box","cooker"])
    const [clicked,setClicked] = useState("false")
  
    const [newItem, setNewItem] = useState()
    const addItem = () => {
        console.log(newItem)
        console.log(items)
        setItems([...items,newItem])
    }

    const handleChange = (e) => {
        console.log(newItem)
        setNewItem(e.target.value)
        
    }
    return (
        <>
        <ul>
              {items.map( (it) => {
                return(<li>{it}</li>)
                })}
        </ul>
        <input type="text" id="lname" name="lname" onChange={handleChange}></input><br/><br/>
        <button onClick={addItem}>Add new</button>
        </>
    )
    
}

export default Test