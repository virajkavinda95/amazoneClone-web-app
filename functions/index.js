const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")("sk_test_51JRxI1AFbhLjusN8hgtin5z8nmHCo61NG1Xmr9HB8b1Vxg8IhyOAGAxnrGT3N6fTioK7ucbUQiqOwpk58tj8bSYH00qgIcoHLO");

// - API

// - App config
const app = express();

// - Midlewares
app.use(cors({ origin:true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log("Payment recieved Boom !!!", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount:total,
        currency:"usd"
    });

    //OK created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// - Listen Command
exports.api = functions.https.onRequest(app);


//eemulator endpoint
//http://localhost:5001/e-challenge-8cd99/us-central1/api