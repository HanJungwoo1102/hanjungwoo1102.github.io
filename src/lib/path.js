const getPathOfMain = () => {
    return '/';
};

const getPathOfPost = (id) => {
    return `/posts/${id}`;
};

const getPathOfCategory = (categoryName) => {
    return `/categories/${categoryName}`;
}

exports.getPathOfMain = getPathOfMain;
exports.getPathOfPost = getPathOfPost;
exports.getPathOfCategory = getPathOfCategory;