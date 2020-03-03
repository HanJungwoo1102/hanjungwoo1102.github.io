const getPathOfPost = (id) => {
    return `/posts/${id}`;
};

const getPathOfCategory = (categoryName) => {
    return `/categories/${categoryName}`;
}

exports.getPathOfPost = getPathOfPost;
exports.getPathOfCategory = getPathOfCategory;