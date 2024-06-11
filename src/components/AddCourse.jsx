import axios from 'axios'
import React, { useState } from 'react'

const AddCourse = () => {
   
           
            const [datas,changedata]=useState(
                {
                    "title":"",
                    "description":"",
                    "date":"",
                    "duration":"",
                    "venue":"",
                    "trainername":""
                }
            )
           
            const inputHandler=(event)=>{
                changedata({...datas,[event.target.name]:event.target.value})
            }
            const readValue=()=>{
                console.log(datas)
                axios.post(" http://localhost:8084/add",datas).then(
                    (response)=>{
                        console.log(response.data)
                        if (response.data.status=="success") {
                            alert("success")
                        } else {
                            alert("error")
                        }
                    }
                ).catch()
        
            } 
        
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" name='title' value={datas.title} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">description</label>
                    <input type="text" className="form-control" name='description' value={datas.description} onChange={inputHandler}/>
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <label htmlFor="" className="form-label" >date</label>
                        <input type="date" name="date" value={datas.date} onChange={inputHandler} id="" className="form-control" />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">duration</label>
                    <input type="text" className="form-control" name='duration' onChange={inputHandler} value={datas.duration} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">venue</label>
                    <input type="text" className="form-control" name='venue' onChange={inputHandler} value={datas.venue} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label htmlFor="" className="form-label">Trainername</label>
                    <input type="text" className="form-control" name='trainername' onChange={inputHandler} value={datas.trainername} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                        <button className="btn btn-primary" onClick={readValue}>Add</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddCourse