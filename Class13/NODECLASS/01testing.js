// these are comments

var foo = 22;

var bar = [];

function doit()
{
  for(let i = 0;i<1000;i++)
  {
    bar.push(Math.random());
    console.log(bar[i]);
  }
  //console.log(bar);

}


doit();
