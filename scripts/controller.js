(function (global) {
    /**
     * 控制器对象
     * @type {{getElem: global.control.getElem, getDeg: global.control.getDeg, rorate: global.control.rorate, TraLef: global.control.TraLef, TraRig: global.control.TraRig, TraTop: global.control.TraTop, TraBot: global.control.TraBot, MovLef: global.control.MovLef, MovRig: global.control.MovRig, MovTop: global.control.MovTop, MovBot: global.control.MovBot, buildWall: global.control.buildWall, changeColor: global.control.changeColor, buildingWall: global.control.buildingWall, moveTo: global.control.moveTo}}
     */
     global.control = {
        getElem: function (row,col) {
            if(row<10&&row>=0&&col<10&&col>=0){
                return $("#map").getElementsByClassName("grad")[row].getElementsByTagName("span")[col];

            }
            return false;
        },
        getDeg: function (dir, newDir) {  //每次的旋转角度
            var x = newDir - dir;
            if(x>0) return 90*x;
            else return 360+90*x;
        },
        rorate: function (newDir) {   //旋转
            initDeg=initDeg+this.getDeg(initDir, newDir);
            $("#chess").style.transform = "rotate(" +initDeg + "deg)";
            initDir=(initDeg/90)%4+1;
        },
        TraLef: function (steps) {
            while(steps>0){
                if (initCol > 0&&this.getElem(initRow, initCol-1).style.backgroundColor!=="darkgrey") {
                    initCol -= 1;
                    showChess(initRow, initCol, initDir);
                    steps--;
                }else{
                    return;
                }
            }
        },
        TraRig: function (steps) {
            while(steps>0){
                if (initCol < 9&&this.getElem(initRow, initCol+1).style.backgroundColor!=="darkgrey") {
                    console.log(this.getElem(initRow, initCol).style.backgroundColor);
                    initCol += 1;
                    showChess(initRow, initCol, initDir);
                    steps--;
                }else{
                    return;
                }
            }
        },
        TraTop: function (steps) {
            while(steps>0){
                if (initRow > 0&&this.getElem(initRow-1, initCol).style.backgroundColor!=="darkgrey") {
                    console.log(this.getElem(initRow, initCol).style.backgroundColor);

                    initRow -= 1;
                    showChess(initRow, initCol, initDir);
                    steps--;
                }else{
                    return;
                }
            }
        },
        TraBot: function (steps) {
            while(steps>0){
                if (initRow < 9&&this.getElem(initRow+1, initCol).style.backgroundColor!=="darkgrey") {
                    console.log(this.getElem(initRow, initCol).style.backgroundColor);

                    initRow += 1;
                    showChess(initRow, initCol, initDir);
                    steps--
                }else{
                    return;
                }
            }
        },
        MovLef: function (steps) {
            if (initCol > 0) {
                this.TraLef(steps);
                this.rorate(4);
            }
        },
        MovRig: function (steps) {
            if (initCol < 9) {
                this.TraRig(steps);
                this.rorate(2);
            }
        },
        MovTop: function (steps) {
            if (initRow > 0) {
                this.TraTop(steps);
                this.rorate(1);
            }
        },
        MovBot: function (steps) {
            if (initRow < 9) {
                this.TraBot(steps);
                this.rorate(3);
            }
        },
        buildWall:function () {
            switch (initDir){
                case 1:
                    if(initRow-1>=0&&(this.getElem(initRow-1,initCol).style.backgroundColor!=="darkgrey")){
                        this.buildingWall(initRow-1,initCol,"darkgrey");
                    }else {
                        console.log("error");
                    }
                    break;
                case 2:
                    if(initCol+1<=9&&(this.getElem(initRow,initCol+1).style.backgroundColor!=="darkgrey")){
                        this.buildingWall(initRow,initCol+1,"darkgrey");
                    }else{
                        console.log("error")
                    }
                    break;
                case 3:
                    if(initRow+1<=9&&(this.getElem(initRow+1,initCol).style.backgroundColor!=="darkgrey")){
                        this.buildingWall(initRow+1,initCol,"darkgrey");
                    }else{
                        console.log("error");
                    }
                    break;
                case 4:
                    if(initCol-1>=0&&(this.getElem(initRow,initCol-1).style.backgroundColor!=="darkgrey")){
                        this.buildingWall(initRow,initCol-1,"darkgrey");
                    }else{
                        console.log("error");
                    }
                    break;
            }
        },
        changeColor:function (color) {
            switch (initDir){
                case 1:
                    var elem=this.getElem(initRow-1,initCol);
                    if(elem&&elem.style.backgroundColor=="darkgrey"){
                        elem.style.backgroundColor=color;
                    }else {
                        console.log("error");
                    }
                    break;
                case 2:
                    var elem=this.getElem(initRow,initCol+1);
                    if(elem&&elem.style.backgroundColor=="darkgrey"){
                        elem.style.backgroundColor=color;
                    }else {
                        console.log("error");
                    }
                    break;
                case 3:
                    var elem=this.getElem(initRow+1,initCol);
                    if(elem&&elem.style.backgroundColor=="darkgrey"){
                        elem.style.backgroundColor=color;
                    }else {
                        console.log("error");
                    }
                    break;
                case 4:
                    var elem=this.getElem(initRow,initCol-1);
                    if(elem&&elem.style.backgroundColor=="darkgrey"){
                        elem.style.backgroundColor=color;
                    }else {
                        console.log("error");
                    }
                    break;
            }
        },
         buildingWall: function (row,col,color) {   //根据行数列数颜色建墙
             if(row<10&&row>=0&&col<10&&col>=0){
                 var elem = $("#map").getElementsByClassName("grad")[row].getElementsByTagName("span")[col];
                 elem.style.backgroundColor = color;
             }

         },
        moveTo:function (x,y) {
            // traverseMap(x,y);
            console.log(movCommand);
        }

    };
}(this));
