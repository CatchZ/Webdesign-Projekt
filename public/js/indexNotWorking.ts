/*const express = require('express')
const app = express()
const port = 3000
const cookieParser = require('cookie-parser');


app.get('/', (req: { headers: any; }, res: { send: (arg0: { headers: any; }) => void; }) => {
    res.send({headers: req.headers})
})

app.listen(port, () => {
    console.log(`Reisen reisen listening at http://localhost:${port}`)
})

app.use(cookieParser());
const checkLogin = async (
    req: Request,
    res: express.Response,
    next: express.NextFunction
) => {
    const session = req.cookies.session;
    if (!session) {
        res.status(401);
        return res.json({ message: "You need to be logged in to see this page." });
    }
    const email = await authService.getUserEmailForSession(session);
    if (!email) {
        res.status(401);
        return res.json({ message: "You need to be logged in to see this page." });
    }
    req.userEmail = email;
    next();
};

 */