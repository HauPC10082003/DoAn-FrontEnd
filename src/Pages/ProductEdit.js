import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import axiosClient from "../Component/axiosClient";

const ProductEdit = () => {
    const [product, setProducts] = useState({});
    
    const navigate = useNavigate();

    var {id} = useParams();

    useEffect(()=>{
        axiosClient.get(`/products/${id}`)
            .then(res => setProducts(res.data))
    },[id])

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
        axiosClient.put(`/products/${id}`, product)
            .then(() => navigate("/products"));
    }
    return ( 
        <>
            <Form className="col-md-4" onSubmit={handleSubmit} >
                <Form.Group>
                    <Form.Label>SKU:</Form.Label>
                    <Form.Control type="text" name="sku" value={product.sku} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tên Sản Phẩm:</Form.Label>
                    <Form.Control type="text" name="name" value={product.name} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tác giả:</Form.Label>
                    <Form.Control type="text" name="description" value={product.description} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Giá:</Form.Label>
                    <Form.Control type="text" name="price" value={product.price} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Tồn Kho:</Form.Label>
                    <Form.Control type="text" name="stock" value={product.stock} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Image:</Form.Label>
                    <Form.Control type="file" name="image" />
                </Form.Group>
                <Form.Group>
                    <Form.Check type="switch" label = "Còn hoạt động" name="status" onChange={handleChecked} checked = {product.status}/>
                </Form.Group>
                <Form.Group>
                    <Form.Label>Content:</Form.Label>
                    <Form.Control type="text" name="content" value={product.content} onChange={handleChange} />
                </Form.Group>
                <Button type="submit" variant="success" onClick={handleSubmit} style={{marginTop : '10px'}}>
                    <FontAwesomeIcon icon={faCheck}/> Update
                </Button>
            </Form>
        </>
    );
}
 
export default ProductEdit;