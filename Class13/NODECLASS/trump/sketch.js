
var socket = io(); // this starts the network connection

var oldstuff = '';
var newstuff = '';
var iptr = 0;
var dptr = 0;
var thestuff = [];
var thefaves = [];


function setup()
{
  // this happens later:
  socket.on('tweets', function(data) {
    console.log(data.length);
    dptr = 0;
    for(var i = 0;i<data.length;i++)
    {
      thestuff.push(data[i].text.split(' '));
      thefaves.push(data[i].faves+data[i].retweets);
    }
  });

  frameRate(3);

}

function draw()
{
  var fsym_h, fsym_t;

  if(thestuff.length>0) {
    if(thestuff[iptr][dptr]) {
        var fr = max(3, map(thefaves[iptr]/10, 0, 100, 60, 3));
        frameRate(fr);
        var g = floor(min(255, 96 + thefaves[iptr]/10));
        g = 128 + g*256 + g*65536;
        fsym_h = '<font color = \'#' + hex(g, 6) + '\'>';
        fsym_t = '</font>';

      var sym = thestuff[iptr][dptr];
      if(sym.indexOf('https://t.co')==-1) 
      {
        if(sym.toLowerCase().indexOf('donald')>-1 || sym.toLowerCase().indexOf('trump')>-1) {
          newstuff += '<font size = +3>'+sym + '</font> ';    
        }
        else if(sym.toLowerCase().indexOf('fascist')>-1) {
          newstuff += '<font size = +7>'+sym + '</font> ';    
        }
        else {
          newstuff += sym + ' ';    
        }
        document.getElementById("foo").innerHTML = fsym_h + newstuff + fsym_t + '<br>' + oldstuff;
      }
    }

      dptr++;
      if(dptr>=thestuff[iptr].length) {
        oldstuff = fsym_h + newstuff + fsym_t + '<br>' + oldstuff;
        newstuff = '';
        iptr=(iptr+1)%thestuff.length;
        dptr=0;
      }


  }
}

 
