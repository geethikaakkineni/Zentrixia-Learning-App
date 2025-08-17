// import { useState } from 'react';

// function Join() {
//   const [inputs, setInputs] = useState({});

//   const handleChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value; // get the actual value
//     setInputs((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     alert(JSON.stringify(inputs)); // display collected form data
//   };

//   return (
//     <div id="joinform">
//       <form onSubmit={handleSubmit}>
//         <label>
//           Full Name:
//           <input
//             type="text"
//             name="username"
//             value={inputs.username || ""}
//             onChange={handleChange}
//           />
//         </label>
//         <br />

//         <label>
//           Email:
//           <input
//             type="email"
//             name="email"
//             value={inputs.email || ""}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br />

//         <label>
//           Phone Number:
//           <input
//             type="tel"
//             name="phone"
//             value={inputs.phone || ""}
//             onChange={handleChange}
//             required
//           />
//         </label>
//         <br/>

//         <input type="submit" value="Join Now" />
//       </form>
//     </div>
//   );
// }

// export default Join;



// Join.jsx
import { useState } from 'react';

function Join() {
  const [inputs, setInputs] = useState({});

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(inputs));
  };

  return (
    <div id="joinform1">
      <div id="joinheading">
        Join Zentrixia Today!
      </div>
      <form id="joinform" onSubmit={handleSubmit}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          onChange={handleChange}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #bcbcbc',
            marginBottom: '15px',
            width: '450px',
            fontSize: '1.1rem'
          }}
        />
        <input
          name="email"
          type="email"
          placeholder="Your Email"
          onChange={handleChange}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #bcbcbc',
            marginBottom: '15px',
            width: '450px',
            fontSize: '1.1rem'
          }}
        />
        <input
          name="Interested Course"
          type="text"
          placeholder="Interested Course"
          onChange={handleChange}
          style={{
            padding: '10px',
            borderRadius: '8px',
            border: '1px solid #bcbcbc',
            marginBottom: '15px',
            width: '450px',
            fontSize: '1.1rem'
          }}
        />
        <button
          type="submit"
          style={{
            padding: '10px 24px',
            backgroundColor: '#07142d',
            color: '#fff',
            borderRadius: '8px',
            border: 'none',
            fontSize: '1.1rem',
            cursor: 'pointer',
            marginTop: '10px'
          }}
        >
          Join Now
        </button>
      </form>
    </div>
  );
}

export default Join;
