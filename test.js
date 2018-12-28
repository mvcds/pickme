const pick = require('./index')

const original = {
	API_KEY: 1,
	AUTH_DOMAIN: true,
	DATABASE_URL: "hi"
}

const alfa = pick(original, 'API_KEY', 'AUTH_DOMAIN', 'DATABASE_URL')

console.log('API_KEY', original.API_KEY === alfa.API_KEY)
console.log('AUTH_DOMAIN', original.AUTH_DOMAIN === alfa.AUTH_DOMAIN)
console.log('DATABASE_URL', original.DATABASE_URL === alfa.DATABASE_URL)