
export const getImage = async( busqueda ) => {
    const url = `https://api.unsplash.com/search/photos/?client_id=RaPx5r9_SOatxb9_10Ki2sd9XsHj-HjOZE5SKXEFeUo&query=${ busqueda}`;
    const resp = await fetch( url );
    const { results } = await resp.json();

    const images = results.map( img => {
        return{
            id: img.id,
            description: img.description,
            alt_description: img.alt_description,
            url: img.urls.small
        }
    })
    return images;


}

export default getImage;