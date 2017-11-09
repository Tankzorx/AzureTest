import * as express from "express";

function* myGenerator () {
    let i = 1
    while (true) {
        yield i
        i += 1
    }
}

const app = express()

var myIterator = myGenerator()

app.get("/", (req, res) => {
    res.send(`hello world! Number: ${myIterator.next().value} `)
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})