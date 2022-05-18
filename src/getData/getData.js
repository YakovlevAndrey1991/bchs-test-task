// export default class GetData {
//
//     getData = async (url) => {
//         const result = await fetch(url, {mode: "no-cors"})
//
//         if (!result.ok) {
//             throw new Error(`Could not fetch ${url}, status: ${result.status}`)
//         }
//
//         return await result.json()
//     }
//
//     getBitcoin = async () => {
//        return await this.getData('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd')
//     }
//
//     getEthereum = async () => {
//        return await this.getData('https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd')
//     }
//
//     getBitcoinHistory = async () => {
//         return await this.getData('https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=14&interval=daily')
//     }
//
//     getEthereumHistory = async () => {
//         return await this.getData('https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=14&interval=daily')
//     }
// }


//    export default async function GetData (url) {
//         const result = await fetch(url, {mode: "no-cors"})
//
//         if (!result.ok) {
//             throw new Error(`Could not fetch ${url}, status: ${result.status}`)
//         }
//
//         return await result.json()
//
// }
// export default GetData;