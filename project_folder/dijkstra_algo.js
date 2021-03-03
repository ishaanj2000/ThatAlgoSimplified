

let canvas2 = document.getElementById("canvas2");
canvas2.width = 900;
canvas2.height =450;



let ctx = canvas1.getContext('2d');
let ctx1 = canvas2.getContext('2d');
ctx.lineWidth = 2;
ctx1.lineWidth =2;
ctx.font ="20px Courier New";
ctx1.font ="20px Courier New";
ctx1.strokeStyle = "#FF0066";
ctx1.strokeStyle = "#FF0066";


var data={
    A: 150,
    B: 350,
    C: 250,
    D: 50,
    E: 450,
    F: 250
}

var edges={}

ctx.strokeStyle = "red";


function ab(ctx1){
    edges.AB= Math.abs(data.A-data.B);
    ctx1.beginPath();
    ctx1.moveTo(data.A,100);
    ctx1.lineTo(data.B, 100);
    ctx1.strokeText('0',data.A,90);
    ctx1.strokeText('1',data.B,90);
    ctx1.arc(data.A, 100,3,0, Math.PI*2, true);
    ctx1.arc(data.B, 100,3,0, Math.PI*2, true);
    ctx1.strokeText(edges.AB.toString(), 250,90)
    ctx1.stroke();
}
function bc(ctx1){

    edges.BC= Math.abs(data.B-data.C);
    ctx1.beginPath();
    ctx1.moveTo(data.B,100);
    ctx1.lineTo(data.C, 250);
    ctx1.arc(data.C, 250,3,0, Math.PI*2, true);
    ctx1.strokeText('2',data.C+10,250);
    ctx1.strokeText(edges.BC.toString(),310,180);
    ctx1.stroke();
}

function ac(ctx1){      
    edges.AC= Math.abs(data.A-data.C);
    ctx1.beginPath();
    ctx1.moveTo(data.A,100);
    ctx1.lineTo(data.C, 250);
    ctx1.strokeText(edges.AC.toString(), 210,180)
    ctx1.stroke();
}


function ad(ctx1){
    edges.AD= Math.abs(data.A-data.D);
    ctx1.beginPath();
    ctx1.moveTo(data.A,100);
    ctx1.lineTo(data.D, 250);
    ctx1.strokeText('3',data.D-20,250);
    ctx1.arc(data.D, 250,3,0, Math.PI*2, true);
    ctx1.strokeText(edges.AD.toString(),60,180);
    ctx1.stroke();
}

function be(ctx1){

    edges.BE= Math.abs(data.B-data.E);
    ctx1.beginPath();
    ctx1.moveTo(data.B,100);
    ctx1.lineTo(data.E, 250);
    
    ctx1.strokeText('4',data.E+10,250);
    ctx1.arc(data.E, 250,3,0, Math.PI*2, true);
    ctx1.strokeText(edges.BE.toString(),410,180);
    ctx1.stroke();
}


function ef(ctx1){
    edges.EF= data.E-data.F;
    ctx1.beginPath();
    ctx1.moveTo(data.E,250);
    ctx1.lineTo(data.F, 400);
    ctx1.strokeText('5',data.F+10,410);
    ctx1.arc(data.F, 400,3,0, Math.PI*2, true);
    ctx1.strokeText(edges.EF.toString(), 310,370)
    ctx1.stroke();
}



function df(ctx1){
    edges.DF= Math.abs(data.D-data.F);
    ctx1.beginPath();
    ctx1.moveTo(data.D,250);
    ctx1.lineTo(data.F, 400);
    ctx1.strokeText(edges.DF.toString(), 150,370)
    ctx1.stroke();
}

function cd(ctx1){
    edges.CD= data.C-data.D;
    ctx1.beginPath();
    ctx1.moveTo(data.C,250);
    ctx1.lineTo(data.D, 250);
    ctx1.strokeText(edges.CD.toString(), 150,240)
    ctx1.stroke();
}

function ce(ctx1){
    edges.CE= Math.abs(data.C-data.E);
    ctx1.beginPath();
    ctx1.moveTo(data.C,250);
    ctx1.lineTo(data.E, 250);
    ctx1.strokeText(edges.CE.toString(), 350,240)
    ctx1.stroke();

}


function draw(){
    ab(ctx1);
    bc(ctx1);
    ac(ctx1);
    ad(ctx1);
    be(ctx1);
    ef(ctx1);
    df(ctx1);
    cd(ctx1);
    ce(ctx1);
}
draw()


class Graph{
    constructor(vertices){
        this. V = vertices;
        this.graph = [
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0],
            [0,0,0,0,0,0]
        
    ]
}


    print_sol(dist){
        
       
        for(let node = 0;node<this.V;node++){
           document.write(" ");
            document.write('<span id ="sol_node">'+node+'</span>');
            document.write(" ");
            document.write('<span id ="sol_dist">'+dist[node]+'</span>');
        }

    }

    min_dist(dist, spt_set){
        let min = Infinity;
        let min_index =0;
        for(let v =0;v<this.V;v++){
            if(dist[v]<min && spt_set[v] == false){
                min = dist[v];
                min_index = v;
            }
        }
        return min_index;
    }

    dijekstra(src){
        let spt_set = {}
        let dist = {};
        for(let i =0;i<this.V;i++){
            dist[i] = Infinity;
        }
        dist[src] = 0;
        for(let i =0;i<this.V;i++){
            spt_set[i] = false;
        }
        for(let cout =0;cout<this.V;cout++){
            let u = this.min_dist(dist, spt_set);
            spt_set[u] = true;
            for(let v = 0;v<this.V;v++){
                if(this.graph[u][v]>0 && spt_set[v] == false && dist[v] > dist[u] + this.graph[u][v]){
                    dist[v] = dist[u] + this.graph[u][v] 
                }

            }

        }
        this.print_sol(dist);
   
    }

    }



let g = new Graph(6);
g.graph = [
    [0,200,100,100,0,0],
    [200,0,100,0,100,0],
    [100,100,0,200,200,0],
    [100,0,200,0,0,200],
    [0,100,200,0,0,200],
    [0,0,0,200,200,0]
]


    g.dijekstra(0);
    document.write("<p></p>")
    g.dijekstra(1);
    document.write("<p></p>")
    g.dijekstra(2);
    document.write("<p></p>")
    g.dijekstra(3);
    document.write("<p></p>")
    g.dijekstra(4);
    document.write("<p></p>")
    g.dijekstra(5);

function sim(){
    ctx1.strokeStyle = "#FF0066";
    draw();
    var k =  document.getElementById("K_select1").value;
    var k1 =  document.getElementById("K_select").value;
    if(k == "A" && k1 == "B" || k == "B" && k1 == "A" ){
        ctx1.strokeStyle ="yellow";
        ab(ctx1);
        
    }
    else if(k=="A" && k1 =="C" || k=="C" && k1 =="A"){
        ctx1.strokeStyle ="yellow";
        ac(ctx1);
        
    }
    
    else if(k=="A" && k1 =="D" || k=="D" && k1 =="A"){
        ctx1.strokeStyle ="yellow";
        ad(ctx1);
        
    }

    else if(k=="A" && k1 =="E" || k=="E" && k1 =="A"){
        ctx1.strokeStyle ="yellow";
        ab(ctx1);
        be(ctx1);
        
    }

    else if(k=="A" && k1 =="F" || k=="F" && k1 =="A"){
        ctx1.strokeStyle ="yellow";
        ad(ctx1);
        df(ctx1);
        
    }



    else if(k=="B" && k1 =="C" || k=="C" && k1 =="B"){
        ctx1.strokeStyle ="yellow";
        bc(ctx1);
        
        
    }


    else if(k=="B" && k1 =="D" || k=="D" && k1 =="B"){
        ctx1.strokeStyle ="yellow";
        bc(ctx1);
        cd(ctx1);
        
        
    }

    else if(k=="B" && k1 =="E" || k=="E" && k1 =="B"){
        ctx1.strokeStyle ="yellow";
        be(ctx1);
    }


    else if(k=="B" && k1 =="F" || k=="F" && k1 =="B"){
        ctx1.strokeStyle ="yellow";
        be(ctx1);
        ef(ctx1);
  
    }

    else if(k=="C" && k1 =="D" || k=="D" && k1 =="C"){
        ctx1.strokeStyle ="yellow";
        cd(ctx1);
    }


    else if(k=="C" && k1 =="E" || k=="E" && k1 =="C"){
        ctx1.strokeStyle ="yellow";
        ce(ctx1);        
    }

    else if(k=="C" && k1 =="F" || k=="F" && k1 =="C"){
        ctx1.strokeStyle ="yellow";
        
        ce(ctx1);
        ef(ctx1);
        
    }

    else if(k=="D" && k1 =="E" || k=="E" && k1 =="D"){
        ctx1.strokeStyle ="yellow";
        
        cd(ctx1);
        ce(ctx1);
        
    }

    else if(k=="D" && k1 =="F" || k=="F" && k1 =="D"){
        ctx1.strokeStyle ="yellow";
        
        
        df(ctx1);
        
    }


    else if(k=="E" && k1 =="F" || k=="F" && k1 =="E"){
        ctx1.strokeStyle ="yellow";
        
        
        ef(ctx1);
        
    }


    }
        


    
    
