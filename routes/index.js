const express = require( 'express' );
const router = express.Router();

const fetch = require( 'node-fetch' );

router.get('/', ( req, res ) => {
    res.render('index');
});

router.post('/loveApi', async (req, res) => {
    let url = `https://love-calculator.p.rapidapi.com/getPercentage?fname=${ req.body.fname }&sname=${ req.body.sname }`;

    let options = {
        method: "GET",
        headers: {
            'x-rapidapi-host': 'love-calculator.p.rapidapi.com',
            'x-rapidapi-key': process.env.API_KEY,
            useQueryString: true
        }
    } 
    try{
        let response = await fetch( url, options );
        let json = await response.json();
        res.json( json ); 
    } catch (error) {
        console.error(error);
    }
});


module.exports = router;