import React, { useState, useContext } from "react";
import { Button, Form, FormGroup, Label, Input, Card, CardBody } from "reactstrap";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../providers/UserProvider";
import "./Login.css"

export default function Login() {
  const history = useHistory();
  const { login } = useContext(UserContext);

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const loginSubmit = () => {
    login(email, password)
      .then(() => history.push("/"))
      .catch(() => {
          alert("Invalid email or password")
          history.push("/login")
      }
      )
      
  };
  const onKeyDown = () => {
    loginSubmit()
  }

  return (
    <>
    <main className="login-container">
    <div className="container pt-4">
      <div className="row justify-content-center">
        <Card className="col-sm-12 col-lg-6 login-card">
          <CardBody>
            <Form onSubmit={(e) => {
              e.preventDefault()
              loginSubmit()
            }}>
              <fieldset>
                <FormGroup>
                  <Label for="email">Email</Label>
                  <Input
                    id="email"
                    type="text"
                    onChange={(e) => {
                      e.preventDefault()
                      setEmail(e.target.value)
                    }}
                    onKeyDown={(e) => e.keyCode === 13 ? onKeyDown() : null}
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="password">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => e.keyCode === 13 ? onKeyDown() : null}
                  />
                </FormGroup>
                <FormGroup>
                  <Button className="login-btn">Login</Button>
                </FormGroup>
              </fieldset>
            </Form>
          </CardBody>
        </Card>
      </div>
    </div>
    </main>
    </>
  );
}