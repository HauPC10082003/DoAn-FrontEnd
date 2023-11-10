import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axiosClient from "../Component/axiosClient";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [account, setAccount] = useState({});
  const handleChange = (e) => {
    setAccount((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axiosClient
      .post(`/Users/login`, account)
      .then((res) => localStorage.setItem("jwt", res.data.token))
      .then(() => {
        navigate("/products");
    });
  };

  return (
    <>
      <Form className="COL-MD-3">
        <Form.Group className="mb-3">
          <Form.Label>Tên đăng nhập</Form.Label>
          <Form.Control type="text" name="username" onChange={handleChange} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Mật khẩu</Form.Label>
          <Form.Control
            type="password"
            name="password"
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3 buttonlogin">
        <Button type="submit" variant="success" onClick={handleSubmit}>
          <FontAwesomeIcon icon={faCheck} />
          Đăng nhập
        </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Login;