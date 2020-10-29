import singleDateFormat from './single-article-date-format';
import {articles} from '../date-format-test-articles.json'

describe ('single date format', () => {
    test ('when passed an object containing a timestap value, the ts is formated to new date/time format', ()=>{

        const passedArticle = {
            
            article_id:33,
            title:"Seafood substitutions are increasing",
            body:"'test body. helo..hello, hello",
            created_at:"2020-10-27T11:47:13.341Z",
            votes:0,
            topic:"cooking",
            author:"weegembump",
            comment_count:6
            
        }
        expect(singleDateFormat(passedArticle)).not.toBe(passedArticle.created_at)
    })

})