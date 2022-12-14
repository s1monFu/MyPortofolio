import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"
import mock4 from "../img/mock4.png"
import mock5 from "../img/mock5.png"

/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(137, 207, 240)", "rgb(218, 112, 214)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Simon",
    lastName: "Fu",
    initials: "SF", // the example uses first and last, but feel free to use three or more if you like.
    position: "a Software Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '🦡',
            text: 'a proud Badger'
        },
        {
            emoji: '🌎',
            text: 'based in the US'
        },
        // {
        //     emoji: "💼",
        //     text: "Intern at Wisconsin Foundation"
        // },
        {
            emoji: "📷",
            text: "a photography lover"
        },
        {
            emoji: "📧",
            text: "s1mondev@icloud.com"
        }
    ],
    socials: [
        // {
        //     link: "https://facebook.com",
        //     icon: 'fa fa-facebook',
        //     label: 'facebook'
        // },
        {
            link: "https://github.com/s1monFu",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://linkedin.com/in/hongyusimonfu",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://www.instagram.com/simon.captures/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        // {
        //     link: "https://twitter.com",
        //     icon: "fa fa-twitter",
        //     label: 'twitter'
        // }
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Hello! I'm Simon. I am studying CompSci and DataSci at University of Wisconsin-Madison. I love shooting street scenes. You should hire me!",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'html5', 'css3', 'python', 'Java', 'C', 'Swift', 'Swift UI'],
            exposedTo: ['nodejs', 'machine learning', 'system development']
        }
    ,
    hobbies: [
        {
            label: 'cooking',
            emoji: '🌶'
        },
        {
            label: 'reading',
            emoji: '📖'
        },
        // {
        //     label: 'theater',
        //     emoji: '🎭'
        // },
        {
            label: 'movies',
            emoji: '🎥'
        },
        {
            label: 'photography',
            emoji: '📷'
        }

// Same as above, change the emojis to match / relate to your hobbies or interests.
// You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "ligi Workout",
            live: "https://www.ligi.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/ligisoftware", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Beautiful Calculator",
            live: "http://calculator.s1mondev.com",
            source: "https://github.com/s1monFu/BeautifulCalculator",
            image: mock2
        },
        {
            title: "Stray Way",
            live: "https://strayway.cheng-bing.top/",
            source: "https://github.com/WiscWebGroup/strayway",
            image: mock3
        },
        // {
        //     title: "Project 4",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock4
        // },
        // {
        //     title: "Project 5",
        //     live: "https://paytonpierce.dev",
        //     source: "https://github.com/paytonjewell",
        //     image: mock5
        // }
    ]
}