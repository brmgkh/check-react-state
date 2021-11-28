import react from 'react'
import './App.css'
import  'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

class app extends react.Component {

  state = {
    Personne : {fullName:'Maghraoui Brahim',bio:'...', avatar:'./avatarbrahim.png', profession :'developpeur js full stack' },
    shows : true }
  
    changeShows = () => {

      this.setState ({
      
        shows : null
      
      })}

      
render () { 

if (this.state.shows) {
return (
  <div className = "Profile">
    <h1>fullName : {this.state.Personne.fullName}</h1>
    <h2>bio : {this.state.Personne.bio}</h2>
    <img src={this.state.Personne.avatar} alt= "avatar brahim"/>
    <h2>profession : {this.state.Personne.profession}</h2>
<Button onClick = {this.changeShows}  style={ {textAlign:'center'}, {marginLeft:'170px'} } variant="secondary"> Cacher le Profile </Button>{' '}
  </div> ) } 

else{return (<div className = "pasProfile" style = { {color : '#CCD4DD'}}> <h1> pas de profile ! </h1> </div>)};
}}
export default app ;
