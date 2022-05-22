export default class GetData {
    constructor() {
        this._apiBase = 'https://api.coingecko.com/api/v3'
    }

    getResource = async (url) => {
        const result = await fetch(`${this._apiBase}${url}`)

        if (!result.ok) {
            throw new Error(`Could not fetch ${url}, status: ${result.status}`)
        }

        return await result.json()
    }

    getPrice = async (id) => {
        return this.getResource(`/simple/price?ids=${id}&vs_currencies=usd`)
    }

    getCoinHistory = async (id) => {
        return this.getResource(`/coins/${id}/market_chart?vs_currency=usd&days=14&interval=daily`)
    }

}