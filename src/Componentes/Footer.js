import { Button } from "react-bootstrap";
import Offcanvas from 'react-bootstrap/Offcanvas';
import React, { useState } from "react";
import CartWidget from "./CartWidget";
import Carrito from "./Carrito";
function Footer() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
        <Button variant="primary" onClick={handleShow}>
            <CartWidget/>
        </Button><Offcanvas show={show} onHide={handleClose} placement="bottom">
                <Offcanvas.Body className="carrito"><Carrito/>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}  
export default Footer