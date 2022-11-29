import  sanityClient  from "@sanity/client";
import  imageUrlBuilder  from "@sanity/image-url";

export const client = sanityClient({

    projectId:process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset:'production',
    apivVersion:'2022-11-18',
    useCdn:true,
    token: process.env.REACT_APP_SANITY_TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor =(source) => builder.image(source);