let canvas1 = document.getElementById('canvas1');
canvas1.width = 500;
canvas1.height = 500;

let canvas2 = document.getElementById("canvas2");
canvas2.width = 700;
canvas2.height = 500;


let ctx = canvas1.getContext('2d');
let ctx1 = canvas2.getContext('2d');
ctx.lineWidth = 2;
ctx1.lineWidth =2;
ctx.font ="10px Courier New"
ctx1.font ="10px Courier New"

var data = [];
var data1=[];
for(let k =0;k<5;k++){
  point = Math.floor(Math.random() * 3000);
    data.push(point);
    data1[k]=data[k];
}
//counting blocks_grid(invisible)
function count_block(count){
    return count *10;
}

// axis of the graphs
function draw_axis(c){

    let yplot = 40;
    let d =0;

    c.beginPath();
    c.strokeStyle = "blue";
    
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
draw_axis(ctx1);


//canvas 1 init red 
function draw_chart(c){
    c.beginPath();
    c.strokeStyle = "red";
    c.moveTo(count_block(5),count_block(40));

    var xplot = 10;
    for(let j=0; j < data.length; j++){
        var data_in_blocks = data[j]/100; 
        
        
        c.strokeText(data[j].toString(), count_block(xplot), count_block(40-data_in_blocks)-10);
        c.lineTo(count_block(xplot), count_block(40-data_in_blocks));
        c.arc(count_block(xplot), count_block(40-data_in_blocks), 3,0, Math.PI*2, true);
        xplot+=5;
        
    }
    c.stroke();
}
draw_chart(ctx);
draw_chart(ctx1);

//function for the button 
function bubble_sort(){    

    for(let i=0;i<data.length;i++){
        for(let j =0;j<data.length-i-1;j++){
            if (data1[j] > data1[j + 1]) {
        
                let temp = data1[j];
                data1[j] = data1[j + 1];
                data1[j + 1] = temp;
              }
            

        }
        draw_chart2();
    }
    draw_chart3();
    
}

//canvas 1 blue different iterations
function draw_charta(){
    ctx.beginPath();
    
    ctx.moveTo(count_block(5),count_block(40));
    ctx.clearRect(0,0,1000,500);
    draw_axis(ctx);
    
    for(let i=0;i<data.length;i++){
        for(let j=0;j<data.length-i-1;j++){
            if(data[j] > data[j + 1]) {
        
                let temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
              }

        }
        break;
    }
    
    var xplot = 10;
    for(let j=0; j < data.length; j++){
        var data_in_blocks = data[j]/100; 

        ctx.strokeText(data[j].toString(), count_block(xplot), count_block(40-data_in_blocks)-10);
        ctx.lineTo(count_block(xplot), count_block(40-data_in_blocks));
        ctx.arc(count_block(xplot), count_block(40-data_in_blocks), 3,0, Math.PI*2, true);
        xplot+=5;   
    }
    ctx.stroke();
}


