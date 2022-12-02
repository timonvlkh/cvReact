import React, { Component } from 'react'
import './App.css'

class PersonalInfo extends Component{  

    render(){     
        return(
          <div>
            <h1>Имя : Теймур</h1>
            <h1>Фамилия : Валихан</h1>
            <h1>Возраст : 20 </h1>
            <h1>Место жительство : Баку</h1>
          </div>
        )
    }
}

export default PersonalInfo;