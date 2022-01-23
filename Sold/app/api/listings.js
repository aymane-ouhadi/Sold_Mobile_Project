import client from './client'
import routes from './routes'

const getListings = () => client.get(routes.LISTINGS)

const addListings = (listing, onUploadProgress) => {

    const data = new FormData()
    data.append('title', listing.title)
    data.append('price', listing.price)
    data.append('categoryId', listing.category.value)
    data.append('description', listing.description)

    listing.images.forEach((image, index) => {
        data.append('images', {
            name: `image${index}`,
            type: 'image/jpeg',
            uri: image
        })
    });

    if(listing.location)
        data.append('location', JSON.stringify(listing.location))

    return client.post(routes.LISTINGS, data, {
        onUploadProgress: (progress) => onUploadProgress(progress.loaded / progress.total)
    })
}

export default {
    getListings,
    addListings
}