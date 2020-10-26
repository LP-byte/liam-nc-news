const {dateFormater} = require('./date-format')
import {articles} from './date-format-test-articles.json'
desribe ('', () => {
    test ('', () => {
      const passedArticles = [articles[0], articles[1]];
        expect(dateFormater(passedArticles)).toBe(articles[0], [1])
    })

})