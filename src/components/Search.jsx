import axios from 'axios'
import React, { useState } from 'react'

const Search = () => {
    const [datas,changedata]=useState(
        {
            "title":""
        }
    )
    const [result,setResult]=useState(
        [
            
        ]
    )

    const deleteCourse=(id)=>{
        let input={"_id" : id }
        axios.post("http://localhost:8084/delete",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("succesfully deleted")
                } else {
                    alert("error")
                }
            }
        ).catch()

    }
    // value fetching
     const inputHandler=(event)=>{
        changedata({...datas,[event.target.name]:event.target.value})
    }
    // search button event
    const readValue=()=>{
        console.log(datas)
        axios.post("http://localhost:8084/search",datas).then(
            (response)=>{
                setResult(response.data)
            }

        ).catch(
            (error)=>{
                console.log(error)
            }
        ).finally()

    } 
  return (
    <div>
        <div className="container">
            <div className="row g-3">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">course title</label>
                <input type="text" className="form-control" name='title' value={datas.title} onChange={inputHandler}/>
            </div>
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <button className="btn btn-secondary" onClick={readValue}>Search</button>
            </div>
            </div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table">
                <thead>
                    <tr>
                    <th scope="col">title</th>
                    <th scope="col">description</th>
                    <th scope="col">date</th>
                    <th scope="col">duration</th>
                    <th>venue</th>
                    <th>trainer name</th>
                    </tr>
                </thead>
                <tbody>
                    {result.map(
                        (value,index)=>{
                            return <tr>
                            <th >{value.title}</th>
                            <td>{value.description}</td>
                            <td>{value.date}</td>
                            <td>{value.duration}</td>
                            <td>{value.venue}</td>
                            <td>{value.trainername}</td>
                            <button className="btn btn-danger" onClick={()=>{deleteCourse(value._id)}}>Delete</button>
                            </tr>
                        }
                    )}
                    
                    
                </tbody>
                </table>
                </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default Search