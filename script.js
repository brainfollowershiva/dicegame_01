var a=Math.floor(Math.random()*6)+1;
var b="dice" + a + ".png";
var c="./image/"+ b;
var d=document.querySelectorAll("img")[0];
d.setAttribute("src",c);
var score1=a;
/*for(var i=0;i<10;i++){
    if(a==6)
        {
            alert("Congratulations Player-1 You have entered in the game")
            for(var j=0;j<10-i;j++)
                {
                    var score1=score1+a;
                }
        break;
        }
}*/


var e=Math.floor(Math.random()*6)+1;
var f="dice" + e + ".png";
var g="./image/"+ f;
var h=document.querySelectorAll("img")[1];
h.setAttribute("src",g);
var score2=e;

/*for(var i=0;i<10;i++){
    if(e==6)
        {
            alert("Congratulations Player-2 : You have entered in the game")
            for(var j=0;j<10-i;j++)
            {
                var score2=score2+e;
            }
            break;
        }
}*/


if(score1>score2)
    {
        var ab=document.querySelector("h2");
        ab.innerHTML="Player-1 Won the Game ";
        var sc=document.querySelectorAll("h2")[1];
        sc.innerHTML="Player-1:Score:" + score1 ;
        var sr=document.querySelectorAll("h2")[2];
        sr.innerHTML="Player-2:Score:" + score2 ;
    
    }
            
else if(score1<score2)
    {
        var cd=document.querySelector("h2");
        cd.innerHTML="Player-2 Won the Game ";
        var sc=document.querySelectorAll("h2")[1];
        sc.innerHTML="Player-1:Score:" + score1 ;
        var sr=document.querySelectorAll("h2")[2];
        sr.innerHTML="Player-2:Score:" + score2 ;
    }
            
else
{
    var cg=document.querySelector("h2");
    cg.innerHTML="Tie-:)"; 
    var sc=document.querySelectorAll("h2")[1];
    sc.innerHTML="Player-1:Score:" + score1 ;
    var sr=document.querySelectorAll("h2")[2];
    sr.innerHTML="Player-2:Score:" + score2 ;
}


