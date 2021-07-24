const fetch = require('node-fetch')

module.exports = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        return await response.json()
    } catch (error) {
        console.error(error)
        return []
    }
}