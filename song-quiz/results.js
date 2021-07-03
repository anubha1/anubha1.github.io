const songs = {
    Female: { 
        Country: {
            Happy: [["Fearless by Taylor Swift", "https://youtu.be/7lLigiVgJsE"],
                    ["Rich by Maren Morris", "https://www.youtube.com/watch?v=trZPQUNOIKk"]],
            Sad: [["Rainbow by Kacey Musgraves", "https://www.youtube.com/watch?v=HSEnvguvuK0"], 
                  ["Back To December by Taylor Swift", "https://www.youtube.com/watch?v=oGkSmRlDoGQ"]],
            Any: [["Meant To Be by Bebe Rexha", ["https://www.youtube.com/watch?v=j5YSOabmFgw"]],
                   ["Jolene by Dolly Parton", "https://www.youtube.com/watch?v=Ixrje2rXLMA"]]
        },
        Pop: {
            Happy: [["Firework by Katy Perry", "https://www.youtube.com/watch?v=KLc5qNAzLaM"],
                    ["Cheap Thrills by Sia", "https://www.youtube.com/watch?v=J1b22l1kFKY"]],
            Sad: [["Million Reasons by Lady Gaga", "https://www.youtube.com/watch?v=WYRJ-ryPEu0"],
                  ["When We Were Young by Adele", "https://www.youtube.com/watch?v=Xpc8mAJ_2nM"]],
            Any: [["Welcome To New York by Taylor Swift", "https://www.youtube.com/watch?v=RvYysauPsMc"],
                  ["Malibu by Miley Cyrus", "https://www.youtube.com/watch?v=N4RcRcqj9pQ"]]
        },
        Disney: {
            Happy: [["Try Everything from Zootopia", "https://www.youtube.com/watch?v=c6rP-YP4c5I"], 
                    ["How Far I'll Go from Moana", "https://www.youtube.com/watch?v=cPAbx5kgCJo"]],
            Sad: [["Part Of Your World from The Little Mermaid", "https://www.youtube.com/watch?v=SXKlJuO07eM"], 
                  ["Do You Want To Build A Snowman from Frozen", "https://www.youtube.com/watch?v=TeQ_TTyLGMs"]],
            Any: [["I See The Light from Tangled", "https://www.youtube.com/watch?v=ILRs2r6lcHY"], 
                  ["Speechless from Aladdin", "https://www.youtube.com/watch?v=BaSf-ddZxB8"]]
        }
    },
    Male: { 
        Country: {
            Happy: [["House Party by Sam Hunt", "https://www.youtube.com/watch?v=yF1-IHn8cRU"], 
                    ["The Git Up by Blanco Brown", "https://www.youtube.com/watch?v=DT4kQlM5xuE"]],
            Sad: [["Stay by Florida Georgia Line", "https://www.youtube.com/watch?v=HNnXvo7wOsk"],
                   ["Home by Blake Shelton", "https://www.youtube.com/watch?v=5bJ9L6ytMkQ"]],
            Any: [["10,000 Hours by Dan + Shay and Justin Bieber", "https://www.youtube.com/watch?v=rdXTZAr1zBY"],
                  [ "One Thing Right by Kane Brown", "https://www.youtube.com/watch?v=0lm7l7O3mIE"]]
        },
        Pop: {
            Happy: [["Uptown Funk by Mark Ronson ft Bruno Mars", "https://www.youtube.com/watch?v=7Ya2U8XN_Zw"],
                    ["Counting Stars by One Republic", "https://www.youtube.com/watch?v=2NbC8kGGNus"]],
            Sad: [["Let Me Down Slowly by Alec Benjamin", "https://www.youtube.com/watch?v=RT3W0cUnTmI"],
                  ["Falling by Harry Styles", "https://www.youtube.com/watch?v=WcKSPyhrGWc"]],
            Any: [["Big Plans by Why Don't We", "https://www.youtube.com/watch?v=EWguUJtesrs"], 
                  ["What Makes You Beautiful by One Direction", "https://www.youtube.com/watch?v=UlANZSYZ2Js"]]
        },
        Disney: {
            Happy: [["Under The Sea from The Little Mermaid", "https://www.youtube.com/watch?v=GC_mV1IpjWA"],
                    ["You're Welcome from Moana", "https://www.youtube.com/watch?v=79DijItQXMM"]],
            Sad: [["Lost In The Woods from Frozen 2", "https://www.youtube.com/watch?v=_8jNbZIsBQU"],
                  ["Remember Me from Coco", "https://www.youtube.com/watch?v=KP_XkN2v7OM"]],
            Any: [["Go The Distance from Hercules", "https://www.youtube.com/watch?v=62qtrR2eCu4"],
                  ["The Bare Necessities from The Jungle Book", "https://www.youtube.com/watch?v=c6e3ITsjLRI"]]
        }
    }
};

const fields = {
    "Female" : 0,
    "Male" : 1,
    "Country" : 0,
    "Pop" : 1,
    "Disney" : 2,
    "Happy" : 0,
    "Sad" : 1,
    "Any" : 2
};

const phrases = ["The perfect song for you is . . .", "Your new favorite song will be . . . ", 
    "You will love this song . . . "];

var url = new URL(window.location.href);
var voice = url.searchParams.get("voice");
var genre = url.searchParams.get("genre");
var mood = url.searchParams.get("mood");
console.log(voice);
console.log(genre);
console.log(mood);

var song = "";

if(voice == "Either") {
    if (Math.floor(Math.random() * 2) == 0) {
        voice = "Male"; 
    } else {
        voice = "Female";
    } 
}
var rand2 = Math.floor(Math.random() * 2);
var song = songs[voice][genre][mood][rand2];
var songName = song[0];
var songLink = song[1];
var rand3 = Math.floor(Math.random() * 3);
var phrase = phrases[rand3];
const text = document.createElement('h3');
text.innerText = phrase;
const result = document.createElement('a');
result.innerText = songName;
result.href = songLink;
result.target = "_blank";
const divBox2 = document.getElementById("box2");
divBox2.prepend(result);
divBox2.prepend(text);
