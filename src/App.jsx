
import { useState } from 'react';
import './App.scss'
import Comments from './components/Comments/Comments';
import Products from './components/Products/Products';
import TicTac from './components/TicTac/TicTac';

const initialValues = {
   firstName:"",
   lastName:"",
   email:"",
};
let initialComments = {
  name: "",
  textarea: "",
    
};

function App() {

  const[formvalues, setFormValues] = useState(initialValues);
  const [count, setCount] = useState(0);
  const [productname, setProductName] = useState ("Dior");
  const [comments, setComments] = useState([]);

 

  function handleFormSubmit(event){
    event.preventDefault();
    console.log("First Name:", formvalues.firstName);
    console.log("Last Name:", formvalues.lastName);
     console.log("Email:", formvalues.email);
    //  console.log(event.target.name.value); //// idon't need to use this(event.target.name.value) because the state already has the values below
   }
   function handleInputChange (event){
    const { name, value} = event.target;


    setFormValues({
      ...formvalues,
      [name]: value,
    });
  }

  
  function handleincrementCount(){
    setCount(count + 1);
    console.log("button Clicked")
    
  }

  function handleNameChange (){
    setProductName("Kylie Lipstick");
    console.log("Fenyt button Clicked")
  }

  function handleCommentSubmit(event){
    event.preventDefault();
   
    
    const newComment = {
      name: event.target.name.value,
      textarea: event.target.textarea.value,
    };
    setComments([...comments,newComment]); ///// this is reason why i can't pass newComment as props is because the newComment variable is local to the handleCommentSubmit function
                                            /////The comments state already contains all the submitted comments, including the newComment. When you update the comments state with setComments([...comments, newComment]), 
                                            ///React automatically re-renders the component, and the comments prop in <Comments /> gets updated.
    console.log("Name:", event.target.name.value ,
     "Comment:", event.target.textarea.value );

    event.target.reset();
  }

 
  return (
    <>
    
   <form onSubmit={handleFormSubmit}>

    <label htmlFor="First Name">First Name</label>

    <input onChange={handleInputChange} 
    type="text" 
    name='firstName' 
    placeholder='First Name'
    value = {formvalues.firstName}
    
    />

    <label htmlFor="First Name">Last Name</label>
    <input onChange={handleInputChange}
    type="text" 
    name='lastName' 
    placeholder='Last Name'
    value = {formvalues.lastName}
    
    />

    <label htmlFor="Email">Email</label>
    <input onChange={handleInputChange}
    type="text" 
    name='email'
    placeholder='email'
    value = {formvalues.email}
    
    />

    <button>Submit</button>
   </form>

   <section className='increment'>

        <h1>This is Increment section</h1>

       <p className='increment-number' >We start from :{count} </p>
       <button onClick= {handleincrementCount} >Submit</button>

   </section>
   <Products onClick={handleNameChange} Productname = {productname}/>
   <Comments onSubmit={handleCommentSubmit}   comments={comments}/>
   <TicTac />
   </>
  )
}

export default App
