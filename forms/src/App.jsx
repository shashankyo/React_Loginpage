import { useState } from "react";
import "./app.css"
import FormInput from "./components/FormInput";

const App = () => {
    const [values,setValues] = useState({
        username:"",
        email:"",
        birthday:"",
        password:"",
        confirmPassword:"",
    });
   
    const inputs =[
        {
            id:1,
            name:"username",
            type:"text",
            placeholder:"Username",
            errorMessage:"Username shold be 3-16 characters and should not use any special character",
            lebel:"Username",
            patter:"^(?=.*[0-9])(?=.*[a-z])([a-z0-9_-]+)$",
            required:true,
        },

        {
            id:2,
            name:"email",
            type:"text",
            placeholder:"Email",
            errorMessage:"It should be a valid email address",
            lebel:"Email"
        },
        {
            id:3,
            name:"birthday",
            type:"date",
            placeholder:"Birthday",
            patter:"^(?=.*[0-9])(?=.*[a-z])([a-z0-9_-]+)$",
            lebel:"Birthday",
            required:true,

        },
        {
            id:4,
            name:"password",
            type:"password",
            placeholder:"Password",
            errorMessage:"Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character ",
            lebel:"Password",
            patter:"^(?=.*[0-9])(?=.*[a-z])([a-z0-9_-]+)$",
            required:true,

        },
        {
            id:5,
            name:"confirmPassword",
            type:"password",
            placeholder:"Confirm Password",
            errorMessage:"Password dont't match",
            lebel:"Confirm Password",
            required:true,
            pattern:values.password,

        }
    ]

    // const usernameRef = useRef();

    
    // console.log("re-rendered")
    const handleSubmit = (e)=> {
        e.preventDefault();
        // console.log(usernameRef)
        // const data = new FormData(e.target)
        // console.log(Object.fromEntries(data.entries()))
    };

    const onChange = (e) => {
        setValues({...values, [e.target.name]:e.target.value})
    };

    console.log(values);
    return (
    <div className="app">
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            {inputs.map((input) => (
            <FormInput
             key={input.id}
             {...input}
              value= {values[input.name]}
               onChange={onChange}/>
            ))}
            {/* <FormInput name = "email" placeholder="Email"/>
            <FormInput name = "fullname" placeholder="Full Name"/>
            <FormInput name = "sth" placeholder="Sth else"/> */}

            <button>Submit</button>
        </form>
        </div>
    );
};

export default App;