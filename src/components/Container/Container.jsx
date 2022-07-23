import React,{ useState ,useEffect} from 'react'
import "./Container.css";
import mail from "../../assets/mail.svg"
import map from "../../assets/map.svg"
import padlock from "../../assets/padlock.svg"
import phone from "../../assets/phone.svg"
import woman from "../../assets/woman.svg"
import womanAge from "../../assets/growing-up-woman.svg"
import axios from "axios"







const Container = () => {
    const[users,setUsers]=useState([]);
    // const[defaultImage,setImage]=useState()
    useEffect(()=>{
        changeUsers()
        
    },[]);

    
    
    
    const changeUsers=()=>{
        axios
        .get("https://randomuser.me/api/")
        .then((res)=>setUsers(res.data.results[0]))
        .catch((err)=> console.log(err));
        
        
        mouseMail()
        mouseAge()
        // setImage(users.picture?.large)
        mousePhone()
        mousePadlock()
        mouseName()
        
            
}

   

    console.log(users)
    
    const[data,setData]=useState()
    const[data2,setData2]=useState()
    const [text,setText]=useState()
    const mouseName=()=>{
        setText("My name is")
        setData(users.name?.first)
        setData2(users.name?.last)
    }
    const mouseMail=()=>{
        setText("My mail is")
        setData(users.email)
    }
    const mouseAge=()=>{
        setText("My age is")
        setData(users.dob?.age)

    }
    const mouseMap=()=>{
        setText("My street is")
        setData(users.location?.street?.name)
        setData2(users.location?.street?.number)

    }
    const mousePhone=()=>{
        setText("My phone is")
        setData(users.phone)
    }
    const mousePadlock=()=>{
        setText("My passsword is")
        setData(users.login?.password)
    }
    
    const[value,setValue]=useState(false)
      const [myuser, setMyuser] = useState([]);

    const handleClick = () =>{
        setValue(true)
        setMyuser([...myuser, users]);
        
        
       
    }










  return (
      <div>
    <div className="block">
    <div className="container">
      <img src={users.picture?.large} alt="random user" className="user-img" />
      <p className="user-title">{text}</p>
      <p className="user-value">{data} {data2}</p>
      <div className="values-list">
        <button className="icon" data-label="name" onMouseMove={mouseName}>
          <img src={woman} alt="user" id="iconImg" />
        </button>
        <button className="icon" data-label="email" onMouseMove={mouseMail}>
          <img src={mail} alt="mail" id="iconImg" />
        </button>
        <button className="icon" data-label="age" onMouseMove={mouseAge}>
          <img src={womanAge} alt="age" id="iconImg" />
        </button>
        <button className="icon" data-label="street" onMouseMove={mouseMap}>
          <img src={map} alt="map" id="iconImg" />
        </button>
        <button className="icon" data-label="phone" onMouseMove={mousePhone}>
          <img src={phone} alt="phone" id="iconImg" />
        </button>
        <button className="icon" data-label="password" onMouseMove={mousePadlock}>
          <img src={padlock} alt="lock" id="iconImg" />
        </button>
      </div>
      <div className="btn-group">
        <button className="btn" type="button" onClick={changeUsers}>
          new user
        </button>
        <button className="btn" type="button" onClick={handleClick}>
          add user
        </button>
      </div>
    
      <div style={{display: value ? "block": "none"}}>
        
        
        <table className="table">
        <thead>
          <tr className="head-tr">
            <th className="th">Firstname</th>
            <th className="th">Email</th>
            <th className="th">Phone</th>
            <th className="th">Age</th>
          </tr>
        </thead>
        <tbody>
        {myuser.map((user) => (
                <tr className="body-tr" key={user.email}>
                  <td>{user.name?.first}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.dob?.age}</td>
                </tr>
              ))}
          
        </tbody>
      </table>

    </div>
    </div>
  </div>
  </div>
  )
}

export default Container