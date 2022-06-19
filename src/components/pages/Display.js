import React, { useEffect } from "react"
import { Article } from "../Article"

const dummyData = {
  status: "ok",
  totalResults: 37,
  articles: [
    {
      source: {
        id: null,
        name: "Daily Mail",
      },
      author: "Christine Rendon",
      title:
        "Justin Bieber gives a special shout-out to his dad Jeremy Bieber for Father's Day 2022 - Daily Mail",
      description:
        "The pop sensation, 27, gave his 'pops' Jeremy Bieber a special shout-out while Kate Hudson gushed about Kurt Russell, her mother Goldie Hawn's long-time partner, on the social media platform.",
      url: "https://www.dailymail.co.uk/tvshowbiz/article-10931967/Justin-Bieber-gives-special-shout-dad-Jeremy-Bieber-Fathers-Day-2022.html",
      urlToImage:
        "https://i.dailymail.co.uk/1s/2022/06/19/16/59262045-0-image-a-11_1655652126936.jpg",
      publishedAt: "2022-06-19T16:29:44Z",
      content:
        "Justin Bieber and Kate Hudson were among the countless A-listers recognizing their dads on Instagram in honor of Father's Day 2022.  \r\nThe pop sensation, 28, gave his 'pops' Jeremy Bieber a special s… [+6922 chars]",
    },
    {
      source: {
        id: null,
        name: "NBCSports.com",
      },
      author: null,
      title:
        "Draymond serves Ja with epic clap back to 'rent free' Tweet - NBC Sports",
      description:
        "Draymond Green and the Warriors have been buying real estate all over the country.",
      url: "https://www.nbcsports.com/bayarea/warriors/draymond-green-serves-ja-morant-epic-clap-back-rent-free-tweet",
      urlToImage:
        "https://www.nbcsports.com/sites/rsnunited/files/styles/metatags_opengraph/public/article/hero/Draymond-Green-Ja-Morant-USA-18186509.jpg",
      publishedAt: "2022-06-19T15:33:41Z",
      content:
        "According to Draymond Green the real estate agent, the property value is higher in Boston than it is in the heads of Memphis Grizzlies players. \r\nFollowing the Warriors' championship-clinching win ov… [+1199 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Inke Kappeler and Tara John, CNN",
      title:
        "Germany to fire up coal stations as Russia squeezes gas supply - CNN",
      description:
        "Germany must reduce natural gas consumption and increase the burning of coal in order to help fill gas storage facilities for next winter, German Economy Minister Robert Habeck announced Sunday as the country moves away from reduced Russian gas supplies.",
      url: "https://www.cnn.com/2022/06/19/energy/germany-russia-gas-supplies-winter-intl/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220619111130-coal-plant-germany-0521-restricted-super-tease.jpg",
      publishedAt: "2022-06-19T15:30:00Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "CNBC",
      },
      author: "Jessica Bursztynsky",
      title:
        "U.S. recession isn't 'inevitable,' but inflation is 'unacceptably high,' Treasury Secretary Yellen says - CNBC",
      description:
        "Talk of a recession has accelerated this year as inflation remains high and the Federal Reserve takes aggressive steps to counter.",
      url: "https://www.cnbc.com/2022/06/19/treasury-secretary-janet-yellen-says-recession-isnt-inevitable.html",
      urlToImage:
        "https://image.cnbcfm.com/api/v1/image/107073346-16547736422022-06-08t154120z_775379771_rc2rnu9bix6u_rtrmadp_0_usa-economy-yellen.jpeg?v=1654773712&w=1920&h=1080",
      publishedAt: "2022-06-19T15:11:10Z",
      content:
        'The recession that many Americans fear is coming is not "at all imminent," Treasury Secretary Janet Yellen said Sunday.\r\nTalk of a recession has accelerated this year as inflation remains high and th… [+1310 chars]',
    },
    {
      source: {
        id: null,
        name: "Hollywood Life",
      },
      author: "Sara Whitman",
      title:
        "Kim Kardashian & Kanye West Reunite At Daughter North’s Basketball Game Ahead of Father’s Day: Photos - HollywoodLife",
      description:
        "Kim Kardashian and Kanye West watched eldest daughter North's game without Pete Davidson in sight. See the pics here!",
      url: "https://hollywoodlife.com/2022/06/19/kim-kardashian-kanye-west-north-basketball-game-photos/",
      urlToImage:
        "https://hollywoodlife.com/wp-content/uploads/2022/06/kim-kardashian-kanye-west-reunite-basketball-game-ss-ftr2.jpg",
      publishedAt: "2022-06-19T15:04:00Z",
      content:
        "View galleryImage Credit: TMZ\r\nKim Kardashian and Kanye West are putting their differences aside for the sake of their kids. The exes were spotted together on the night of Friday, June 17 watching th… [+3107 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Bu Holly Yan and Raza Razek, CNN",
      title:
        "Yellowstone National Park south loop to reopen Wednesday, but only certain visitors will be allowed in each day - CNN",
      description:
        "The park -- which spans parts of Montana, Wyoming, and Idaho -- and many surrounding towns have been inundated with record rainfall and flooding since last weekend, prompting officials to close all entrances into Yellowstone.",
      url: "https://www.cnn.com/2022/06/19/us/yellowstone-reopening-south-loop/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220619085426-yellowstone-national-park-flooding-0615-super-tease.jpg",
      publishedAt: "2022-06-19T14:16:00Z",
      content: null,
    },
    {
      source: {
        id: "cbs-news",
        name: "CBS News",
      },
      author: null,
      title: "A family journey to the origin of Juneteenth - CBS News",
      description:
        "Author and journalist Mark Whitaker visits Texas, where his great-grandfather became a free man in 1865, and meets with relatives for whom Juneteenth – America's second Independence Day – has taken on a special meaning.",
      url: "https://www.cbsnews.com/news/juneteenth-americas-second-independence-day/",
      urlToImage:
        "https://assets1.cbsnewsstatic.com/hub/i/r/2022/06/19/5739648a-44bd-4a78-a1f0-7beb6c70894b/thumbnail/1200x630/a9b47c0be71b2524d8620442decee788/mark-whitaker-gravesite-1280.jpg",
      publishedAt: "2022-06-19T13:12:37Z",
      content:
        "Today is not only Father's Day, it's also Juneteenth, the day which brought freedom to the last of all enslaved people in the United States. It's also our newest federal holiday. That the two coincid… [+4402 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Coral Davenport",
      title:
        "Republican Drive to Tilt Courts Against Climate Action Reaches a Crucial Moment - The New York Times",
      description:
        "A Supreme Court environmental case being decided this month is the product of a coordinated, multiyear strategy by Republican attorneys general and conservative allies.",
      url: "https://www.nytimes.com/2022/06/19/climate/supreme-court-climate-epa.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/06/17/science/00cli-judges-1/00cli-judges-1-facebookJumbo.jpg",
      publishedAt: "2022-06-19T13:08:40Z",
      content:
        "One of CRC Advisors biggest clients is the Republican Attorneys General Association. Another is the Concord Fund, the advocacy group that is the latest incarnation of the Judicial Crisis Network. The… [+1459 chars]",
    },
    {
      source: {
        id: null,
        name: "TMZ",
      },
      author: "TMZ Staff",
      title:
        "Khloe Kardashian and Tristan Thompson Celebrate Father's Day with Daughter True - TMZ",
      description:
        "Khloe Kardashian has hard feelings for Tristan Thompson, at least when it comes to romance, but she's clearly not letting that stand in the way of co-parenting their child.",
      url: "https://www.tmz.com/2022/06/19/tristan-thompson-khloe-kardashian-fathers-day-daughter-true/",
      urlToImage:
        "https://imagez.tmz.com/image/53/16by9/2022/06/19/5387728df51e4414b7446840dc90fca6_xl.jpg",
      publishedAt: "2022-06-19T12:42:00Z",
      content:
        "Khloe Kardashian has hard feelings for Tristan Thompson, at least when it comes to romance, but she's clearly not letting that stand in the way of co-parenting their child.\r\nKhloe and Tristan got tog… [+1200 chars]",
    },
    {
      source: {
        id: null,
        name: "WMUR Manchester",
      },
      author: null,
      title:
        "Deadly shooting involving police officers in Manchester, AG's Office says - WMUR Manchester",
      description:
        "The Attorney General's Office is investigating a deadly shooting involving police officers in Manchester.",
      url: "https://www.wmur.com/article/deadly-officer-involved-shooting-manchester-06192022/40337691",
      urlToImage:
        "https://kubrick.htvapps.com/htv-prod-media.s3.amazonaws.com/images/vlcsnap-2022-06-19-08h24m43s943-1655641496.png?crop=1.00xw:1.00xh;0,0&resize=1200:*",
      publishedAt: "2022-06-19T12:27:00Z",
      content:
        "MANCHESTER, N.H. —The New Hampshire Attorney General's Office is investigating a deadly shooting involving police officers in Manchester.\r\nThe Attorney Generals Office says the shooting took place ea… [+356 chars]",
    },
    {
      source: {
        id: null,
        name: "Motley Fool",
      },
      author: "Stefon Walters",
      title:
        "3 Things the World's Smartest Investors Do in Every Bear Market - The Motley Fool",
      description: "It's happened before and will likely happen again.",
      url: "https://www.fool.com/investing/2022/06/19/3-things-the-worlds-smartest-investors-do-in-every/",
      urlToImage:
        "https://g.foolcdn.com/editorial/images/685267/bear-in-front-of-stocks-on-screen.jpg",
      publishedAt: "2022-06-19T11:18:00Z",
      content:
        "On June 13, 2022, the S&amp;P 500 -- one of the most popular indexes that tracks the largest 500 U.S. public companies -- entered a bear market, dropping more than 20% from its early January 2022 hig… [+3277 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title: "DeSantis draws huge cash haul from Trump donors - POLITICO",
      description:
        "Though many donors are focused on November, when the governor is up for reelection, DeSantis’ fundraising signals that he is  a viable 2024 candidate.",
      url: "https://www.politico.com/news/2022/06/19/desantis-cash-trump-donors-00040659",
      urlToImage:
        "https://static.politico.com/ff/32/ce99ef864c5c9114edeea6793d30/https-delivery.gettyimages.com/downloads/1311497667",
      publishedAt: "2022-06-19T11:01:00Z",
      content:
        "Though many donors are focused on November, when the governor is up for reelection, DeSantis fundraising signals that he is both a viable 2024 candidate who may not need the former presidents backing… [+7563 chars]",
    },
    {
      source: {
        id: "ars-technica",
        name: "Ars Technica",
      },
      author: "Sam Machkovech",
      title:
        "The 10 best games we physically played at Summer Game Fest, Tribeca - Ars Technica",
      description:
        "F1 in VR, quirky puzzles, drunken dodgeball fights, and lots more.",
      url: "https://arstechnica.com/gaming/2022/06/the-10-best-games-we-physically-played-at-summer-game-fest-tribeca/",
      urlToImage:
        "https://cdn.arstechnica.net/wp-content/uploads/2022/06/PlayDays_June10_2022_1920x1280_00090-760x380.jpg",
      publishedAt: "2022-06-19T11:00:45Z",
      content:
        "Enlarge/ Kiosks, controllers, masks, and games: Gaming-preview events hit a little different in 2022, but we'll take whatever we can get.\r\n0 with 0 posters participating\r\nLOS ANGELESThe past week's S… [+5760 chars]",
    },
    {
      source: {
        id: "politico",
        name: "Politico",
      },
      author: null,
      title:
        "Buttigieg: U.S. may act against airlines on consumers' behalf - POLITICO",
      description:
        "Widespread flight disruptions are making a mess of summer plans.",
      url: "https://www.politico.com/news/2022/06/19/buttigieg-airlines-consumers-behalf-00040714",
      urlToImage:
        "https://static.politico.com/14/bb/a5e17d57419a93ef53b10a3fd362/consumer-prices-29610.jpg",
      publishedAt: "2022-06-19T10:42:32Z",
      content:
        "Buttigieg said his department could take enforcement actions against airlines that fail to live up to consumer-protection standards. But first, he said, he wants to see whether there are major flight… [+1937 chars]",
    },
    {
      source: {
        id: null,
        name: "Formula 1",
      },
      author: "F1",
      title:
        "Verstappen braves wet conditions to claim Canadian GP pole ahead of sensational Alonso - Formula 1",
      description:
        "In treacherous conditions for qualifying at the 2022 Canadian Grand Prix, it was Max Verstappen who kept his head to claim his first pole position of 2022 since Imola – with Alpine’s Fernando Alonso set to join him on the front row after a stunning run from t…",
      url: "https://www.formula1.com/en/latest/article.verstappen-braves-wet-conditions-to-claim-canadian-gp-pole-ahead-of.5MEwziqj4PzUiE8Gy9IPjq.html",
      urlToImage:
        "https://www.formula1.com/content/dam/fom-website/sutton/2022/Canada/Saturday/1403718921.jpg",
      publishedAt: "2022-06-19T09:16:04Z",
      content:
        "In treacherous conditions for qualifying at the 2022 Canadian Grand Prix, it was Max Verstappen who kept his head to claim his first pole position of 2022 since Imola with Alpines Fernando Alonso set… [+7505 chars]",
    },
    {
      source: {
        id: null,
        name: "New York Times",
      },
      author: "Glenn Thrush, Serge F. Kovaleski",
      title:
        "Loopholes and Missing Data: The Gaps in the Gun Background Check System - The New York Times",
      description:
        "The massive system already has major loopholes advocated by gun manufacturers to maintain easier access to firearms. The Senate’s proposed gun reform measures could fall victim to those same limitations.",
      url: "https://www.nytimes.com/2022/06/19/us/gun-background-checks.html",
      urlToImage:
        "https://static01.nyt.com/images/2022/06/17/us/00background-checks01/00background-checks01-facebookJumbo.jpg",
      publishedAt: "2022-06-19T09:00:15Z",
      content:
        "Do I think there are a lot of gaps in NICS? No, said Mr. Brooks, who serves on the board of the International Association of Chiefs of Police, which has worked to improve the system. But its like any… [+1391 chars]",
    },
    {
      source: {
        id: null,
        name: "The Guardian",
      },
      author: "Joe Parkin Daniels",
      title:
        "‘Let’s make history’: Colombia could elect first leftist president in runoff - The Guardian",
      description:
        "The election is being contested by mayor of Bogotá Gustavo Petro and populist business tycoon Rodolfo Hernández",
      url: "https://amp.theguardian.com/world/2022/jun/19/colombia-elections-first-left-government-voting",
      urlToImage:
        "https://i.guim.co.uk/img/media/48681d9e25166e9cb00bcb9d1699d3d633493d6d/0_369_5694_3419/master/5694.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=2ee9d90e128e35b95e5c286bef8ab405",
      publishedAt: "2022-06-19T09:00:00Z",
      content:
        "Voters head to the polls in Colombia on Sunday in a historic presidential election that could see the left win for the first time in the conservative South American country.\r\nGustavo Petro, a former … [+2593 chars]",
    },
    {
      source: {
        id: "reuters",
        name: "Reuters",
      },
      author: null,
      title:
        "Apple workers at Maryland store vote to unionize, a first for the U.S. - Reuters",
      description:
        'Apple Inc <a href="https://www.reuters.com/companies/AAPL.O" target="_blank">(AAPL.O)</a> workers in Maryland voted on Saturday to join a union, becoming the first retail employees of the tech giant to unionize in the United States.',
      url: "https://www.reuters.com/markets/us/apple-workers-maryland-store-vote-unionize-first-us-2022-06-19/",
      urlToImage:
        "https://www.reuters.com/resizer/4ujy9x8pi1dAsKOHYNE8w-ftyZg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/OE4KSQPUABKUPMGHJSVGXHLEBQ.jpg",
      publishedAt: "2022-06-19T08:26:00Z",
      content:
        "June 18 (Reuters) - Apple Inc (AAPL.O) workers in Maryland voted on Saturday to join a union, becoming the first retail employees of the tech giant to unionize in the United States.\r\nMore than 100 wo… [+1301 chars]",
    },
    {
      source: {
        id: "cnn",
        name: "CNN",
      },
      author: "Holly Yan, CNN",
      title:
        "These children lost young parents to Covid-19. Here's what they want other kids -- and adults -- to know - CNN",
      description:
        "A kindergartener just finished his first day of school when he watched his young mother collapse and take her final breaths. Suddenly, he was orphaned by Covid-19. A 13-year-old girl has suffered panic attacks since her dad's death -- but must stay strong to …",
      url: "https://www.cnn.com/2022/06/19/us/young-parents-covid-deaths/index.html",
      urlToImage:
        "https://cdn.cnn.com/cnnnext/dam/assets/220616001444-02-katherine-klosterman-family-orphans-of-covid-super-tease.jpeg",
      publishedAt: "2022-06-19T08:02:00Z",
      content:
        "(CNN)A 5-year-old had just finished his first day of kindergarten when he watched his young mother collapse and take her final breaths. A 13-year-old has suffered panic attacks since her dad's death.… [+11479 chars]",
    },
    {
      source: {
        id: "usa-today",
        name: "USA Today",
      },
      author: "Jace Evans, USA TODAY",
      title:
        "US Open final round tee times, TV schedule and streaming info for Sunday - USA TODAY",
      description:
        "The 2022 U.S. Open contested at The Country Club in Brookline, Massachusetts, concludes Sunday. Here's everything you need to know.",
      url: "https://www.usatoday.com/story/sports/golf/2022/06/19/us-open-final-round-tee-times-tv-schedule-streaming-info/7675537001/",
      urlToImage:
        "https://www.gannett-cdn.com/presto/2022/06/19/USAT/44c2ac5a-5a81-4bb9-bc0b-58181a9bd654-USATSI_18559844.jpg?auto=webp&crop=2985,1679,x511,y96&format=pjpg&width=1200",
      publishedAt: "2022-06-19T08:00:41Z",
      content:
        'The third round of the U.S. Open was defined by its "brutal" conditions, setting up what should be a fascinating final round Sunday at The Country Club outside of Boston. \r\nLeading the way is Will Za… [+3109 chars]',
    },
  ],
}

function Display() {
  const fetchHeadlines = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`
    console.log("URL>>>", url)
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
  }

  const articles = dummyData.articles.map((article) => (
    <Article article={article} key={`article-${article.publishedAt}`} />
  ))

  // useEffect(() => fetchHeadlines(), [])
  return (
    <>
      <h1>Display Page</h1>
      {articles}
      {console.log(dummyData.articles[0])}
      {console.log(dummyData.articles[0].description)}
      {console.log(dummyData.articles[0].content)}
    </>
  )
}

export default Display
