
const Form = ({setinputText,inputText,setTodos,todos,setStatus}) => {
    
    const inputHandler=(value)=>{
        setinputText(value)
    }
    const clickHandler=(e)=>{
        setTodos([...todos,{id:Math.floor(Math.random()*1000),text:inputText,isComplete:false}])
        e.preventDefault()
        setinputText("")
    }
    return (
        <div>
            <form className='form'>
                 <input type="text" value={inputText} onChange={(e)=>inputHandler(e.target.value)}/>
                 <button onClick={clickHandler}>ADD</button>
                  <select onChange={(e)=>setStatus(e.target.value)}>
                     <option value="All" key="all">All</option>
                     <option value="complete" key="com">Complete</option>
                     <option value="incomplete" key="un">Incomplete</option>
                  </select>
            </form>
        </div>
    );
}

export default Form;