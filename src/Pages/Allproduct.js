import {
  faDeleteLeft,
  faEdit,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";

const Allproduct = () => {
  const [products, setproducts] = useState([]);
  const [selectedProducts, setselectedProducts] = useState({});

  useEffect(() => {
    axios
      .get("https://localhost:7174/api/Products  ") //đường dẫn api bỏ vô
      .then((res) => setproducts(res.data));
  }, []);
  //Trangj thai m,odel
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true);
    setselectedProducts(user);

    console.log(user);
  };
  return (
    <>
      <Table>
        <thead>
          <tr>
            <th>SKU</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Image</th>
            <th>Functions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => {
            return (
              <tr>
                <td>{item.sku}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.stock}</td>
                <img
                 
                  style={{
                    width: "100px", // Đặt chiều rộng thành 100%
                    height: "auto", // Đảm bảo tỷ lệ khung hình không bị biến đổi
                    border: "1px solid #ccc", // Đường viền 1 pixel màu xám
                    borderRadius: "5px", // Góc bo tròn 5 pixel
                  }}
                  src={"https://localhost:7283/images/product/" + item.image}
                  alt={`Product Image`}
                />

                <td>
                {/* <Link to={`details/${item.id}`}> */}
                  <Button
                    variant="btn btn-info"
                     onClick={() => handleShow(item)}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faUser} />
                  </Button>
                  {/* </Link> */}

                  <Button variant="btn btn-success" onClick={() => handleShow(item)}>
                    {" "}
                    Edit
                  </Button>
                  <Button
                    variant="btn btn-danger"
                    onClick={() => handleShow(item)}
                  >
                    {" "}
                    <FontAwesomeIcon icon={faDeleteLeft} />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PRODUCT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <img
                    
                    src={"https://localhost:7283/images/product/" +selectedProducts.image}
                    className="w-100"
                    
                  />
              {/* {selectedProducts &&
              selectedProducts.images &&
              selectedProducts.images.length > 0 ? (
                selectedProducts.images.map((image, index) => (
                  <img
                    key={index}
                    src={"https://localhost:7249/images/product/" +selectedProducts.image}
                    className="w-100"
                    alt={`Product Image ${index}`}
                  />
                ))
              ) : (
                <div>Không có ảnh được tìm thấy.</div>
              )} */}
            </Col>
            <Col md={4}>
              <dl>
                <dt>Product Name:</dt>
                <dd>{selectedProducts.title}</dd>

                <dt>DESCRIPTION:</dt>
                <dd>{selectedProducts.description}</dd>
                <dt>PRICE:</dt>
                <dd>{selectedProducts.price}</dd>
                <dt>DISCOUNT:</dt>
                <dd>{selectedProducts.discountPercentage}</dd>
                <dt>STOCK:</dt>
                <dd>{selectedProducts.stock}</dd>
                <dt>BRAND:</dt>
                <label>{selectedProducts.brand}</label>
              </dl>
            </Col>
            <Col md={4}></Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Allproduct;
