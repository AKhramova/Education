function getQunitityPostsByAuthor(list, name) {
    if (typeof name !== 'string' || typeof list !== 'object') {
        return false;
    }
    let countComments = 0;
    let countPost = 0;
    for (const iterator of list) {
        if (iterator.author === name) {
            countPost++;
        }
        for (const key in iterator.comments) {
            if (iterator.comments[key].author === name) {
                countComments++;
            }
       }
    }

    return `post - ${countPost}, comments - ${countComments}`;
}

module.exports = {
    getQunitityPostsByAuthor
}
