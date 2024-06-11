import React from 'react'

const Search = () => {
    const [datas,changedata]=useState(
        {
            "title":""
        }
    )
     const inputHandler=(event)=>{
        changedata({...datas,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(datas)
    }
  return (
    <div>
        <div className="container">
            <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Book title</label>
                <input type="text" className="form-control" name='title' value={datas.title} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-secondary" onClick={readValue}>Search</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Search