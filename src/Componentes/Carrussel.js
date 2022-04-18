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
        <div id='containerPrincipal'>
            <h2 style={{"text-align": "center", "font-size" : "3rem"}}>Tienda oficial del MaFaVi</h2>
            <p>En una noche oscura y fría, allá por Septiembre de 2015 en la Ciudad de Bariloche, nuestro viejo y querido amigo Hiroshi nos colocó un mote que, aunque no lo supieramos, nos iba a quedar de por vida: "Manga de fanáticos del vino". Muy acertado estuvo él al momento de recitar esas palabras, pero lo que no sabía era que el fanatismo iba más alla del jugo de uva.</p>
            <p>Luego de seis años del momento de nuestra creación decidimos crear la Tienda Oficial del Mafavi. Porque la pasión se contagia, queremos que todos tengan la posibilidad de tener los productos de esta familia. El Mafa es nacional y popular, no tiene hinchas...tiene fanáticos.</p>
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
    </div>)
}}
export default Carrussel