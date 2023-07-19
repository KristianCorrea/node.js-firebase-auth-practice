import express, {Express, Request, Response} from 'express'

const port = 3000

const app:Express = express()

app.get('/', (req: Request, res: Response) => {
    console.log("hell yeah")
    res.sendStatus(500)
})

app.listen(3000)