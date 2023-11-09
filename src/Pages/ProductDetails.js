import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
    const { id } = useParams();

    const [product, setproduct] = useState({});

    useEffect(() => {
        axios.get(`https://localhost:7174/api/Products/${id}`)
            .then(res => setproduct(res.data));
    });

    return (
        <>
 <Row    >
              <Col md={4}>
                {product &&
                product.images &&
                product.images.length > 0 ? (
                  product.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      className="w-100"
                      alt={`Product Image ${index}`}
                    />
                  ))
                ) : (
                  <div>Không có ảnh được tìm thấy.</div>
                )}
              </Col>
              <Col md={4}>
                <dl>
                  <dt>Product Name:</dt>
                  <dd>{product.name}</dd>
  
                  <dt>DESCRIPTION:</dt>
                  <dd>{product.description}</dd>
                  <dt>PRICE:</dt>
                  <dd>{product.price}</dd>
                 
                  <dt>STOCK:</dt>
                  <dd>{product.stock}</dd>
                 
                </dl>
              </Col>
              <Col md={4}></Col>
            </Row>

        </>
    );
}

export default ProductDetail;