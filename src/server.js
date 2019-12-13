const express = require('express')
const path = require('path')
const fs = require('fs')

const app = express()
const port = process.env.PORT || 3000

const buildPath = path.join(__dirname, '../build')
const indexPath = path.join(buildPath, 'index.html')

const index = fs.readFileSync(indexPath)

app.use(express.static(buildPath, { maxage: 0 }))

app.get('*', (req, res) => {
	res.end(index)
})

app.listen(port, () => {
	console.log(`Listening on port ${port}`)
})
