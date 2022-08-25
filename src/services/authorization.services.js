import config from "config";
import jwt from "jsonwebtoken";

const _jwtKey = config.get("jwt.key");

class AuthorizationService{
    static GenerateToken = (req, res) => {
        let expirationTime = config.get("jwt.expirationTime");
        let token = jwt.sign({id: req.header.id}, _jwtKey, {expiresIn: expirationTime });
        res.status(201).send({
            token,
            expiresIn: `Expires in ${((expirationTime / 60) / 60)} hours`
        });
    }
}

export default AuthorizationService;