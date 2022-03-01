import { Button } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from "react";
import CartWidget from "./CartWidget";
function Footer() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            <CartWidget/>
        </Button><Offcanvas show={show} onHide={handleClose} placement="bottom">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Mi carrito</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    No tenes productos en el carrito, pero estan esperandote
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}  
export default Footer