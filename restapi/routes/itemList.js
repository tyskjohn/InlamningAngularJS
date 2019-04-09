const express = require('express');
const route = express.Router();

route.get("/", (req,res,next) => {
    res.status(200).json([
        { id: 1, image: "/images/annonsbyrå.jpg", productname: "Chiffonjé", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1500, rating: 2.3 },
        { id: 2, image: "/images/annonsbyrå2.jpg", productname: "Byrå", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1000, rating: 4.4 },
        { id: 3, image: "/images/fjäderlampa.jpg", productname: "Fjäderlampa", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 600, rating: 3.5 },
        { id: 4, image: "/images/annonsnattucksbord.jpg", productname: "Nattduksbord", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 500, rating: 4.4 },
        { id: 5, image: "/images/annonsgrönbyrå.jpg", productname: "Byrå rund", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1400, rating: 1.2 },
        { id: 6, image: "/images/anonsnattucksbord2.jpg", productname: "Nattduksbord par", quantity: 1, description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit laborum.", price: 1200, rating: 3.4 }
    ]);
});

module.exports = route;
