import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ProductAdd = () => {
    const [product, setProducts] = useState({});

    const navigate = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProducts(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`https://localhost:7174/api/Products`, product)
            .then(() => {
                navigate("/products");
            });
    }

    return (
        <>
            <Form className="col-md-4" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>SKU:</Form.Label>
                    <Form.Control type="text" name="sku" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tên Sản Phẩm:</Form.Label>
                    <Form.Control type="text" name="name" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tác giả:</Form.Label>
                    <Form.Control type="text" name="description" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Giá:</Form.Label>
                    <Form.Control type="text" name="price" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tồn Kho:</Form.Label>
                    <Form.Control type="text" name="stock" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image:</Form.Label>
                    <Form.Control type="file" name="image" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Status:</Form.Label>
                    <Form.Control type="text" name="status" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content:</Form.Label>
                    <Form.Control type="text" name="content" onChange={handleChange} />
                </Form.Group>
                <div className="mt-2">
                    <Button type="submit" variant="success">Thêm</Button>
                </div>
            </Form>
        </>
    );
}

export default ProductAdd;