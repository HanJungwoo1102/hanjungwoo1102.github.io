const getPathOfMain = () => {
    return '/';
};

const getPathOfPost = (id) => {
    return `/posts/${id}`;
};

const getPathOfCategory = (categoryName) => {
    return `/categories/${categoryName}`;
}

const getPathOfTag = (tagName) => {
    return `/tags/${tagName}`;
}

exports.getPathOfMain = getPathOfMain;
exports.getPathOfPost = getPathOfPost;
exports.getPathOfCategory = getPathOfCategory;
exports.getPathOfTag = getPathOfTag;