import React from 'react'
import { Container } from 'react-bootstrap'
import Carousel from 'react-bootstrap/Carousel'
import  {useEffect ,useState}  from 'react'
import { toast } from 'react-toastify'
import Loader from './Loader'
const Carrussel = () => {
    const [loading, setLoading]= useState(true)
        useEffect(()=>{
        const promesa = new Promise((res,rej)=>{
                setTimeout(()=>{
                res()
                },2000)
        })
        promesa
        .then((respuestaDeLaApi)=>{
        })
        .catch((errorDeLaApi)=>{
            toast.error("Hubo un error!")
            //setError("Hubo un error al cargar los datos, vuelva a intentarlo")
        })
        .finally(()=>{
            setLoading(false)
        })
        })
    if(loading){
            return <Loader/>
        }else{
        return (
        <>
        <h2 style={{"text-align": "center", "font-size" : "3rem"}}>Tienda oficial del MaFaVi</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras et turpis id lectus facilisis laoreet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies feugiat blandit. Fusce sed nunc leo. Sed vel nibh pulvinar, egestas dolor at, egestas felis. Aliquam molestie, lacus nec tempor euismod, mauris tellus suscipit purus, quis gravida libero lectus eget nisl. Vestibulum at sem aliquet, tincidunt orci scelerisque, blandit elit. Quisque sed velit quis eros aliquam sodales vehicula eget magna.</p>
        <h4 style={{"text-align": "center"}}>Conocenos a traves de nuestros productos, por eso, te mostramos los más requeridos de cada categoría!</h4>
        <Container className='carrussel'>
            <Carousel fade={true} interval= {4000} >
                <Carousel.Item>
                    <img
                    className="d-block w-100 imgC"
                    src="/imagenesDelProyecto/CamisetaS.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption className='textCar'>
                    <h3>Camiseta titular</h3>
                    <p>Azul y negro como nuestra sangre. Nuestro manto sagrado.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100 imgC"
                    src="/imagenesDelProyecto/Vasavi.jpg"
                    alt="Second slide"
                    />
                    <Carousel.Caption className='textCar'>
                    <h3>Vasavi</h3>
                    <p>De acero inoxidable, nuestro vaso te acompaña de día y de noche ;).</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className='nft'>
                    <>
                    <div className='nft'>
                    <img
                    className="d-block imgC"
                    src="/imagenesDelProyecto/MafaSegundoEscudo.jpg"
                    alt="Third slide"
                    style={{"width" : "38rem !important"}}
                    />
                    <Carousel.Caption className='textCar'>
                    <h3>NFT's</h3>
                    <p>Proximamente en nuestra tienda, te mostramos lo que va  venir.</p>
                    </Carousel.Caption></div></>
                </Carousel.Item>
            </Carousel>
    </Container>
    </>)
}}
export default Carrussel