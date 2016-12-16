        var $ = function (el) {
            return document.querySelector(el)
        };
    
        var initDir = Math.ceil(Math.random() * 4);//初始方向
        var initRow = Math.ceil(Math.random() * 4);//初始行
        var initCol = Math.ceil(Math.random() * 4);//初始列
        var initDeg=0 ; //旋转角度
        var movCommand=[[initRow,initCol]];
        var inputValue=[];  //保存输入的指令
        var controlArr=["mov lef","mov top","mov bot","mov rig","tra top"
            ,"tra bot","tra rig","tra lef","build","bru","mov to "];//合法指令数组
    

        //按回车键进行输入验证及指令存入
        document.onkeyup=verifier;
    
        //点击执行按钮
        $("#button1").onclick = function () {
            setTimeout(function () {
                doCommand(inputValue.shift());
                if(inputValue.length>0){
                    setTimeout(arguments.callee,1100);
                }
            },100);
            return false;
        };

        //点击随机建墙按钮
        $("#button2").onclick=function () {
            var wallNum=15;
            while(wallNum!==0){
                var row=Math.ceil((Math.random()*10))-1;
                var col=Math.ceil((Math.random()*10))-1;
                if(row!==initRow||col!==initCol){
                    control.buildingWall(row,col,"darkgrey");
                }
                wallNum--;
            }
            return false;
        };

        //滑动事件，提示行号同步滑动
        $("textarea").onscroll=function () {
            $("#wrap").style.marginTop=-this.scrollTop+"px";
        };
        
        //界面初始化
        init();



    // function verifySite(a,b) {
    //     if(control.getElem(a,b)
    //         &&control.getElem(a,b).style.backgroundColor!=="darkgrey"
    //         &&movCommand.indexOf([a,b])==-1){
    //         return true;
    //     }
    //     return false;
    // }
    //
    // var x1=initRow;
    // var y1=initCol;
    // function traverseMap(x,y) {    //参数为目标坐标，零开始
    //     if(control.getElem(x,y)!==control.getElem(x1,y1)){
    //         if(verifySite(x1-1,y1)){
    //             x1--;
    //             movCommand.push([x1,y1]);
    //             traverseMap(x,y);
    //         }else if(verifySite(x1,y1+1)){
    //             y1++;
    //             movCommand.push([x1,y1]);
    //             traverseMap(x,y);
    //         }else if(verifySite(x1+1,y1)){
    //             x1++;
    //             movCommand.push([x1,y1]);
    //             traverseMap(x,y);
    //         }else if(verifySite(x1,y1-1)){
    //             y1--;
    //             movCommand.push([x1,y1]);
    //             traverseMap(x,y);
    //         }
    //     }
    // }
    //
