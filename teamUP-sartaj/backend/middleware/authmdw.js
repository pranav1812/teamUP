const jwt= require('jsonwebtoken')

function authmdw(req, res, next){
    console.log()
    if(req.headers.Cookie) console.log(`jwt- cookie: ${req.headers.Cookie}`)
    
    const token= req.headers.xauthtoken
    if(! token) return res.status(401).send("Access denied! Auth token not found")

    try{
        const decodedToken= jwt.verify(token, 'secret key') 
        req.user= decodedToken
        next()
    }
    catch(err){
        res.status(400).send('invalid token !!')
    }
}

module.exports= authmdw