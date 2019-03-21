const express = require('express');
const route = express.Router();

route.get('/', (req,res,next) => {
    res.status(200).json([
        { image: "/images/annonsbyrå.jpg", productname: "Chiffonjé", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 1500, rating: "" },
        { image: "/images/annonsbyrå2.jpg", productname: "Byrå", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 1000, rating: "" },
        { image: "/images/fjäderlampa.jpg", productname: "Fjäderlampa", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 600, rating: "" },
        { image: "/images/annonsnattucksbord.jpg", productname: "Nattduksbord", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 500, rating: "" },
        { image: "/images/annonsgrönbyrå.jpg", productname: "Byrå rund", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 1400, rating: "" },
        { image: "/images/anonsnattucksbord2.jpg", productname: "Nattduksbord pas", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum reprehenderit qui quo aspernatur ab.", price: 1200, rating: "" }
    ]);
});

module.exports = route;
