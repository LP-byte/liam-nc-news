function dateFormater (articles) {

console.log(articles)
    const alteredArticles  = articles.map((article) => {

        let monthToStr = '';

        article.created_at.slice(5, 7) === '01' ? monthToStr = 'January' 
      : article.created_at.slice(5, 7) === '02' ? monthToStr ='Febuary' 
      : article.created_at.slice(5, 7) === '03' ? monthToStr ='March'
      : article.created_at.slice(5, 7) === '04' ? monthToStr ='April'
      : article.created_at.slice(5, 7) === '05' ? monthToStr ='May'
      : article.created_at.slice(5, 7) === '06' ? monthToStr ='June'
      : article.created_at.slice(5, 7) === '07' ? monthToStr ='July'
      : article.created_at.slice(5, 7) === '08' ? monthToStr ='August'
      : article.created_at.slice(5, 7) === '09' ? monthToStr ='September'
      : article.created_at.slice(5, 7) === '10' ? monthToStr ='October'
      : article.created_at.slice(5, 7) === '11' ? monthToStr ='November'
      : article.created_at.slice(5, 7) === '12' ? monthToStr ='December' : monthToStr ='-----'
    
      const yearFormat = article.created_at.slice(8, 10) + " " + monthToStr +" "+ article.created_at.slice(0, 4)
      const timeFormat = article.created_at.slice(11, 16)
      
      const timeStampNow = new Date().valueOf();
      const articleUnix = new Date(article.created_at).valueOf();
      
      const secondsPast = (timeStampNow - articleUnix);
      
      let articlePostTime = '';


      if (secondsPast < 61){
       articlePostTime = parseInt(secondsPast) + 'seconds ago..'
      }

      else if(secondsPast < 3601 && secondsPast > 60){
       articlePostTime = parseInt(secondsPast) + 'minutes ago..'
      }

      else if(secondsPast >3600 && secondsPast < 86401){
        articlePostTime = 'posted ' + parseInt(secondsPast) + ' hours ago.'
      } 

      else {
        articlePostTime = yearFormat + ' at ' + timeFormat
      }

      return {...article, created_at: articlePostTime}
    
    })
    console.log(alteredArticles)
    return alteredArticles

}

export default dateFormater;

