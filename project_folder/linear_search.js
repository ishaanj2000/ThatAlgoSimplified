let canvas1 = document.getElementById('canvas2');
canvas1.width = 1100;
canvas1.height = 500;




let ctx = canvas1.getContext('2d');

ctx.lineWidth = 2;

ctx.font ="30px Courier New";

function draw_arr(){
    ctx.strokeStyle="black";
    ctx.strokeRect(50,200,100,50);
    ctx.fillText("70", 70,240,100);
    ctx.strokeRect(150,200,100,50);
    ctx.fillText("170", 170,240,100);
    ctx.strokeRect(250,200,100,50);
    ctx.fillText("270", 270,240,100);
    ctx.strokeRect(350,200,100,50);
    ctx.fillText("370", 370,240,100);
    ctx.strokeRect(450,200,100,50);
    ctx.fillText("470", 470,240,100);
    ctx.strokeRect(550,200,100,50);
    ctx.fillText("570", 570,240,100);
    ctx.strokeRect(650,200,100,50);
    ctx.fillText("670", 670,240,100);
    ctx.strokeRect(750,200,100,50);
    ctx.fillText("770", 770,240,100);
    ctx.strokeRect(850,200,100,50);
    ctx.fillText("870", 870,240,100);
    ctx.strokeRect(950,200,100,50);
    ctx.fillText("970", 970,240,100);
}
draw_arr();

function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }



function linearSearch(arr,n, x) 
{ 
    for(let i =0;i<=n;i++){

        
        if(arr[i]==x){

            setTimeout(function func(){
                ctx.fillStyle="gold";
                ctx.fillRect(arr[i]-20,200,100,50);
            }, 200);
            
            break;
        }
        else{

            ctx.strokeStyle="gold";
            ctx.strokeRect(arr[i]-20,200,100,50);
        }
    }  
}


function sim(){

    let arr = [
        70, 
        170, 
        270, 
        370, 
        470, 
        570,
        670, 
        770, 
        870, 
        970
    ]
    n = 10;
    x = document.getElementById("K_select").value;
    
    linearSearch(arr, n - 1, x);
}

   
        

