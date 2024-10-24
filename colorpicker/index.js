// Initialize Pickr color picker
const pickr = Pickr.create({
    el: '.color-picker',
    theme: 'classic', 
    default : '#39C1EA',

    swatches: [
        'rgba(244, 67, 54, 1)',
        'rgba(233, 30, 99, 0.95)',
        'rgba(156, 39, 176, 0.9)',
        'rgba(103, 58, 183, 0.85)',
        'rgba(63, 81, 181, 0.8)',
        'rgba(33, 150, 243, 0.75)',
        'rgba(3, 169, 244, 0.7)',
        'rgba(0, 188, 212, 0.7)',
        'rgba(0, 150, 136, 0.75)',
        'rgba(76, 175, 80, 0.8)',
        'rgba(139, 195, 74, 0.85)',
        'rgba(205, 220, 57, 0.9)',
        'rgba(255, 235, 59, 0.95)',
        'rgba(255, 192, 7, 1)'
    ],

    components: {
        preview: true,
        opacity: true,
        hue: true,

        interaction: {
            hex: true,
            rgba: true,
            hsla: true,
            hsva: true,
            cmyk: true,
            input: true,
 
         
        }
    }
});

// Function to randomize background color on button click
let colorArr = [0 ,1 ,2 ,3, 4, 5, 6 ,7 , 8, 9 ,"A", "B" , "C", "D", "E", "F" ];

const btnfunction = () => {
    document.getElementById("btn").addEventListener("click", () => {
        let randomNumber = "#";
        for (let i = 0; i < 6; i++) {
            randomIndex = Math.floor(Math.random() * colorArr.length);
            randomNumber += colorArr[randomIndex];
        }
        document.getElementById("hex").innerHTML = randomNumber;
        document.body.style.backgroundColor = randomNumber;
    });
}

// Attach the button event handler
btnfunction();

// Attach the color picker change event once
pickr.on('change', (color) => {
    let hexColor = color.toHEXA().toString();
    document.body.style.backgroundColor = hexColor;
    document.getElementById("selected").innerHTML = `${hexColor} is the selected hex color`;
    console.log(hexColor);
});

