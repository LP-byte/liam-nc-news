import dateFormater from './date-format';
import {articles} from './date-format-test-articles.json'

describe ('date formater', () => {
    test ('returns an array containing imported json objects', () => {
      const passedArticles = [{
      "article_id":33,
      "title":"Seafood substitutions are increasing",
      "body":"'SEAFOOD fraud is a serious global problem', begins a recent report from Oceana, an NGO. Reviewing over 200 studies in 55 countries, the report finds that one in five fish sold has been mislabelled. Although fish fraud is common early in the supply chain, most of it comes at the retail level. In 65% of cases, the motivation is economic—slippery restaurateurs frequently serve up cheaper fish than they advertise to cut costs. In America, Oceana has reported instances of tilapia being sold as the more expensive red snapper. Especially brazen fish criminals have invented new types of fish entirely. In Brazil, researchers were puzzled to find markets selling 'douradinha', ' non-existent species. Close inspection found that 60% of such fish were actually 'vulture' catfish, a relatively undesirable dish. Reports in America of catfish being substituted for more expensive fish date back to at least 2002; Oceana’s study suggests that the phenomenon is spreading.",
      "created_at":"2016-05-30T15:59:13.341Z",
      "votes":0,
      "topic":"cooking",
      "author":"weegembump",
      "comment_count":"6"}];
      expect(dateFormater(passedArticles)).toBe("30 May 2016 at 15:59")
    })

})