import express from "express";
import AuthorizationController from "./authorization.controller.js";

const endpoint = (startup) => {
    startup.route("/").get((req, res) => res.status(403).send());
    startup.use(
        express.json(),
        AuthorizationController
    );
}

export default endpoint;