function sortArticlesByCommentCount (articles) {

const articlesSortedByCommentCount = articles.sort((a, b)=> b.comment_count - a.comment_count)
return articlesSortedByCommentCount
}

export default sortArticlesByCommentCount;