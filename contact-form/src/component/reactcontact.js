import React, { useState } from 'react';

const ContactUs = () => {
  const [USER, setUSER] = useState({
    name: '',
    phone: '',
    address: '',
    email: '',
    message: '',
  });



  const handleChange = (e) => {
    const { name, value } = e.target;
    setUSER({
      ...USER,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to an API or backend)
    console.log('Form Data:', USER);
  };

    const postData=async(e)=>{
        e.preventDefault();
        const {name,email,phone,address,message}=USER;

if(name && email && phone && address && message){
        const res = await fetch(
          "https://login-page-12f43-default-rtdb.firebaseio.com/loginpageform.json",{
              method:"POST",
              headers:{
                  "Content-Type":"application/json",
              },
              body:JSON.stringify({
                  name,
                  phone,
                  address,
                  email,
                  message
              }),
          }
        );
  
    if(res){
      setUSER({
       name:"",
       phone:"",
       address:"",
       email:"",
       message:""
      });
      alert("Data Stored Successfully");
    }
}else{
    alert("Plz Fill All Blanks");
}
  
  };
  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }} method='POST'>
      <div style={{display:'flex',flexDirection:'column'}}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={USER.name}
            onChange={handleChange}
            required
            style={{ marginBottom: '15px' }}
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={USER.phone}
            onChange={handleChange}
            required
            style={{ marginBottom: '15px' }}
          />
        </label>
        </div>
        <label>
          Address:
          <input
            type="text"
            name="address"
            value={USER.address}
            onChange={handleChange}
            required
            style={{ marginBottom: '15px' }}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={USER.email}
            onChange={handleChange}
            required
            style={{ marginBottom: '15px' }}
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={USER.message}
            onChange={handleChange}
            required
            style={{ marginBottom: '15px' }}
          />
        </label>
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px',fontSize:'20px'}}onClick={postData}>
          Submit
        </button>
      </form>
      </div>
  );
};

export default ContactUs;
