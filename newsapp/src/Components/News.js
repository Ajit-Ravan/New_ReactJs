import React, { Component } from 'react'

import NewsItem from './NewsItem'

export default class News extends Component {
  //constructor
  //this is hardcoded value we are passing / we have to work with live api news
  // articles = [
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Kevin Liptak",
  //     "title": "Biden team raised $53 million in February, entering general election with major cash advantage - CNN",
  //     "description": "President Joe Biden’s campaign effort brought in $53 million in February, a sign of accelerating donor interest over a month that saw the election rematch crystalize between Biden and former President Trump.",
  //     "url": "https://www.cnn.com/2024/03/17/politics/biden-team-raised-usd53-million-in-february-entering-general-election-with-major-cash-advantage/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-2064217788.jpg?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2024-03-17T09:01:00Z",
  //     "content": "President Joe Bidens campaign effort brought in $53 million in February, a sign of accelerating donor interest over a month that saw the election rematch crystalize between Biden and former President… [+3607 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "NBCSports.com"
  //     },
  //     "author": "Michael David Smith",
  //     "title": "Russell Wilson expresses excitement at Justin Fields joining him in Pittsburgh - NBC Sports",
  //     "description": "The Steelers' quarterback room in 2024 will feature a pairing that not long ago would have seemed impossible: Russell Wilson and Justin Fields.",
  //     "url": "https://www.nbcsports.com/nfl/profootballtalk/rumor-mill/news/russell-wilson-expresses-excitement-at-justin-fields-joining-him-in-pittsburgh",
  //     "urlToImage": "https://nbcsports.brightspotcdn.com/dims4/default/5cb937d/2147483647/strip/true/crop/4040x2273+0+210/resize/1440x810!/quality/90/?url=https%3A%2F%2Fnbc-sports-production-nbc-sports.s3.us-east-1.amazonaws.com%2Fbrightspot%2F10%2F5e%2Fe8824b624d0f9ded4c7c34fca2dc%2Fhttps-delivery-gettyimages.com%2Fdownloads%2F1715255642",
  //     "publishedAt": "2024-03-17T08:31:24Z",
  //     "content": "The Steelers quarterback room in 2024 will feature a pairing that not long ago would have seemed impossible: Russell Wilson and Justin Fields.\r\nWilson, who is expected to start in Pittsburgh in 2024,… [+810 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "associated-press",
  //       "name": "Associated Press"
  //     },
  //     "author": "THE ASSOCIATED PRESS",
  //     "title": "Ukraine launches far-ranging drone attacks on the final day of Russia's presidential vote - The Associated Press",
  //     "description": "Ukraine has launched a new massive wave of drone attacks as Russians cast ballots on the final day of a presidential vote set to extend President Vladimir Putin’s rule for another six years. The Russian Defense Ministry reported downing 35 Ukrainian drones ea…",
  //     "url": "https://apnews.com/article/russia-ukraine-war-drone-attack-f0e717ace1b9a4c286fe1d2e112d74fe",
  //     "urlToImage": "https://dims.apnews.com/dims4/default/a8b7932/2147483647/strip/true/crop/3319x1867+0+174/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F26%2Fce%2F8ee705be20b4e559206061bfb8e7%2Fa6b6011672aa47f3bc93656ce43805b2",
  //     "publishedAt": "2024-03-17T08:14:00Z",
  //     "content": "Ukraine launched a new massive wave of drone attacks Sunday as Russians cast ballots on the final day of a presidential vote set to extend President Vladimir Putins rule for another six years.\r\nThe R… [+3551 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "associated-press",
  //       "name": "Associated Press"
  //     },
  //     "author": "JENNIFER PELTZ",
  //     "title": "Judge Juan Merchan runs a mental health court when he's not hearing a Trump case - The Associated Press",
  //     "description": "Judge Juan Merchan could become the first judge ever to oversee a former U.S. president’s criminal trial. He is presiding over Donald Trump’s hush money case in New York. If Trump goes on trial, the judge also will be in a hot seat. Merchan won’t talk about t…",
  //     "url": "https://apnews.com/article/trump-hush-money-criminal-trial-judge-merchan-c227f5eab200cccffb19ed931b4dac92",
  //     "urlToImage": "https://dims.apnews.com/dims4/default/6a80292/2147483647/strip/true/crop/5640x3173+0+294/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F89%2Fda%2F42b2cadff466efb1eacf13c5777c%2Fc5f9f4ebb4804490b7874a3648a9ab61",
  //     "publishedAt": "2024-03-17T05:28:05Z",
  //     "content": "NEW YORK (AP) Judge Juan M. Merchan looked across his high-ceilinged courtroom, facing the defendant in a complicated case.\r\nNot the one everyone knows about. \r\nYes, Merchan could become the first ju… [+7564 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Hollywood Reporter"
  //     },
  //     "author": "Hilary Lewis",
  //     "title": "2024 NAACP Image Awards: ‘The Color Purple’ Tops Winners as Usher Wins Entertainer of the Year - Hollywood Reporter",
  //     "description": "Vice President Kamala Harris made an appearance in a pre-taped cold open as host Queen Latifah, who was wished a happy birthday during the show two days before she turns 54, urged people to vote during the televised ceremony airing on CBS and BET, where 'Snow…",
  //     "url": "http://www.hollywoodreporter.com/movies/movie-news/2024-naacp-image-awards-winners-list-1235854077/",
  //     "urlToImage": "https://www.hollywoodreporter.com/wp-content/uploads/2024/03/Oprah-onstage-Usher-accepting-his-award-Fantasia-Barrino-accepting-her-award-Taraji-P.-Henson-accepting-her-award.jpg?w=1024",
  //     "publishedAt": "2024-03-17T04:07:30Z",
  //     "content": "The Color Purple topped the 2024 NAACP Image Awards.\r\nThe Blitz Bazawule-directed remake was named best motion picture and took home three more awards during the televised awards show Saturday night.… [+14711 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "CBS Sports"
  //     },
  //     "author": "",
  //     "title": "With its first Big East Tournament title in 13 years, UConn will arrive at Big Dance as beast of the bracket - CBS Sports",
  //     "description": "In the 17 years since Florida went back-to-back, there hasn't been a repeat contender as dangerous as these Huskies",
  //     "url": "https://www.cbssports.com/college-basketball/news/with-its-first-big-east-tournament-title-in-13-years-uconn-will-arrive-at-big-dance-as-beast-of-the-bracket/",
  //     "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/03/17/b6ccde9f-df52-4eb1-82ad-6cde882f0c0a/thumbnail/1200x675/df7aa22fefb42c93ffda1b67b2452596/dan-hurley-usatsi.jpg",
  //     "publishedAt": "2024-03-17T04:02:00Z",
  //     "content": "NEW YORK This is college basketball royalty. \r\nBlue blood programs don't just win championships, they do so by making it look easy despite carrying the burden of expectations and living as the Goliat… [+6397 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "MMA Fighting"
  //     },
  //     "author": "Mike Heck, NewYorkRic, Alexander K. Lee",
  //     "title": "UFC Vegas 88 post-fight show: Reaction to Marcin Tybura's quick submission win over Tai Tuivasa - MMA Fighting",
  //     "description": "MMA Fighting reacts to UFC Vegas 88, which was capped off by Marcin Tybura’s first-round submission win over Tai Tuivasa.",
  //     "url": "https://www.mmafighting.com/2024/3/17/24103594/ufc-vegas-88-post-fight-show-reaction-to-marcin-tyburas-quick-submission-win-over-tai-tuivasa",
  //     "urlToImage": "https://cdn.vox-cdn.com/thumbor/_iZCOT7XCrbdPYgjmwUB5YDwx-4=/0x0:7840x4105/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25340284/2090060528.jpg",
  //     "publishedAt": "2024-03-17T04:00:54Z",
  //     "content": "If you buy something from an SB Nation link, Vox Media may earn a commission. See our ethics statement."
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "Deadline"
  //     },
  //     "author": "Ted Johnson",
  //     "title": "Joe Biden, At D.C.’s Gridiron Dinner, Jokes About Donald Trump Before Getting Serious About His Threat To Democracy - Deadline",
  //     "description": "President Joe Biden, appearing at one of DC’s oldest traditions, the Gridiron Dinner, made some sharp quips about his rival Donald Trump on Saturday.",
  //     "url": "http://deadline.com/2024/03/joe-biden-dc-gridiron-dinner-jokes-donald-trump-threat-democracy-1235860624/",
  //     "urlToImage": "https://deadline.com/wp-content/uploads/2024/03/joe-biden-donald-trump.jpg?w=1024",
  //     "publishedAt": "2024-03-17T03:55:00Z",
  //     "content": "President Joe Biden, appearing at one of DC’s oldest traditions, the Gridiron Dinner, made some sharp quips about Donald Trump but then turned serious about the threat that his rival poses to democra… [+4657 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cbs-news",
  //       "name": "CBS News"
  //     },
  //     "author": null,
  //     "title": "Venezuela's President Nicolas Maduro clinches nomination for upcoming national election; seeks third term - CBS News",
  //     "description": "The election has been plagued with controversy since Maduro's main opponent, María Corina Machado, was disqualified by Venezuelan authorities to hold public office for 15 years.",
  //     "url": "https://www.cbsnews.com/news/venezuela-president-nicolas-maduro-clinches-nomination-national-election-third-term/",
  //     "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2024/02/23/54eb454d-f798-43bf-94c0-f2e9c1c15b7f/thumbnail/1200x630/fef25d8321490f3e001fa5bd0e1e968e/ap24054080344858.jpg?v=d1d78866939020fc1f2607ef7298e4ec",
  //     "publishedAt": "2024-03-17T03:32:03Z",
  //     "content": "Venezuelan President Nicolás Maduro on Saturday became his party's official nominee for July's highly anticipated presidential election, which would allow him to stroll into a third consecutive term … [+2978 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "cnn",
  //       "name": "CNN"
  //     },
  //     "author": "Andrew Carey, Olga Voitovych, Maria Kostenko, Josh Pennington, Darya Tarasova",
  //     "title": "Ukraine appeals to citizens under Russian occupation to ignore Putin’s ‘pseudo elections’ - CNN",
  //     "description": "Ukraine’s government has told citizens living in Russian-occupied territories to turn their backs on what they call Moscow’s pseudo-elections, which culminate on Sunday and are widely assumed to see Vladimir Putin returned as president for six more years.",
  //     "url": "https://www.cnn.com/2024/03/16/europe/ukraine-appeal-ignore-putin-pseudo-elections-intl-hnk/index.html",
  //     "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/2024-03-16t172249z-978113980-rc2zm6aqqsjs-rtrmadp-3-ukraine-crisis-russia-election-avdiivka.JPG?c=16x9&q=w_800,c_fill",
  //     "publishedAt": "2024-03-17T03:18:00Z",
  //     "content": "Ukraines government has told citizens living in Russian-occupied territories to turn their backs on what they call Moscows pseudo-elections, which culminate on Sunday and are widely assumed to see Vl… [+4086 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "usa-today",
  //       "name": "USA Today"
  //     },
  //     "author": "Tom Schad",
  //     "title": "NC State downs UNC to win first ACC tournament title since 1987 - USA TODAY",
  //     "description": "North Carolina State won five games in five days to win the ACC tournament title for the first time since 1987.",
  //     "url": "https://www.usatoday.com/story/sports/ncaab/acc/2024/03/16/nc-state-wins-acc-tournament-earns-march-madness-bid/73005492007/",
  //     "urlToImage": "https://www.usatoday.com/gcdn/authoring/authoring-images/2024/03/17/USAT/73006219007-usatsi-22796439.jpg?crop=2284,1286,x0,y143&width=2284&height=1286&format=pjpg&auto=webp",
  //     "publishedAt": "2024-03-17T03:00:51Z",
  //     "content": "WASHINGTON It must be March.\r\nNorth Carolina State capped a miraculous conference tournament run with an 84-76 win over North Carolina on Saturday night, stealing a spot in the NCAA Tournament on the… [+1521 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "BBC News"
  //     },
  //     "author": null,
  //     "title": "New Jersey siege ends after US gunman kills three in Pennsylvania - BBC.com",
  //     "description": "A 26-year-old suspect \"surrendered peacefully\" to officers, Trenton Police Department said.",
  //     "url": "https://www.bbc.com/news/world-us-canada-68588735",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/10EB8/production/_132940396_0f73192d6d571a3363aa2526b129da0b1e1c9f11.jpg",
  //     "publishedAt": "2024-03-17T02:04:21Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "BBC News"
  //     },
  //     "author": null,
  //     "title": "Boeing: How much trouble is the company in? - BBC.com",
  //     "description": "The US plane giant is under pressure from regulators and airlines, and its reputation is badly damaged.",
  //     "url": "https://www.bbc.com/news/business-68573686",
  //     "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/1FFF/production/_132219180_alaska2.jpg",
  //     "publishedAt": "2024-03-17T02:01:38Z",
  //     "content": null
  //   },
  //   {
  //     "source": {
  //       "id": "associated-press",
  //       "name": "Associated Press"
  //     },
  //     "author": null,
  //     "title": "Iceland volcano erupts again near Grindavik, Blue Lagoon evacuated - The Associated Press",
  //     "description": "A volcano in Iceland has erupted for the fourth time in three months, sending orange jets of lava into the night sky. Iceland’s Meteorological Office said the eruption Saturday evening opened a fissure in the earth about two miles long between Stóra-Skógfell …",
  //     "url": "https://apnews.com/article/iceland-volcano-eruption-reykjanes-peninsula-644e18664ef7fa6de0cfae7853c24223",
  //     "urlToImage": "https://dims.apnews.com/dims4/default/6459a5f/2147483647/strip/true/crop/6000x3375+0+312/resize/1440x810!/quality/90/?url=https%3A%2F%2Fassets.apnews.com%2F23%2Fc3%2F124004b5bfa1252c6ee290f7c322%2Fd22ead1a1309458aae74f63bd648bf69",
  //     "publishedAt": "2024-03-17T01:23:22Z",
  //     "content": "GRINDAVIK, Iceland (AP) A volcano in Iceland erupted Saturday evening for the fourth time in three months, sending orange jets of lava into the night sky.\r\nIcelands Meteorological Office said the eru… [+2245 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-washington-post",
  //       "name": "The Washington Post"
  //     },
  //     "author": "Amy Gardner, Holly Bailey",
  //     "title": "How a sleuth defense attorney and a disgruntled law partner damaged the Trump Georgia case - The Washington Post",
  //     "description": "What started as a courthouse rumor threatened to end the criminal case against Trump and his allies in Georgia — and damaged the case in the process.",
  //     "url": "https://www.washingtonpost.com/national-security/2024/03/16/fani-willis-misconduct-accusations-ashleigh-merchant/",
  //     "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/7JRMYZGOI5CWFASBURPM2OCW4I.png&w=1440",
  //     "publishedAt": "2024-03-17T00:57:00Z",
  //     "content": "In early September, a lawyer for one of former president Donald Trumps co-defendants in the Georgia election interference case scheduled a call with the other defense attorneys to share what he thoug… [+30230 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "fox-news",
  //       "name": "Fox News"
  //     },
  //     "author": "Lawrence Richard",
  //     "title": "Ohio Republican US Senate candidate Bernie Moreno has special message for GOP members who 'don't like' Trump - Fox News",
  //     "description": "Ohio Senate candidate Bernie Moreno shared a special message for Republicans who \"don't like\" former President Trump during Saturday's campaign rally.",
  //     "url": "https://www.foxnews.com/politics/ohio-republican-senate-candidate-bernie-moreno-special-message-gop-members-dont-like-trump",
  //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/03/GettyImages-20897431631.jpg",
  //     "publishedAt": "2024-03-17T00:42:00Z",
  //     "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+3760 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "fox-news",
  //       "name": "Fox News"
  //     },
  //     "author": "Michael Dorgan",
  //     "title": "New Mexico cop killer was driving car belonging to South Carolina paramedic found dead: police - Fox News",
  //     "description": "The man police say shot and killed a New Mexico State Police officer Friday was driving a stolen car belonging to a paramedic who was found dead Friday.",
  //     "url": "https://www.foxnews.com/us/new-mexico-cop-killer-was-driving-car-belonging-to-sc-paramedic-who-was-found-dead",
  //     "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2024/03/New-Mexico-split.jpg",
  //     "publishedAt": "2024-03-17T00:37:00Z",
  //     "content": "Join Fox News for access to this content\r\nPlus special access to select articles and other premium content with your account - free of charge.\r\nPlease enter a valid email address.\r\nBy entering your e… [+2559 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": null,
  //       "name": "9to5Mac"
  //     },
  //     "author": "Chance Miller",
  //     "title": "Walmart begins selling the Mac for the first time: M1 MacBook Air for $699 [Updated] - 9to5Mac",
  //     "description": "Update: Best Buy has now one-upped Walmart and is now selling the M1 MacBook Air at $649. Walmart is teaming...",
  //     "url": "https://9to5mac.com/2024/03/16/walmart-m1-macbook-air-launch/",
  //     "urlToImage": "https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2024/03/MacBook_Air_13-in_M1_Hero_95b812.jpg?resize=1200%2C628&quality=82&strip=all&ssl=1",
  //     "publishedAt": "2024-03-17T00:12:50Z",
  //     "content": "Update: Best Buy has now one-upped Walmart and is now selling the M1 MacBook Air at $649. \r\nWalmart is teaming up with Apple to sell the Mac for the first time. In a press release today, the company … [+2178 chars]"
  //   },
  //   {
  //     "source": {
  //       "id": "the-times-of-india",
  //       "name": "The Times of India"
  //     },
  //     "author": "Samir Jain",
  //     "title": "Horoscope Today, March 17, 2024: Read your daily astrological predictions - The Times of India",
  //     "description": "Horoscope(Old) News: Horoscope Today: Read daily horoscope predictions for March 17, 2024. Taurus; Your inner strength may make you confident which will reflect in to your",
  //     "url": "https://timesofindia.indiatimes.com/astrology/horoscope/horoscope-today-march-17-2024-read-your-daily-astrological-predictions/articleshow/108519052.cms",
  //     "urlToImage": "https://static.toiimg.com/thumb/msid-108518971,width-1070,height-580,imgsize-81848,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
  //     "publishedAt": "2024-03-16T23:30:00Z",
  //     "content": null
  //   }
  // ];

  constructor() {
    super();
    console.log("inside constructor from news component");
    this.state = {
      // articles: this.articles  <-- in place of this.article from above commented article =[] we can use empty article for passing live api data
      articles: [],
      loading: false,
      page: 1,
    }
  }

  // componentDidMount
  async componentDidMount() {
    console.log("Inside componentDidMount.");
    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a1948327a12b4813a181ce04818350d0&page=1&pageSize=20`;
    //fetching data from url 
    let data = await fetch(url);
    //converting data into json data
    let parseData = await data.json();
    console.log(parseData);
    //setting state ,setting articles
    this.setState({
      articles: parseData.articles,
      totalResults: parseData.totalResults
    });
  }
  //Previous button onClick function
  handlePrevClick = async () => {
    console.log("previous click")

    let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a1948327a12b4813a181ce04818350d0&page=${this.state.page - 1}}&pageSize=20`;
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles
    })

  };
  //Next button onClick function
  handleNextClick = async () => {
    console.log("Next click")

    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=a1948327a12b4813a181ce04818350d0&page=${this.state.page + 1}&pageSize=20`;
      let data = await fetch(url);
      let parseData = await data.json();
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles
      })

    }
  };

  render() {
    return (
      <div className='container my-4'>
        <h2>News App : Top Headlines</h2>
        <div className='row'>
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4 mb-2' key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={element.description ? element.description.slice(0, 80) : ""}
                  ImageUrl={element.urlToImage}
                  newsUrl={element?.url} />
              </div>
            )
          })}

        </div>
        <div className='d-flex justify-content-between my-4'>
          <button disabled={this.state.page <= 1} type="button" className="btn btn-secondary" onClick={this.handlePrevClick}>&larr; Previous </button>
          <button type="button" className="btn btn-secondary" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>

    )
  }
}
