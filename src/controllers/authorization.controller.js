import express from "express";
import AuthorizationService from "../services/authorization.services.js";
import AuthorizationMiddleware from "../middlewares/authorization.middleware.js";

const endpoints = express.Router();

/* 
    endpoints.use(TokenMiddleware.ValidateToken);
    Use this if you wanna add authentication to full controller
*/

endpoints
    .get("/authorization", AuthorizationService.GenerateToken)
    .get("/authorization/access-endpoint", AuthorizationMiddleware.Validate, (req, res) => {
        res.send();
    });

export default endpoints;