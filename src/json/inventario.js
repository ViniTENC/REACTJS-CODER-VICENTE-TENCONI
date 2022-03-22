import React from 'react'
    const indumentaria= () => [
        {
            id: 1,
            nombre: "Camiseta Titular",
            precio : 100,
            image: "/imagenesDelProyecto/camisetaS.jpg",
            marca : "Solo Gol",
            material: "Dry-Fit",
            color: "Azul y negro",
            numero: "Sin asignar",
            genero : "Unisex"
        },
        {
            id: 2,
            nombre: "Camiseta Suplente",
            precio : 90,
            image: "/imagenesDelProyecto/camisetaT.jpg",
            marca : "La Casaca",
            material: "Dry-Fit",
            color: "Blanco , Azul y negro",
            numero: "Sin asignar",
            genero : "Unisex"
        },
        {
            id: 3,
            nombre: "Campera Rompevientos",
            precio : 50,
            image: "/imagenesDelProyecto/Conjunto.jpg",
            marca : "LNS Sport",
            material: "Poliester",
            color: "Azul y negro",
            numero: "Sin número",
            genero : "Unisex"
        }
    ]
    const accesorios= () =>[
        {
                id: 4,
                nombre: "Vasavi",
                precio: 25,
                image : "/imagenesDelProyecto/Vasavi.jpg",
                marca: "MaFaVi Vasos",
                material: "Aluminio",
                color : "Plateado",
                numero: "Sin número",
                genero : "Unisex"
        },
        {
                id: 5,
                nombre: "Pilusavi",
                precio: 30,
                image : "/imagenesDelProyecto/Pilusavi.jpg",
                material: "Poliester",
                color : "Negro o Azul",
                marca : "MaFaVi Pilusos",
                numero: "Sin número",
                genero : "Unisex"
        },
        {
                id: 6,
                nombre: "Gorravi",
                precio: 30,
                image : "/imagenesDelProyecto/Gorravi.jpg",
                material: "Poliester",
                marca: "MaFaVi Gorras",
                color : "Azul y blanco",
                numero: "Sin número",
                genero : "Unisex"
        }
        ]
    const nfts = () => [
            {
                id: 7,
                nombre : "Proximamente...",
                image: "/imagenesDelProyecto/MafaSegundoEscudo.jpg"
            }
        ]


export default {indumentaria, accesorios, nfts};