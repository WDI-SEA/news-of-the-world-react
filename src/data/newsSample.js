const newsSample = [
 {  
    articles: [
      {
        source: {
          id: null,
          name: 'National Post'
        },
        author: 'Steve Nesius and Steve Gorman, Reuters',
        title:
          "NASA's big, new moon rocket set for debut in rollout to Florida launch pad - National Post",
        description:
          'CAPE CANAVERAL — NASA’s next-generation moon rocket was due on Thursday to make a highly anticipated, slow-motion journey from an assembly plant to its launch…',
        url:
          'https://nationalpost.com/pmn/news-pmn/nasas-big-new-moon-rocket-set-for-debut-in-rollout-to-florida-launch-pad',
        urlToImage: null,
        publishedAt: '2022-03-17T04:26:10Z',
        content:
          'Author of the article:\r\nArticle content\r\nCAPE CANAVERAL NASAs next-generation moon rocket was due on Thursday to make a highly anticipated, slow-motion journey from an assembly plant to its launch pa… [+5197 chars]'
      },
      {
        source: {
          id: null,
          name: 'Ctvnews.ca'
        },
        author: 'Don Babwin and Sara Burnett',
        title:
          'Jussie Smollett released from county jail during appeal - CTV News',
        description:
          'Jussie Smollett was released from jail Wednesday following six nights behind bars after an appeals court agreed with his lawyers that he should be free pending the appeal of his conviction for lying to police about a racist and homophobic attack.',
        url:
          'https://www.ctvnews.ca/entertainment/jussie-smollett-released-from-county-jail-during-appeal-1.5821966',
        urlToImage:
          'https://www.ctvnews.ca/polopoly_fs/1.5821997.1647456115!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
        publishedAt: '2022-03-17T02:19:00Z',
        content:
          'CHICAGO -- \r\nJussie Smollett was released from jail Wednesday following six nights behind bars after an appeals court agreed with his lawyers that he should be free pending the appeal of his convicti… [+3801 chars]'
      },
      {
        source: {
          id: null,
          name: 'EurekAlert'
        },
        author: null,
        title:
          'UBC scientists discover how to 3D print testicular cells - EurekAlert',
        description:
          'In a pair of world firsts, UBC scientists have 3D printed human testicular cells and identified promising early signs of sperm-producing capabilities. The researchers, led by UBC urology assistant professor Dr. Ryan Flannigan, hope the technique will one day …',
        url: 'https://www.eurekalert.org/news-releases/946496',
        urlToImage:
          'https://earimediaprodweb.azurewebsites.net/Api/v1/Multimedia/6c00ca75-7838-485b-8954-01186bda924d/Rendition/thumbnail/Content/Public',
        publishedAt: '2022-03-17T02:03:55Z',
        content:
          'image: A microscopic image of the 3D-printed tubule. Twelve days after printing, the team found that the cells had not only survived, but also matured into several of the specialized cells involved i… [+3998 chars]'
      },
      {
        source: {
          id: null,
          name: 'Global News'
        },
        author: 'The Associated Press',
        title:
          '2 Canadian students injured, 9 others killed in Texas crash - Global News',
        description:
          'Two Canadian students were hospitalized in critical condition',
        url:
          'https://globalnews.ca/news/8688517/canadian-students-injured-9-killed-texas-crash/',
        urlToImage:
          'https://globalnews.ca/wp-content/uploads/2022/03/fatalcrash.jpeg?quality=85&strip=all&w=720&h=379&crop=1',
        publishedAt: '2022-03-17T00:43:36Z',
        content:
          'Nine people have died in a fiery, head-on collision in West Texas, including six New Mexico university students and a coach returning from a golf tournament, as well as a 13-year-old boy, authorities… [+5576 chars]'
      },
      {
        source: {
          id: null,
          name: 'Habs Eyes on the Prize'
        },
        author: 'Justin Blades',
        title:
          'Ben Chiarot traded to the Florida Panthers for Ty Smilanic, 2023 first-round pick, and more - Habs Eyes on the Prize',
        description:
          'The Montreal Canadiens have dealt the defenceman to a division rival.',
        url:
          'https://www.habseyesontheprize.com/transactions-signings-trades/2022/3/16/22982127/nhl-trade-news-montreal-canadiens-ben-chiarot-traded-to-florida-panthers-ty-smilanic-2023-draft',
        urlToImage:
          'https://cdn.vox-cdn.com/thumbor/fwkashcJGxypA8WJO34uSsH9_1w=/0x0:3000x1571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23322383/1369568878.jpg',
        publishedAt: '2022-03-17T00:21:34Z',
        content:
          'The Montreal Canadiens have traded Ben Chiarot to the Florida Panthers, receiving forward Ty Smilanic, Floridas 2023 first-round pick. and their 2022 fourth-rounder in return. Montreal retains half o… [+1198 chars]'
      },
      {
        source: {
          id: null,
          name: '9to5Mac'
        },
        author: null,
        title:
          'iPhone 14 with A15 Bionic chip? At the end of the day, it’s all about marketing - 9to5Mac',
        description:
          "Recent rumors suggest that some iPhone 14 models will keep the A15 Bionic chip from this year's models. But why would Apple do that?",
        url:
          'https://9to5mac.com/2022/03/16/iphone-14-with-a15-bionic-chip-at-the-end-of-the-day-its-all-about-marketing/',
        urlToImage:
          'https://i0.wp.com/9to5mac.com/wp-content/uploads/sites/6/2020/10/Apple-Silicon.png?resize=1200%2C628&quality=82&strip=all&ssl=1',
        publishedAt: '2022-03-17T00:15:06Z',
        content:
          'Every year, Apple announces a new generation iPhone. Sometimes it comes with a brand new design, sometimes not. But the only thing we know for sure is that the new iPhone will feature a new chip at l… [+5200 chars]'
      },
      {
        source: {
          id: 'cbc-news',
          name: 'CBC News'
        },
        author: null,
        title:
          "Defence minister says she's considering 'aggressive options' to increase Canada's military spending - CBC News",
        description:
          "Defence Minister Anita Anand says she will present a range of military spending options to cabinet ahead of the upcoming spring budget — some of which could result in a significant jump in Canada's defence spending.",
        url:
          'https://www.cbc.ca/news/politics/anand-defence-spending-1.6387361',
        urlToImage:
          'https://i.cbc.ca/1.6377082.1646761098!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/latvia-canada-nato.jpg',
        publishedAt: '2022-03-16T23:41:34Z',
        content:
          "Defence Minister Anita Anand says she will present a range of military spending options to cabinet ahead of the upcoming spring budget some of which could result in a significant jump in Canada's def… [+2913 chars]"
      },
      {
        source: {
          id: null,
          name: 'Toronto Star'
        },
        author: 'https://www.facebook.com/marcooved/',
        title:
          'Toronto mayor calls for review of $144-million contract given to company partly owned by sanctioned Russian oligarch - Toronto Star',
        description:
          'Canada has sanctioned billionaire Oleg Deripaska, who partly owns Strabag, a company with nearly $1 billion in active government contracts in Ontario.',
        url:
          'https://www.thestar.com/news/investigations/2022/03/16/toronto-mayor-calls-for-review-of-144-million-contract-given-to-company-partly-owned-by-sanctioned-russian-oligarch.html',
        urlToImage:
          'https://images.thestar.com/RW8HKCQrn1k8dat8-9rGgAeUMek=/1200x800/smart/filters:cb(1647473064022)/https://www.thestar.com/content/dam/thestar/news/investigations/2022/03/16/toronto-mayor-calls-for-review-of-144-million-contract-given-to-company-partly-owned-by-sanctioned-russian-oligarch/_1_deripaska_2018.jpg',
        publishedAt: '2022-03-16T23:22:34Z',
        content:
          'Mayor John Tory has called for a review of a $144-million contract the city awarded to a construction company partly owned by a sanctioned Russian oligarch.\r\nTory’s office made the statement Wednesda… [+6007 chars]'
      },
      {
        source: {
          id: null,
          name: 'Calgary Herald'
        },
        author: 'Newsroom Staff',
        title:
          'COVID-19 Update: Copping announces changes to reporting, rapid testing | 593 new cases, four deaths | Canada to lift test mandate for vaccinated travellers - Calgary Herald',
        description:
          'Watch this page throughout the day for updates on COVID-19 in Calgary.',
        url:
          'https://calgaryherald.com/news/local-news/covid-19-update-calgary-marks-two-years-since-declaring-covid-19-state-of-emergency-council-pens-letter-to-police-commission-on-beltline-protests',
        urlToImage:
          'https://smartcdn.gprod.postmedia.digital/calgaryherald/wp-content/uploads/2022/03/CAL-031522-gya-1.jpg',
        publishedAt: '2022-03-16T23:15:00Z',
        content:
          'Watch this page throughout the day for updates on COVID-19 in Calgary \r\nArtistic Alley A man walks past the colourful murals that add some beauty to a back alley between 1st and 2nd Streets S.W. in d… [+21204 chars]'
      },
      {
        source: {
          id: null,
          name: 'Www.tsn.ca'
        },
        author: 'TSN.ca Staff',
        title: 'Report: Bills sign LB Miller to six-year, $120M deal - TSN',
        description:
          'The Buffalo Bills have inked veteran linebacker Von Miller to a six-year, $120 million deal, according to a report by Ian Rapoport of NFL Network.',
        url:
          'https://www.tsn.ca/buffalo-bills-lb-von-miller-six-year-120m-deal-1.1771904',
        urlToImage:
          'https://www.tsn.ca/polopoly_fs/1.1771908!/fileimage/httpImage/image.jpg_gen/derivatives/landscape_620/von-miller.jpg',
        publishedAt: '2022-03-16T22:47:26Z',
        content:
          'The Buffalo Bills have inked veteran linebacker Von Miller to a six-year, $120 million deal, according to a report by Ian Rapoport of NFL Network.\r\nVon Miller gets a 6-year deal for $120M, source sai… [+717 chars]'
      },
      {
        source: {
          id: null,
          name: 'YouTube'
        },
        author: null,
        title:
          "Does Erik Källgren help calm Leafs fans' nerves? | Tim & Friends - SPORTSNET",
        description: null,
        url:
          'https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3Da8sybLuO63s',
        urlToImage: null,
        publishedAt: '2022-03-16T22:19:29Z',
        content: null
      },
      {
        source: {
          id: null,
          name: 'MobileSyrup'
        },
        author: null,
        title:
          "Here's how to unlock your iPhone with Face ID while wearing a mask - MobileSyrup",
        description:
          "It's now possible to unlock your iPhone with Face ID while wearing a mask.",
        url:
          'https://mobilesyrup.com/2022/03/16/heres-how-unlock-your-iphone-with-face-id-wearing-a-mask/',
        urlToImage:
          'https://cdn.mobilesyrup.com/wp-content/uploads/2022/03/Face-ID-with-mask-header-scaled.jpg',
        publishedAt: '2022-03-16T22:15:00Z',
        content:
          'Apple dropped iOS 15.4 on Monday, March 14th and with the update came new emojis, an additional voice option for Siri and minor bug fixes, though frontrunning the release is the long-requested suppor… [+2766 chars]'
      },
      {
        source: {
          id: null,
          name: '9to5google.com'
        },
        author: null,
        title:
          'Google I/O 2022 takes place May 11-12 as virtual event with live keynotes - 9to5Google',
        description:
          'The difficult SVD puzzle reveals that Google will be hosting I/O 2022 on May 11-12. It will be another virtual event that will be free...',
        url: 'https://9to5google.com/2022/03/16/google-io-2022-dates/',
        urlToImage:
          'https://i0.wp.com/9to5google.com/wp-content/uploads/sites/4/2022/03/google-io-2022-cover-final.jpeg?resize=1200%2C628&quality=82&strip=all&ssl=1',
        publishedAt: '2022-03-16T22:08:14Z',
        content:
          'The difficult SVD puzzle if solved reveals that Google will be hosting I/O 2022 on May 1112. It’s another virtual event that will be free for all to participate in.\r\nI/O 2022 will be a virtual event … [+1852 chars]'
      },
      {
        source: {
          id: null,
          name: 'Toronto Sun'
        },
        author: 'Rob Longley',
        title:
          'Blue Jays acquire slugging all-star, Gold Glove third baseman Matt Chapman - Toronto Sun',
        description:
          'DUNEDIN — It started as a gloomy day at the Blue Jays player development complex with thunderstorms in the forecast and most outdoor drills on hold.   And then…',
        url:
          'https://torontosun.com/sports/baseball/toronto-blue-jays/blue-jays-closing-in-on-deal-for-all-star-third-baseman-matt-chapman',
        urlToImage:
          'https://smartcdn.gprod.postmedia.digital/torontosun/wp-content/uploads/2022/03/CP125816813-scaled.jpg?quality=100&strip=all',
        publishedAt: '2022-03-16T21:33:45Z',
        content:
          'Third baseman Matt Chapman ranges to his left to field a ground ball for the Oakland As last season. The three-time Gold Glove slugger was acquired yesterday by the Blue Jays for four prospects. Phot… [+7233 chars]'
      },
      {
        source: {
          id: null,
          name: 'Www.geo.tv'
        },
        author: 'Web Desk',
        title:
          'Scarlett Johansson, other celebrities raise voice against controversial gas pipeline - Geo News',
        description: 'Leonardo DeCaprio also signed the petition',
        url:
          'https://www.geo.tv/latest/405669-scarlett-johansson-other-celebrities-raise-voice-against-controversial-gas-pipeline',
        urlToImage:
          'https://www.geo.tv/assets/uploads/updates/2022-03-17/405669_021149_updates.jpg',
        publishedAt: '2022-03-16T20:57:45Z',
        content:
          'The Royal Bank of Canada has been urged by Hollywood celebrities to stop financing the Coastal GasLink, a gas pipeline in northwestern British Columbia without the consent of local hereditary chiefs.… [+1192 chars]'
      },
      {
        source: {
          id: 'cbc-news',
          name: 'CBC News'
        },
        author: null,
        title:
          'NATO makes plans to boost its military presence in eastern Europe as Ukraine war grinds on - CBC News',
        description:
          'NATO defence ministers have asked military commanders to draw up plans for a significantly larger long-term deployment of western forces in eastern Europe, the secretary general of the alliance said Wednesday.',
        url:
          'https://www.cbc.ca/news/politics/nato-ukraine-russia-stoltenberg-1.6386902',
        urlToImage:
          'https://i.cbc.ca/1.6371442.1647454328!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/nato-russia.jpg',
        publishedAt: '2022-03-16T20:49:12Z',
        content:
          'NATO defence ministers have asked military commanders to draw up plans for a significantly larger long-term deployment of western forces in eastern Europe, the secretary general of the alliance said … [+4884 chars]'
      },
      {
        source: {
          id: 'cbc-news',
          name: 'CBC News'
        },
        author: null,
        title:
          'Scientists giddy as NASA releases image of distant star, galaxies from James Webb Space Telescope - CBC News',
        description:
          'NASA released an image Wednesday from the James Webb Space Telescope that was taken to see how its 18 hexagonal mirrors worked together for a single co-ordinated image of a star 1.6 million kilometres away from Earth. Officials said it worked better than expe…',
        url: 'https://www.cbc.ca/news/science/james-webb-image-1.6387224',
        urlToImage:
          'https://i.cbc.ca/1.6387232.1647459887!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_620/james-webb-focus-image.jpg',
        publishedAt: '2022-03-16T20:31:58Z',
        content:
          "NASA's new space telescope has gazed into the distant universe and shown perfect vision: a spiky image of a faraway star photobombed by thousands of ancient galaxies.\r\nThe image released Wednesday fr… [+1284 chars]"
      },
      {
        source: {
          id: null,
          name: 'ETCanada.com'
        },
        author: 'Becca Longmire',
        title:
          'Trevor Noah Responds To Kanye West’s Racist Reaction After ‘Daily Show’ Host Urges People To Take Kim, Pete & Kanye Feud Seriously - ETCanada.com',
        description:
          'Trevor Noah addressed the Kim Kardashian/Pete Davidson/Kanye West feud during Tuesday\'s "The Daily Show". Noah, who grew up in an abusive household, pointed out that people should be taking the whole thing more seriously than they are despite some questioning…',
        url:
          'https://etcanada.com/news/876805/trevor-noah-responds-to-kanye-wests-racist-reaction-after-daily-show-host-urges-people-to-take-kim-pete-kanye-feud-seriously/',
        urlToImage:
          'https://etcanada.com/wp-content/uploads/2022/03/trevorkimkanye.jpg?quality=80&strip=all&w=720&h=480&crop=1',
        publishedAt: '2022-03-16T20:31:49Z',
        content:
          'By Becca Longmire.\r\n2 hours ago Trevor Noah addressed the Kim Kardashian/Pete Davidson/Kanye West feud during Tuesday’s “The Daily Show”.\r\nNoah, who grew up in an abusive household, pointed out that … [+2985 chars]'
      },
      {
        source: {
          id: null,
          name: "CP24 Toronto's Breaking News"
        },
        author: 'Andrea Rosa',
        title:
          "Russia continues to bombard Ukraine's cities as talks continue - CP24 Toronto's Breaking News",
        description:
          'Russian forces destroyed a theater in Mariupol where hundreds of people were sheltering Wednesday and rained fire on other cities, Ukrainian authorities said, even as the two sides projected optimism over efforts to negotiate an end to the fighting.',
        url:
          'https://www.cp24.com/world/russia-s-onslaught-on-ukrainian-cities-continues-amid-optimism-over-talks-1.5821169',
        urlToImage:
          'https://www.cp24.com/polopoly_fs/1.5822755.1647482243!/httpImage/image.jpg_gen/derivatives/landscape_620/image.jpg',
        publishedAt: '2022-03-16T20:23:02Z',
        content:
          'KYIV, Ukraine (AP) - Russian forces destroyed a theater in Mariupol where hundreds of people were sheltering Wednesday and rained fire on other cities, Ukrainian authorities said, even as the two sid… [+8630 chars]'
      },
      {
        source: {
          id: null,
          name: 'Kitco NEWS'
        },
        author: 'http://www.facebook.com/kitconews',
        title:
          "Hawkish Powell: U.S. economy 'can handle' six more rate hikes - Kitco NEWS",
        description: '',
        url:
          'https://www.kitco.com/news/2022-03-16/Hawkish-Powell-U-S-economy-can-handle-six-more-rate-hikes.html',
        urlToImage:
          'https://www.kitco.com/news/2022-03-16/images/fedratehike-min.jpg',
        publishedAt: '2022-03-16T20:15:00Z',
        content:
          'Federal Reserve Chair Jerome Powell sounded quite hawkish as the U.S. central bank raised rates by 25 basis points for the first time since 2018 and projected six more rate hikes in 2022.\r\nThe more a… [+3154 chars]'
      }
    ]
  }
]
