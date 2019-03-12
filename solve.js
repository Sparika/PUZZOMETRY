var data = {
  "objects":[
  {"id":0,
    "type":"base",
    "var":[[{"x":0,"y":1},{"x":0,"y":4},{"x":9,"y":3},{"x":5,"y":6}]],
    "cstr":[[]]},
  {"id":1,
    "type":"sym",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":2,"y":0},{"x":1,"y":1}]],
    "cstr":[[]]},
  {"id":2,
    "type":"",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":0,"y":1},{"x":1,"y":1}]],
    "cstr":[[{"x":0,"y":1},{"x":1,"y":0}]]},
  {"id":3,
    "type":"sym",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":0,"y":1},{"x":1,"y":1}]],
    "cstr":[[{"x":0,"y":1},{"x":2,"y":1}]]},
  {"id":4,
    "type":"sym",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":2,"y":0}]],
    "cstr":[[{"x":1,"y":0},{"x":2,"y":0},{"x":0,"y":1},{"x":1,"y":1},{"x":2,"y":1},{"x":3,"y":1}]]},
  {"id":5,
    "type":"",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":2,"y":0},{"x":1,"y":1},{"x":2,"y":1}]],
    "cstr":[[{"x":2,"y":2}]]},
  {"id":6,
    "type":"sym",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":2,"y":0},{"x":3,"y":0},{"x":1,"y":1},{"x":2,"y":1}]],
    "cstr":[[{"x":2,"y":0}]]},
  {"id":7,
    "type":"sym",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":2,"y":0},{"x":1,"y":1}]],
    "cstr":[[{"x":1,"y":0},{"x":2,"y":0}]]},
  {"id":8,
    "type":"",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":1,"y":1},{"x":2,"y":1}]],
    "cstr":[[{"x":2,"y":2}]]},
  {"id":9,
    "type":"",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":1,"y":1},{"x":2,"y":1}]],
    "cstr":[[{"x":1,"y":0},{"x":2,"y":2}]]},
  {"id":10,
    "type":"",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":2,"y":0},{"x":3,"y":0},{"x":2,"y":1},{"x":3,"y":1}]],
    "cstr":[[{"x":1,"y":1},{"x":4,"y":1}]]},
  {"id":11,
    "type":"sym",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":0,"y":1}]],
    "cstr":[[{"x":0,"y":0},{"x":1,"y":0},{"x":0,"y":1},{"x":1,"y":1}]]},
  {"id":12,
    "type":"",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":2,"y":0},{"x":0,"y":1},{"x":1,"y":1},{"x":2,"y":1},{"x":2,"y":2}]],
    "cstr":[[{"x":0,"y":1},{"x":3,"y":1},{"x":3,"y":2}]]},
  {"id":13,
    "type":"",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":0,"y":1},{"x":1,"y":1},{"x":2,"y":1}]],
    "cstr":[[{"x":0,"y":0},{"x":1,"y":0},{"x":0,"y":1},{"x":1,"y":2},{"x":2,"y":2},{"x":2,"y":1}]]},
  {"id":14,
    "type":"",
    "var":[[{"x":0,"y":0},{"x":1,"y":0},{"x":0,"y":1},{"x":1,"y":1},{"x":2,"y":1},{"x":1,"y":2},{"x":2,"y":2}]],
    "cstr":[[{"x":1,"y":2},{"x":1,"y":3},{"x":2,"y":1},{"x":2,"y":3},{"x":3,"y":2}]]
  }
]
};

function normalise(coord, cstr){
  var xmax=10;
  var ymax=6;
  for (var i=0; i< coord.length; i++) {
     if(coord[i].x < xmax){
       xmax = coord[i].x;
       ymax = coord[i].y;
     } else if (coord[i].x == xmax) {
       if (coord[i].y < ymax) {
         xmax = coord[i].x;
         ymax = coord[i].y;
       }
     }
  }

  for (var i=0; i< coord.length; i++){
    coord[i].x = coord[i].x - xmax;
    coord[i].y = coord[i].y - ymax;
  }
  
  for (var i=0; i< cstr.length; i++){
    cstr[i].x = cstr[i].x - xmax;
    cstr[i].y = cstr[i].y - ymax;
    //console.log("xmax:"+xmax+" ymax:"+ymax)
    //console.log("x:"+cstr[i].x+" y:"+cstr[i].y)
  }
//  return ifirst
}

function rotate(obj) {
  //obj.first=[]
  //obj.first[0] = getFirst(obj.var[0])
  normalise(obj.var[0], obj.cstr[0]);

  if (obj.type == "sq"){
    //do nothing
  } else if (obj.type == "sym" || obj.type == "") {
    // rotate
    obj.var[1] = [];
    obj.cstr[1] = [];
    obj.var[2] = [];
    obj.cstr[2] = [];
    obj.var[3] = [];
    obj.cstr[3] = [];

    for (var i=0; i< obj.var[0].length; i++) {
      //console.log(obj.var[0][i])
      var x= obj.var[0][i].x;
      var y= obj.var[0][i].y;
      var x90 = -y;
      var y90 = x;
      var x180 = -x;
      var y180 = -y;
      var x270 = y;
      var y270 = -x;
      obj.var[1][i] = {"x":x90,"y":y90};
      obj.var[2][i] = {"x":x180,"y":y180};
      obj.var[3][i] = {"x":x270,"y":y270};
    }
    for (var i=0; i< obj.cstr[0].length; i++) {
      //console.log(obj.var[0][i])
      var x= obj.cstr[0][i].x;
      var y= obj.cstr[0][i].y;
      var x90 = -y +1;
      var y90 = x;
      var x180 = -x +1;
      var y180 = -y +1;
      var x270 = y;
      var y270 = -x +1;
      obj.cstr[1][i] = {"x":x90,"y":y90};
      obj.cstr[2][i] = {"x":x180,"y":y180};
      obj.cstr[3][i] = {"x":x270,"y":y270};
    }
      //normalise(obj.var[1], obj.cstr[1])
      //normalise(obj.var[2], obj.cstr[2])
      //normalise(obj.var[3], obj.cstr[3])

    if (obj.type == "") {
      // reverse & rotate
      for (var z=0; z<4; z++) {
        obj.var[4+z] = [];
        obj.cstr[4+z] = [];
        for (var i=0; i< obj.var[0].length; i++) {
          //console.log(obj.var[0][i])
          var x= -obj.var[z][i].x;
          var y= obj.var[z][i].y;
          obj.var[4+z][i] = {"x":x,"y":y};
        }
        for (var i=0; i< obj.cstr[0].length; i++) {
          //console.log(obj.var[0][i])
          var x= -obj.cstr[z][i].x;
          if(z>0) x++ //decallage lors de l'inversion
          var y= obj.cstr[z][i].y;
          obj.cstr[4+z][i] = {"x":x,"y":y};
        }
        //normalise(obj.var[4+z], obj.cstr[4+z])
      }
    }

    for(var z=0; z<obj.var.length; z++){
      normalise(obj.var[z], obj.cstr[z]);
    }
  }
}

function prepare(objects){
  // don't rotate first object as it is the cadre
  for (var i=1; i<objects.length; i++) {
    rotate(objects[i]);
  }
  //console.log(objects)
}


// test says if its ok to proceed
function test(last, state, obj){
  for(var i=0; i<obj.length; i++){
    var x = last.x+obj[i].x
    var y = last.y+obj[i].y
    if (x<0 || x>=10 || y<0 || y >= 7 || state[x][y] != -1) {
      return false;
    }
  }
  return true;
}

function testCstr(last, cstraints, obj) {
  for (var i=0; i<obj.length; i++) {
    var x = last.x+obj[i].x;
    var y = last.y+obj[i].y;
    if (x<0 || y<0 || x>=11 || y>=8 || cstraints[x][y] != -1) {
      return false;
    }
  }
  return true;
}

// apply set state to 1
function apply(last, state, obj, tag) {
  for (var i=0; i<obj.length; i++) {
    var x = last.x+obj[i].x;
    var y = last.y+obj[i].y;
    state[x][y] = tag;
  }
}

// cancel set state to 0
function cancel(last, state, obj) {
  for (var i=0; i<obj.length; i++) {
    var x = last.x+obj[i].x;
    var y = last.y+obj[i].y;
    state[x][y] = -1;
  }
}

function getLastFree(state) {
  for (var i=0; i<10; i++) {
    for (var j=0; j<7; j++) {
      if (state[i][j] == -1) {
        return {"x":i,"y":j};
      }
    }
  }
  return {"x":-1,"y":-1};
}

function allUsed(used){
  for (var i=0; i<used.length; i++){
    if (!used[i]) { return false; }
  }
  return true;
}

function pretyState(last, state, obj,tag) {
  for (var i=0; i<obj.length; i++) {
    var x = last.x+obj[i].x;
    var y = last.y+obj[i].y;
    state[x][y] = tag;
  }
}

// step test combination and proceed if possible
function step(state, cstraints, objects, used){
  var last = getLastFree(state);
  if(allUsed(used)){
    //console.log(state)
    return true;
  }
  // check each object
  for (var i=1; i<used.length; i++) {
    // if object is not used, use it on last free space
    if (!used[i]){
      used[i] = true;
      // test each rotation of the object
      for (var j=0; j<objects[i].var.length; j++) {
        // If possible proceed
        if (test(last, state, objects[i].var[j]) && testCstr(last, cstraints, objects[i].cstr[j])) {
          apply(last, state, objects[i].var[j], i);
          apply(last, cstraints, objects[i].cstr[j], j);
          //console.log("..."+i)
          //console.log(state)
          if (step(state, cstraints, objects, used)){
            // Yeah !!
            return true;
          }
          // else rollback
          cancel(last, state, objects[i].var[j]);
          cancel(last, cstraints, objects[i].cstr[j]);
        }
        // we will test next rotation
      }
      // no rotation worked for this object at this position
      // we will test next object
      //console.log("ccc"+i)
      used[i] = false;
    }
  }
  //tested everything
  return false;
}

function solve(){
  prepare(data.objects)
  var used = [true, false, false, false, false, false, false, false, false, false, false, false, false, false, false ];
  var state =[[-1,0,-1,-1,0,-1,-1],
              [-1,-1,-1,-1,-1,-1,-1],
              [-1,-1,-1,-1,-1,-1,-1],
              [-1,-1,-1,-1,-1,-1,-1],
              [-1,-1,-1,-1,-1,-1,-1],
              [-1,-1,-1,-1,-1,-1,0],
              [-1,-1,-1,-1,-1,-1,-1],
              [-1,-1,-1,-1,-1,-1,-1],
              [-1,-1,-1,-1,-1,-1,-1],
              [-1,-1,-1,0,-1,-1,-1]];
  var cstraints =  [[0,0,0,0,0,0,0,0],
                    [-1,-1,-1,-1,-1,-1,-1,0],
                    [0,-1,-1,-1,-1,-1,-1,-1],
                    [0,-1,-1,-1,-1,-1,-1,-1],
                    [0,-1,-1,-1,-1,-1,-1,0],
                    [0,-1,-1,-1,-1,-1,-1,0],
                    [0,-1,-1,-1,-1,-1,-1,0],
                    [0,-1,-1,-1,-1,-1,-1,-1],
                    [0,-1,-1,-1,-1,-1,-1,-1],
                    [0,-1,-1,-1,-1,-1,-1,-1],
                    [0,0,0,0,0,0,0,0]];


  if(step(state, cstraints, data.objects, used)){
    console.log("YEAHHH");
    console.log(state);
    console.log("");
    console.log(cstraints);
  } else {
    console.log("oohh ...");
  }
}

solve();
