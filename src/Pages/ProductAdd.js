import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
    const [account, setAccount] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setAccount(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://localhost:7174/api/Products`, account)
            .then(() => {
                navigate("/account");
            });
    }

    return (
        <>
            <Form className="col-md-4" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Tên:</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Giá:</Form.Label>
                    <Form.Control type="text" name="price" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Discount:</Form.Label>
                    <Form.Control type="text" name="discount" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Stock:</Form.Label>
                    <Form.Control type="text" name="Stock" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>IsAdmin:</Form.Label>
                    <Form.Control type="switch" name="isadmin" onChange={handleChange} />
                </Form.Group>
                <div className="mt-2">
                    <Button type="submit" variant="success">Thêm</Button>
                </div>
            </Form>
        </>
    );
}

export default ProductAdd;