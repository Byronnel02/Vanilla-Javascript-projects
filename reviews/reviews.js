let reviews = [
    {
        id:1,
        name: "Jakobus Kaasneus",
        job : "UX Designer",
        img :"person1.jpeg",
        text : "The spaghetti wizard danced on a rainbow while shouting at a sleepy toaster, which was knitting sweaters for confused llamas on roller skates in a pineapple forest.",
    } , 
    {
        id:2,
        name: "Sonika Schutte",
        job : "TV host",
        img :"sonika.jpeg",
        text : "Umbrella kittens flew through the sky, painting clouds purple while singing songs about rubber ducks and marshmallow castles made of chocolate spaghetti and dancing cucumbers.",
    } ,

    {
        id:3,
        name: "Lizaan Van Der Merwe",
        job : "Nature Photographer",
        img :"Lizaan.jpeg",
        text : "A flying elephant wearing sunglasses read a newspaper upside down while riding a bicycle made of cheese, debating the merits of ice cream against purple pickles in a world of waffle houses.",
    } 
    ,

    {
        id:4,
        name: "Mark Botha",
        job : "Actor",
        img :"Mark.jpeg",
        text : "The clock melted like butter on a hot day, causing the jellybean orchestra to play symphonies of silence while turtles played hopscotch on the ceiling of a giant donut shop.",
    } 
    ,

    {
        id:5,
        name: "Schalk Fourie",
        job : "Rugby Coach",
        img :"Schalk.jpeg",
        text : "Fluffy pancakes roamed the streets, holding hands with invisible friends and discussing the weather forecast for underwater cities filled with bubblegum and candy cane skyscrapers.",
    } 
    ,

    {
        id:6,
        name: "Dieter Kriel",
        job : "Rugby Player",
        img :"Dieter.jpeg",
        text : "A disco ball fell from the sky, crashing into a group of singing pineapples, who then organized a parade of talking chairs and dancing fruitcakes to celebrate their newfound friendship.",
    } 
    ,

    {
        id:7,
        name: "Andrea Le Roux",
        job : "PHP programmer",
        img :"andrea.jpeg",
        text : "The spaghetti monster flew over the ocean, sprinkling glitter on unsuspecting fish while rubber bands competed in a marathon against flying books wearing tiny hats made of marshmallows.",
    } 
    ,

    {
        id:8,
        name: "Crystal Niewhoudt",
        job : "Social media influencer",
        img :"Crystal.jpeg",
        text : "A rainbow unicorn hosted a tea party for squirrels and frogs, serving biscuits that whispered secrets and jelly that glowed in the dark, all while the curtains danced to the music of the stars.",
    } 
    ,

    {
        id:9,
        name: "Anke Dippenaar",
        job : "PHP programmer",
        img :"anke.jpeg",
        text : "The giant cupcake jumped into a swimming pool filled with fizzy lemonade, where it held a contest for the best belly flop while gummy bears cheered from the sidelines wearing tiny sunglasses.",
    } 
    ,

    {
        id:10,
        name: "Andrea Le Roux",
        job : "PHP programmer",
        img :"andrea.jpeg",
        text : "The marshmallow pirate sailed a ship made of gummy worms across a sea of chocolate milk, trading jellybeans for laughter with dancing octopuses wearing bow ties and sunglasses, all while the sun played hide-and-seek with a chorus of singing frogs on floating lily pads.",
    } 
]

let name =  document.getElementById("name");
let img =  document.getElementById("img");
let job =  document.getElementById("job");
let text =  document.getElementById("text");

let next = document.getElementById("next")
let prev = document.getElementById("prev")
let random = document.getElementById("random")

let currentItem = 0;
showData = () => {
    let item =  reviews[currentItem]
    img.src = item.img
    name.textContent = item.name 
    job.textContent = item.job
    text.textContent = item.text
    console.log(currentItem)
} 

window.addEventListener("DOMContentLoaded", () => {;   
    showData()
});



document.getElementById("next").addEventListener("click", () => {
    currentItem++;
    if(currentItem > reviews.length - 1) {
        currentItem = 0
    }
    showData()
}
)


document.getElementById("prev").addEventListener("click", () => {
    currentItem--;
    if(currentItem < 0) {
        currentItem = 9
    }
    showData()
}
)

document.getElementById("random").addEventListener("click", () => {
    const radndomNum = Math.floor(Math.random() * reviews.length) ;
    currentItem = radndomNum
    showData()
}
)
 
