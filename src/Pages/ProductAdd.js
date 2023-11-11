import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axiosClient from "../Component/axiosClient";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const ProductAdd = () => {
    const [product, setProducts] = useState({});


    const navigate = useNavigate();

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setProducts(prev => ({ ...prev, [name]: value }));
    }


    const handleChecked = (e) => {
        let name = e.target.name;
        let value = e.target.checked;
        setProducts(prev => ({ ...prev, [name]: value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosClient.post(`/products`, product)
            .then(() => navigate("/products"));
    }
    

    return (
        <>
            <Form className="col-md-4" onSubmit={handleSubmit} >
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
                    <Form.Control type="text" name="author" onChange={handleChange} />
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
                    <Form.Label>Loại:</Form.Label>
                    <Form.Control type="text" name="producttypeid" onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image:</Form.Label>
                    <Form.Control type="file" name="image" />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="switch" label = "Còn hoạt động" name="status" checked onChange={handleChecked}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content:</Form.Label>
                    <Form.Control type="text" name="content" onChange={handleChange} />
                </Form.Group>
                <Button type="submit" variant="success" onClick={handleSubmit} style={{marginTop : '10px'}}>
                    <FontAwesomeIcon icon={faPlus}/> Thêm
                </Button>
            </Form>
        </>
    );
}

export default ProductAdd;