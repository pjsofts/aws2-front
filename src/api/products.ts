const url = import.meta.env.VITE_API_URL
async function getProduct(){
    const repsonse = await fetch(url + "/products")
    const data = await repsonse.json()
    return data
}

export {getProduct}