
//random background image
window.onload = changeBackgroundImage;

// get the input from index.html and replace the characters 
// getted from url through method get
var playerInputGet = window.location.search;
playerInner = playerInputGet.replace("?player=", "").replace("+", " ");
console.log(playerInner);

// consult the api returning the player data 
const playerData = playerQuery(playerInner);



showPlayer(playerData);

function changeBackgroundImage(){
    let backgrounds = ["url('./img/bg/img01.jpg')","url('./img/bg/img02.jpg')",
                      "url('./img/bg/img03.jpg')", "url('./img/bg/img04.jpg')",
                      "url('./img/bg/img05.jpg')"]
    let randomBg = Math.floor(Math.random() * backgrounds.length)


    document.body.style.backgroundImage = backgrounds[randomBg];
}



function showPlayer(playerData){
    let name = document.getElementById("playerName");
    let sex = document.getElementById("playerSex");
    let level = document.getElementById("playerLevel");
    let vocation = document.getElementById("playerVocation");
    let world = document.getElementById("playerWorld")
    let residence = document.getElementById("playerResidence")
    let guild = document.getElementById("playerGuild")
    name.innerHTML = playerData.characters.character.name;
    sex.innerHTML = playerData.characters.character.sex;
    level.innerHTML = playerData.characters.character.level;
    vocation.innerHTML = playerData.characters.character.vocation;
    world.innerHTML = playerData.characters.character.world;
    residence.innerHTML = playerData.characters.character.residence;
    guild.innerHTML = playerData.characters.character.guild.name;

    showImageVocationPlayer(vocation.innerHTML, sex.innerHTML);
}


function showImageVocationPlayer(vocation,sex){
    let playerVocation = vocation;
    let playerSex = sex; 
    let playerImage = document.getElementById("vocationImage")
    console.log(playerVocation);
    console.log(playerSex);
    
    //Vocation Player condition

    //druid
    if ((playerVocation == "Elder Druid") && (playerSex == "male")){
        playerImage.src = ("./img/vocation/male-druid.png");
        playerImage.alt = "Male Druid"
    }
    if ((playerVocation == "Elder Druid") && (playerSex == "female")){
        playerImage.src = ("./img/vocation/female-druid.png");
        playerImage.alt = "Female Druid"
    }
    //Knight
    if ((playerVocation == "Elite Knight") && (playerSex == "male")){
        playerImage.src = ("./img/vocation/male-knight.png");
        playerImage.alt = "Male Knight"
    }
    if ((playerVocation == "Elite Knight") && (playerSex == "female")){
        playerImage.src = ("./img/vocation/female-knight.png");
        playerImage.alt = "female Knight"
    }
    //Paladin
    if ((playerVocation == "Royal Paladin") && (playerSex == "male")){
        playerImage.src = ("./img/vocation/male-paladin.png");
        playerImage.alt = "Male Knight"
    }
    if ((playerVocation == "Royal Paladin") && (playerSex == "female")){
        playerImage.src = ("./img/vocation/female-paladin.png");
        playerImage.alt = "female Knight"
    }
    //Sorcerer
    if ((playerVocation == "Master Sorcerer") && (playerSex == "male")){
        playerImage.src = ("./img/vocation/male-sorcer.png");
        playerImage.alt = "Male Sorcerer"
    }
    if ((playerVocation == "Master Sorcerer") && (playerSex == "female")){
        playerImage.src = ("./img/vocation/female-sorcer.png");
        playerImage.alt = "female Sorcerer"
    }
     
    return playerImage;
}



// consults the api
function fazGet(url){
    let request = new XMLHttpRequest()
    request.open("GET", url, false)
    request.send()
    return request.responseText
}


function playerQuery(playerInput){
    let player = playerInput
    let data = fazGet("https://api.tibiadata.com/v3/character/"+player);
    let playerData = JSON.parse(data)
    return playerData;
    /*
    console.log(playerData);

    console.log(playerData.characters.character.name)
    console.log(playerData.characters.character.sex)
    console.log(playerData.characters.character.vocation)
    console.log(playerData.characters.character.level)
    console.log(playerData.characters.character.world)
    console.log(playerData.characters.character.residence)
    console.log(playerData.characters.character.comment)*/

}

