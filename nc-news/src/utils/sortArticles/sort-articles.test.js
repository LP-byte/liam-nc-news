import sortArticlesByCommentCount from './sort-by-comments'
import sortArticleByVoteCount from './sort-by-votes'

describe('sortArticlesByCommentCount', ()=> {
    test('', ()=> {

        const articles = [{

            "article_id": 33,
            "title": "Seafood substitutions are increasing",
            "body": "testBody1",
            "created_at": "2018-05-30T15:59:13.341Z",
            "votes": 0,
            "topic": "cooking",
            "author": "weegembump",
            "comment_count": "1"
            },
            {
            "article_id": 28,
            "title": "High Altitude Cooking",
            "body": "testBody2",
            "created_at": "2018-05-27T03:32:28.514Z",
            "votes": 0,
            "topic": "cooking",
            "author": "happyamy2016",
            "comment_count": "10"
            },
        
            {
                "article_id": 30,
                "title": "Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams",
                "body": "testBody3",
                "created_at": "2018-05-28T02:40:35.489Z",
                "votes": 0,
                "topic": "cooking",
                "author": "jessjelly",
                "comment_count": "8"
                },
            ]
            expect(sortArticlesByCommentCount(articles)).toEqual([
                {
                    "article_id": 28,
                    "title": "High Altitude Cooking",
                    "body": "testBody2",
                    "created_at": "2018-05-27T03:32:28.514Z",
                    "votes": 0,
                    "topic": "cooking",
                    "author": "happyamy2016",
                    "comment_count": "10"
                    },

                    {
                        "article_id": 30,
                        "title": "Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams",
                        "body": "testBody3",
                        "created_at": "2018-05-28T02:40:35.489Z",
                        "votes": 0,
                        "topic": "cooking",
                        "author": "jessjelly",
                        "comment_count": "8"
                        },

                        {

                            "article_id": 33,
                            "title": "Seafood substitutions are increasing",
                            "body": "testBody1",
                            "created_at": "2018-05-30T15:59:13.341Z",
                            "votes": 0,
                            "topic": "cooking",
                            "author": "weegembump",
                            "comment_count": "1"
                            }
            ])

    })
})

describe('sortArticlesByCommentCount', ()=> {
    test('', ()=> {

        const articles = [{

            "article_id": 33,
            "title": "Seafood substitutions are increasing",
            "body": "testBody1",
            "created_at": "2018-05-30T15:59:13.341Z",
            "votes": 10,
            "topic": "cooking",
            "author": "weegembump",
            "comment_count": "1"
            },
            {
            "article_id": 28,
            "title": "High Altitude Cooking",
            "body": "testBody2",
            "created_at": "2018-05-27T03:32:28.514Z",
            "votes": 50,
            "topic": "cooking",
            "author": "happyamy2016",
            "comment_count": "10"
            },
        
            {
                "article_id": 30,
                "title": "Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams",
                "body": "testBody3",
                "created_at": "2018-05-28T02:40:35.489Z",
                "votes": 15,
                "topic": "cooking",
                "author": "jessjelly",
                "comment_count": "8"
                },
            ]
            expect(sortArticleByVoteCount(articles)).toEqual([
                {
                    "article_id": 28,
                    "title": "High Altitude Cooking",
                    "body": "testBody2",
                    "created_at": "2018-05-27T03:32:28.514Z",
                    "votes": 50,
                    "topic": "cooking",
                    "author": "happyamy2016",
                    "comment_count": "10"
                    },
                    {
                        "article_id": 30,
                        "title": "Twice-Baked Butternut Squash Is the Thanksgiving Side Dish of Your Dreams",
                        "body": "testBody3",
                        "created_at": "2018-05-28T02:40:35.489Z",
                        "votes": 15,
                        "topic": "cooking",
                        "author": "jessjelly",
                        "comment_count": "8"
                        },
                        {
                        "article_id": 33,
                        "title": "Seafood substitutions are increasing",
                        "body": "testBody1",
                        "created_at": "2018-05-30T15:59:13.341Z",
                        "votes": 10,
                        "topic": "cooking",
                        "author": "weegembump",
                        "comment_count": "1"
                        },
            ])

    })
})