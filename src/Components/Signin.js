import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Card, Button } from "reactstrap";
import { useNavigate } from "react-router-dom";


function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  const onSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/admin/signin`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        <h2>Signin</h2>
        <Card className="my-10" style={{ width: "18rem", color:"" }}>
          <div>
            <Form onSubmit={onSubmit} >
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
                <Button color="primary" type="submit">Submit</Button>
                <Button color="primary" onClick={() => navigate("/signup")}>Signup</Button>
              </div>
            </Form>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default Signin;


