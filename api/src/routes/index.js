const { Router } = require('express');
const bodyParser = require("body-parser");

const router = Router();

router.use(bodyParser.json());

const userRoute = require('../routes/users')
const productRoute = require('../routes/product.route')
const loginGoogle= require('../routes/loginGoogle')
const loginRoute= require('../routes/login')

router.use("/api/user", userRoute);
router.use("/api/product", productRoute);
router.use("/api/login/google", loginGoogle);
router.use("/api/login", loginRoute); 



module.exports = router;
