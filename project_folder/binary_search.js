let canvas1 = document.getElementById('canvas2');
canvas1.width = 1100;
canvas1.height = 500;




let ctx = canvas1.getContext('2d');

ctx.lineWidth = 2;

ctx.font ="30px Courier New"

 
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



function binarySearch(arr, l, r, x) 
{ 
    
    if (r >= l) { 
        let mid = Math.floor(l + (r - l) / 2); 
  
    
        if (arr[mid] == x) {
                        ctx.strokeStyle="gold"
            ctx.strokeRect(arr[mid]-20,200,100,50);
            
            return mid; 
        }

  
        
        if (arr[mid] > x) {
            
            ctx.strokeStyle="gold"
            ctx.strokeRect(arr[mid]-20,200,100,50);
            return binarySearch(arr, l, mid - 1, x);
        }
        else{
           
            ctx.strokeStyle="gold"
            ctx.strokeRect(arr[mid]-20,200,100,50);
            return binarySearch(arr, mid + 1, r, x);
        } 
    } 
  
    
    return -1; 
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
    
    let result = binarySearch(arr, 0, n - 1, x);

    if(result == -1){
        document.write("Element is not present in array");
    }
    else{
        
        
        ctx.strokeStyle="gold";
        ctx.fillStyle="gold"
        ctx.fillRect(arr[result]-20,200,100,50);
    }
}



