var shapes1 = [
    {
        board: [5, 4],
        answers: [
            [[true, true], [true, false]],
            [[true], [true], [true]],
            [[true, true], [true, true], [true, false]],
            [[false, false, true], [false, false, true], [true, true, true]],
            [[true, false], [true, false], [true, true]]
        ]
    },
    {
        board: [5, 4],
        answers: [
            [[true, true, true], [true, true, false]],
            [[true, false], [true, false], [true, true]],
            [[true, true, false], [false, true, true]],
            [[false, true], [true, true]],
            [[true], [true], [true], [true]]
        ]
    },
    {
        board: [5, 4],
        answers: [
            [[true, true], [true, true]],
            [[true, true], [false, true]],
            [[true], [true], [true]],
            [[false, true, false], [true, true, true], [false, true, false]],
            [[true, false, true], [true, true, true]]
        ]
    },
    {
        board: [5, 4],
        answers: [
            [[true, true]],
            [[true, false], [true, true], [true, true]],
            [[true, true, true], [true, false, false], [true, false, false], [true, false, false]],
            [[true, true]],
            [[false, true], [true, true], [false, true], [false, true]]
        ]
    },
    {

        board: [5, 4],
        answers: [
            [[true, true], [true, true]],
            [[true, true], [true, false], [true, false]],
            [[true, false, false], [true, true, true]],
            [[true, true], [true, false], [true, false]],
            [[false, true], [false, true], [true, true]]
        ]
    }
];

var shapes2 = [
    {
        board: [5, 5],
        answers: [
            [[false, false, true], [true, true, true], [true, true, true]],
            [[false, true, false], [true, true, true], [false, true, false]],
            [[true]],
            [[false, true, false], [true, true, true], [false, true, false]],
            [[true, false], [true, true]],
            [[true, true, true], [true, false, false]]
        ]
    },
    {
        board: [5,6],
        answers: [
            [[false, true, false], [true, true, true], [false, true, false]],
            [[true, true], [true, false], [true, true]],
            [[true, false, false], [true, false, true],[true, true, true]],
            [[false, true], [true, true] ,[true, false]],
            [[true, true, true], [false, true, false]],
            [[true, true]],
            [[true, false, false], [true, true, true]]
        ]
    },
    {
        board: [5, 6],
        answers: [
            [[true, true ,true], [false, false, true], [false, false, true]],
            [[true, true, true]],
            [[true, true], [true, true], [true, false],[true, true]],
            [[false, true, false], [true, true, true], [false, true, false]],
            [[true, false, true], [true, true, true]]
        ]
    },
    {
        board: [5, 5],
        answers: [
            [[true, true]],
            [[true, false], [true, true], [true, true]],
            [[true, true, true], [true, false, false], [true, false, false], [true, false, false]],
            [[true, true]],
            [[false, true], [true, true], [false, true], [false, true]]
        ]
    },
    {

        board: [5, 5],
        answers: [
            [[true, true], [true, true]],
            [[true, true], [true, false], [true, false]],
            [[true, false, false], [true, true, true]],
            [[true, true], [true, false], [true, false]],
            [[false, true], [false, true], [true, true]]
        ]
    }
];

var shapes3 = [
    {
        board: [5, 5],
        answers: [
            [[true, true], [true, false]],
            [[true], [true], [true]],
            [[true, true], [true, true], [true, false]],
            [[false, false, true], [false, false, true], [true, true, true]],
            [[true, false], [true, false], [true, true]]
        ]
    },
    {
        board: [5,5],
        answers: [
            [[true, true, true], [true, true, false]],
            [[true, false], [true, false], [true, true]],
            [[true, true, false], [false, true, true]],
            [[false, true], [true, true]],
            [[true], [true], [true], [true]]
        ]
    },
    {
        board: [5, 5],
        answers: [
            [[true, true], [true, true]],
            [[true, true], [false, true]],
            [[true], [true], [true]],
            [[false, true, false], [true, true, true], [false, true, false]],
            [[true, false, true], [true, true, true]]
        ]
    },
    {
        board: [5, 5],
        answers: [
            [[true, true]],
            [[true, false], [true, true], [true, true]],
            [[true, true, true], [true, false, false], [true, false, false], [true, false, false]],
            [[true, true]],
            [[false, true], [true, true], [false, true], [false, true]]
        ]
    },
    {

        board: [5, 5],
        answers: [
            [[true, true], [true, true]],
            [[true, true], [true, false], [true, false]],
            [[true, false, false], [true, true, true]],
            [[true, true], [true, false], [true, false]],
            [[false, true], [false, true], [true, true]]
        ]
    }
];

var shapes;
var index_shapes = 0;
var index = -1;
var colors = ["yellow", "red", "blue", "green", "orange", "pink"];
var copyColors = colors.slice();

//פונקציה שמופעלת בעת עליית הדף
function start() {
    if (index == -1) {
        shapes = shapes1;
    }
    if (index == 4) {
        index_shapes++;
        ziro();
    } 
    index++;
    createBoard();
    createShapes();
    
}

//פונקציה שפעולת בעת לחיצה של בחירת שלב פתוח
//לאפס ערכים כאשר מסיימים רמה
function ziro() {
    alert("כל הכבוד סיימת רמה")
    index = -1;
    if (index_shapes >=1) {
        shapes = shapes2;
        if (index_shapes >= 2) {
            shapes = shapes3;
        }
           
    }
   
}

//ליצור לוח למשחק 
function createBoard() {
    document.getElementById("board").innerHTML = "";
    for (var i = 0; i < shapes[index].board[0]; i++) {
        var row = document.createElement("div");
        row.classList.add("row");
        for (var j = 0; j < shapes[index].board[1]; j++) {
            var cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        document.getElementById("board").appendChild(row);
    }
}

//ליצור צורות 
function createShapes() {
    var shapeColors = colors.slice();
    document.getElementById("shapes-container").innerHTML = "";
    for (var i = 0; i < shapes[index].answers.length; i++) {
        var shapeElement = createShape(shapes[index].answers[i], i, shapeColors);
        document.getElementById("shapes-container").appendChild(shapeElement);
    }
}


//ליצור צורות  
function createShape(shape, id, shapeColors) {
    var shapeElement = document.createElement("div");
    shapeElement.classList.add("shape", "flex-col");
    shapeElement.setAttribute("data-index", id);
    var color = getColor(shapeColors);
    for (var i = 0; i < shape.length; i++) {
        var row = document.createElement("div");
        row.classList.add("flex-row");
        for (var j = 0; j < shape[i].length; j++) {
            var part = document.createElement("div");
            part.classList.add("shape-part");
            if (shape[i][j])
                part.style.backgroundColor = color;
            else
                part.classList.add("empty");
            row.appendChild(part);
        }
        shapeElement.appendChild(row);
    }
    return shapeElement;
}


//לצבוע את הצורות ברנדום
function getColor(colors) {
    if (colors.length == 0)
        colors = copyColors.slice();
    var index = parseInt(Math.random() * colors.length);
    var color = colors[index];
    colors.splice(index, 1);
    return color;
}



const shapes_drop = document.querySelectorAll('[data-index]');
const board_drop = document.querySelector("#board");

board_drop.addEventListener("drop", dropHandler);
board_drop.addEventListener("dragover", dragoverHandler)
shapes_drop.forEach(el => el.addEventListener("dragstart", dragstartHandler));

function dragstartHandler(evt) {
    evt.dataTransfer.setData("dice", evt.currentTarget.dataset.dice);
}

function dragoverHandler(evt) {
    evt.preventDefault();
}

function dropHandler(evt) {
    const data = evt.dataTransfer.getData("dice");
    evt.currentTarget.document += data;
}
function goBack() {
    window.history.back();
}
    


//אנימציה לצורות בעת הגרירה
/*function buttonAnimation(currentKey) {
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function () {
        activeButton.classList.remove("pressed");
    }, 100);
}

//צליל בעת סיום הגרירה
    document.addEventListener("dragend", function (event) {
    var randomNumber = Math.floor(Math.random() * 7) + 1;
    var randomsoundSource = "sound/tom" + randomNumber + ".mp3";
    var tom = new Audio(randomsoundSource);
    tom.play();
    });
    */

