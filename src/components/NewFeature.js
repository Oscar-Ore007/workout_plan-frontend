import React , {useState} from 'react'



const NewFeature = () => {
    let [textCount, setTextCount] = useState(0);

    return (
        <div>
            <input type='text'
                onChange={(e) => setTextCount(e.target.value.length)}
                placeholder='Enter some text here!'
                ></input>
                <br></br>
                <button>text count:{textCount}</button>
            
        </div>
    )
}

export default NewFeature; 

