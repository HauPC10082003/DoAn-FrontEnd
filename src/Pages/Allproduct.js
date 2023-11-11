import {
  faEdit,
  faPlus,
  faTrash,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Col, Modal, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import axiosClient from "../Component/axiosClient";

const Allproduct = () => {
  const [products, setproducts] = useState([]);
  const [selectedProducts, setselectedProducts] = useState({});

  useEffect(() => {
    axiosClient.get("/products").then((res) => setproducts(res.data));
  }, []);
  //Trangj thai m,odel
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = (user) => {
    setShow(true);
    setselectedProducts(user);

    console.log(user);
  };

  const handleDelete = (id) => {
    axiosClient.delete(`/products/${id}`);
  };

  return (
    <>
      <Link to="/products/add" className="btn btn-success mb-2">
        <FontAwesomeIcon icon={faPlus} /> Thêm
      </Link>
      <Table>
        <div>
          <div className="grid-container">
            {products.map((item) => {
              return (
                <div className="grid-item" key={item.sku}>
                  <img
                    className="grid-image"
                    src={"https://localhost:7174/images/product/" + item.image}
                    alt="Ảnh minh họa"
                  />
                  <div className="grid-cell nameProduct"> {item.name}</div>
                  <div className="grid-cell">
                    <span className="price">
                      {new Intl.NumberFormat("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      }).format(item.price)}
                    </span>
                  </div>
                  <span className="discounted-price">
                    {new Intl.NumberFormat("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    }).format(item.price * 1.5)}
                  </span>

                  <div className="grid-cell">
                    <Button
                      className="btn btn-info"
                      onClick={() => handleShow(item)}
                    >
                      <FontAwesomeIcon icon={faUser} />
                    </Button>
                    <Link
                      to={`/products/edit/${item.id}`}
                      className="btn btn-warning"
                    >
                      <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <Button
                      variant="danger"
                      onClick={() => handleDelete(item.id)}
                    >
                      <FontAwesomeIcon icon={faTrash} />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Table>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>PRODUCT DETAILS</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={4}>
              <img
                src={
                  "https://localhost:7174/images/product/" +
                  selectedProducts.image
                }
                alt="Ảnh minh họa"
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
                <dd>{selectedProducts.name}</dd>

                <dt>DESCRIPTION:</dt>
                <dd>{selectedProducts.description}</dd>
                <dt>PRICE:</dt>
                <dd>{selectedProducts.price}</dd>
                <dt>STOCK:</dt>
                <dd>{selectedProducts.stock}</dd>
              </dl>
            </Col>
            <Col md={4}>
              <dl>
                <dt>Content:</dt>
                <label>{selectedProducts.content}</label>
              </dl>
            </Col>
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
