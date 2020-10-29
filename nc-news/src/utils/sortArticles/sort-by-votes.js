function sortArticleByVoteCount (articles) {

const articlesSortedByVotesCount = articles.sort((a, b)=> b.votes - a.votes)
return articlesSortedByVotesCount
}

export default sortArticleByVoteCount

