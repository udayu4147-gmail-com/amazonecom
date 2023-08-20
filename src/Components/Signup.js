import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Card, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


function Signup() {
  const [firstName, setFistName] = useState("");
  const [lastName, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/admin/signup`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName,
          lastName,
          email,
          password,
        }),
      }
    );

    if (response.status === 200) {
      const data = await response.json();
     localStorage.setItem("token", data.token);
     navigate("/dashboard"); 
    }
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Signup</h2>
        <p>Places Enter Your Valid Details...!</p>
        <Card className="my-10" style={{ width: "18rem" }}>
          <div>
            <Form onSubmit={onSubmit}>
            <FormGroup>
              <Label for="firstname">FirstName</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="firstname"
                type="text"
                value={firstName}
                onChange={(e) => setFistName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastname">LastName</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="lastname"
                type="text"
                value={lastName}
                onChange={(e) => setLastname(e.target.value)}
              />
            </FormGroup>
              <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input
                  id="exampleEmail"
                  name="email"
                  placeholder="Enter Valid Email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </FormGroup>
              <FormGroup>
                <Label for="Password">Password</Label>
                <Input
                  id="Password"
                  name="password"
                  placeholder="Enter password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                />
              </FormGroup>
              <div>
                <Button color="primary" type="submit" >Submit</Button>
                <Button color="primary" onClick={() => navigate("/signin")} >Signin</Button>
              </div>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Signup;





// import React, { useState, useRef } from "react";
// import { Form, FormGroup, Label, Input, Card, Button } from "reactstrap";
// import { useAuth } from "./auth";
// import Navigation from "./Navigation";


// function Signup() {
//   const { formValue, handleChange, handleSubmit } = useAuth();
//   const inputRef = useRef();
//   const { firstname, lastname, email, password } = formValue;

//   async function handleSignUp() {
//     const data = {
//       firstname: firstname,
//       lastname: lastname,
//       email: email,
//       password: password,
//     };
//     try {
//       const response = await fetch("http://localhost:2000/api/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (response.ok) {
//         const result = await response.json();
//         localStorage.setItem("token", JSON.stringify(result.token));
//         console.log("Success:", result);
//         console.log("go to dashbord");
//         window.location.reload();
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   }

//   return (
//     <div>
//     <Navigation />
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "center",
//         }}
//       >
//         <h1>Signup</h1>
//         <Card
//           className="my-2"
//           style={{
//             width: "18rem",
//           }}
//         >
//           <Form>
//             <FormGroup>
//               <Label for="firstname">FirstName</Label>
//               <Input
//                 id="firstname"
//                 name="firstname"
//                 placeholder="firstname"
//                 type="text"
//                 value={formValue.firstname}
//                 onChange={(e) => handleChange("firstname", e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="lastname">LastName</Label>
//               <Input
//                 id="lastname"
//                 name="lastname"
//                 placeholder="lastname"
//                 type="text"
//                 value={formValue.lastname}
//                 onChange={(e) => handleChange("lastname", e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="exampleEmail">Email</Label>
//               <Input
//                 id="exampleEmail"
//                 name="email"
//                 placeholder="Enter Valid Email"
//                 type="text"
//                 ref={inputRef}
//                 value={formValue.email}
//                 onChange={(e) => handleChange("email", e.target.value)}
//               />
//             </FormGroup>
//             <FormGroup>
//               <Label for="password">Password</Label>
//               <Input
//                 id="password"
//                 name="password"
//                 placeholder="Enter password "
//                 type="text"
//                 ref={inputRef}
//                 value={formValue.password}
//                 onChange={(e) => handleChange("password", e.target.value)}
//               />
//             </FormGroup>
//             <div>
//               <Button
//                 color="primary"
//                 href="/Signin"
//                 value={formValue.password}
//                 onChange={(e) => handleSignUp("p assword", e.target.value)}
//               >
//                 Signin
//               </Button>

//               <Button
//                 color="primary"
//                 onClick={handleSubmit}
//                 disabled={
//                   !formValue.email ||
//                   !formValue.password ||
//                   !formValue.firstname ||
//                   !formValue.lastname
//                 }
//               >
//                 Submit
//               </Button>
//             </div>
//           </Form>
//         </Card>
//       </div>
//     </div>
//   );
// }

// export default Signup;
