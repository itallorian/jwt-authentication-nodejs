import jwt from "jsonwebtoken";
import config from "config";

const _jwtKey = config.get("jwt.key");

class AuthorizationMiddleware{
    static Validate = (req, res, next) => {
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
            let token = req.headers.authorization.split(' ')[1];

            try {
                jwt.verify(token, _jwtKey);
                next();
            } catch (err) {
                res.status(401).send();
            }
        } else {
            res.status(401).send();
        }
    }
}

export default AuthorizationMiddleware;