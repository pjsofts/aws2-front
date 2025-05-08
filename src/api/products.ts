const url = "http://localhost:3000"
async function getProduct(){
    const repsonse = await fetch(url + "/products")
    const data = await repsonse.json()
    return data
}

export {getProduct}