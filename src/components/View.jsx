import axios from 'axios'
import React, { useEffect, useState } from 'react'

const View = () => {
    const [datas,changedata]=useState(
        [

        ]
    )
    const fetchData=()=>{
        axios.post("http://localhost:8084/view").then(
            (response)=>{
                changedata(response.data)
                console.log(response.data)
            }
        ).catch(
            (error)=>{
                console.log(error.message)
            }
        )
    }
    useEffect(()=>{fetchData()},[])
  return (
    <div>
         <div class="container">
        <div class="row">
            <div class="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-info table-hover">
                    <thead>
                      <tr>
                       
                        <th scope="col"> title</th>
                        <th>description</th>
                        <th>duration</th>
                        <th>date</th>
                        <th scope="col">venue</th>
                        <th>trainer name</th>
                       
                      
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {datas.map(
                        (value,index)=>{
                          return <tr>
                          <th scope="row">{value.title}</th>
                          
                          <td>{value.description}</td>
                          <td>{value.duration}</td>
                          <td>{value.date}</td>
                          <td>{value.venue}</td>
                          <td>{value.trainername}</td>
                          
                        </tr>
                        }
                      )}
                  
                    </tbody>
                  </table>
            </div>
        </div>
    </div>
    </div>
  )
}

export default View