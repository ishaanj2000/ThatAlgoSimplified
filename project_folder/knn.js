let canvas1 = document.getElementById('canvas1');
canvas1.width = 800;
canvas1.height = 500;

let ctx = canvas1.getContext('2d');
ctx.lineWidth = 2;

ctx.font ="10px Courier New"



//counting blocks_grid(invisible)
function count_block(count){
    return count *10;
}

// axis of the graphs
function draw_axis(c){

    let yplot = 40;
    let d =0;

    c.beginPath();
    c.strokeStyle = "black";
    
    c.moveTo(count_block(5),count_block(5));
    c.lineTo(count_block(5), count_block(40));
    c.lineTo(count_block(80), count_block(40));

    c.moveTo(count_block(5), count_block(40));
    
    

    //loop for the y-axix labels
    for(let i = 1 ;i<=10;i++ ){
        c.strokeText(d, count_block(2), count_block(yplot));
        yplot-=5;
        d+=500;
    }
    c.stroke();

}
draw_axis(ctx);



function drawCoordinates(x,y, color){
    var pointSize = 5; 
    


    ctx.fillStyle = color; 

    ctx.beginPath(); //Start path
    ctx.arc(x, y, pointSize, 0, Math.PI * 2, true); 
    ctx.fill(); 
}

let max = 300;
let min = 150;
let x =[];
let y =[];



for(i =0;i<10;i++){
    x.push(Math.random() * (max - min) + min);
    y.push(Math.random() * (max - min) + min-100);  
    drawCoordinates(x[i],y[i], "red");
}


let max1 = 300;
let min1 = 150;
let x1 =[];
let y1 =[];

for(i =0;i<10;i++){
    x1.push(Math.random() * (max1 - min1) + min1+300);
    y1.push(Math.random() * (max1 - min1) + min1+100);  
    drawCoordinates(x1[i],y1[i], "blue");
}



let max2 = 300;
let min2 = 150;
let x2 =[];
let y2 =[];

for(i =0;i<10;i++){
    x2.push(Math.random() * (max2 - min2) + min2+200);
    y2.push(Math.random() * (max2 - min2) + min2-50);  
    drawCoordinates(x2[i],y2[i], "green");
}



let max3 = 300;
let min3 = 150;
let x3 =[];
let y3 =[];



for(i =0;i<10;i++){
    x3.push(Math.random() * (max3 - min3) + min3);
    y3.push(Math.random() * (max3 - min3) + min3+90);  
    drawCoordinates(x3[i],y3[i], "purple");
}

let min_point = 300;
let max_point = 150;

x_point = Math.random() * (max_point - min_point) + min_point+150;
y_point = Math.random() * (max_point - min_point) + min_point+50; 
drawCoordinates(x_point,y_point, "black");


    dist_array_x =[];
    dist_array_y =[];
    sorted_dist_array =[];
    color_dist_array ={};
    var k =2;
    var k_value =2;
    
    
    document.getElementById("K_select").onchange = function(){k_change()};
    function k_change(){
        k = document.getElementById("K_select");
        k_value =k.options[k.selectedIndex].value;

    }

    
   
   
      
    let color ="";

function create_circle(){
  

    dist_array_x = x.concat(x1,x2,x3);
    dist_array_y = y.concat(y1,y2,y3);


    //euclidean distance
    dist_array=[]
    for(i =0;i<40;i++){
        
        dist_array.push(Math.sqrt(Math.pow((dist_array_x[i]-x_point),2) +Math.pow((dist_array_y[i]-y_point),2)));
        
    }
    console.log(dist_array);
    
    color_dist_array = 
        {
            red: dist_array.slice(0,10),
            blue: dist_array.slice(10,20),
            green: dist_array.slice(20,30),
            purple:dist_array.slice(30,40)
        };

        //console.log(color_dist_array);
    
        sorted_dist_array = dist_array.sort((a,b) => a-b);
        ctx.beginPath();
        ctx.lineWidth = 1;
        ctx.strokeStyle = "black";
        ctx.arc(x_point, y_point, sorted_dist_array[k_value] ,0, 2 * Math.PI, false);
        ctx.stroke();



    red_count = 0;
    blue_count = 0;
    green_count = 0;
    purple_count = 0;
    
    let max =0;
    


    for(i =0;i<k_value ;i++){
        if(color_dist_array.red.includes( sorted_dist_array[i])){
            red_count+=1;
            max = Math.max(red_count, blue_count, green_count, purple_count);
            if(max ==red_count){
                color = "red"
            }
            
        }
        else if(color_dist_array.blue.includes( sorted_dist_array[i])){
            blue_count+=1;
            max = Math.max(red_count, blue_count, green_count, purple_count);
            if(max == blue_count){
                color = "blue"
            }
            
        }
        else if(color_dist_array.green.includes( sorted_dist_array[i])){
            green_count+=1;
            max = Math.max(red_count, blue_count, green_count, purple_count);
            if(max == green_count){
                color = "green"
            }
            
        }
        else if(color_dist_array.purple.includes( sorted_dist_array[i])){
            purple_count+=1;
            max = Math.max(red_count, blue_count, green_count, purple_count);
            if(max ==purple_count){
                color = "purple"
            }
            
        }
        
    }
    console.log(color);
    console.log(max);


    
}

setInterval( function(){
    period = 1500; // [miliseconds]
    
    var linearMod = (Date.now() % period) / period; 
    var mod = Math.sin(linearMod * Math.PI); 

    
    ctx.fillStyle = color; 
    ctx.beginPath(); //Start path
    ctx.arc(x_point, y_point,  5* mod, 0, Math.PI * 2, true); 
    ctx.fill();

    
    pointSize = 5; 
    
    ctx.fillStyle = "black"; 

    
    ctx.arc(x_point, y_point, pointSize, 0, Math.PI * 2, false); 
    ctx.fill();

}
);

    



