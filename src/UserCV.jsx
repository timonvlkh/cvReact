import React, { Component } from 'react'
import './App.css'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import Contacts from './Contacts'

class UserCV extends Component{  
    

    render(){     
        
        return(
          <div>
            <PersonalInfo/>
            <Experience />
            <Contacts/>
          </div>
          
        )
    }
}

export default UserCV

