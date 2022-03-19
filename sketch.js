//colocando o namespacing
//const = var mas não pode alterar o valor
const Engine = Matter.Engine;
//Engine cria o motor da física

//World cria o mundo físico
const World = Matter.World;
//Bodies cria objetos físicos
const Bodies = Matter.World;

let engine;
let world;
//criar uma bola e um solo
var ball;
var ground;
var wedge;
var angle=60;
var poly;


function setup() {
  //criar a tela
  createCanvas(300,600);
  //criar a Engine
   engine = Engine.create();
  //colocar a física no mundo
  world = World.create();
  //criar as opções da bola, ela é pesada, tem atrito com o ar?
  var ball_options = {
    restitution:0.9,
    frictionAir:0.01
  }

  ball = Bodies.circle(80,50,50,ball_options);


  World.add(world,ball);

  //criar as opções da rocha



  //criar as opções do solo


  
  //criar o solo, a parede, a bola, a rocha e coloca-los no mundo



  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
 //colocar um fundo
background("white");
 //atualizar a engine
 Engine.update(engine);
 //dicionar uma circunferencia, um retangulo duas vezes nesta mesma ordem.
 ellipse(ball.position.x,ball.position.y, 50);

  
}

