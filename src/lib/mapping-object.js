export const getPostObjectByEdge = (edge) => {
    const { frontmatter, excerpt } = edge.node;
    const { id, title, date, image } = frontmatter;
    
    let src;

    if (image) {
        src = image.childImageSharp.original.src;
    }

    return {
        id,
        title,
        date,
        description: excerpt,
        image: src,
    };
};