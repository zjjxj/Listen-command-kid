(function (global) {
    
    /**
     * 根据指令调用控制器
     * @param command 一条指令
     */
    global.doCommand=function(command) {
        var step=command.slice(7,command.length);
        var colorWall=command.slice(4);
        switch (command.slice(0,7)) {
            case "mov lef":
                control.MovLef(step);
                break;
            case "mov rig":
                control.MovRig(step);
                break;
            case "mov bot":
                control.MovBot(step);
                break;
            case "mov top":
                control.MovTop(step);
                break;
            case "tra lef":
                control.TraLef(step);
                break;
            case "tra rig":
                control.TraRig(step);
                break;
            case "tra bot":
                control.TraBot(step);
                break;
            case "tra top":
                control.TraTop(step);
                break;
            case "build":
                control.buildWall();
                break;
            case "mov to ":
                var site=step.split(",");
                control.moveTo(parseInt(site[0]-1),parseInt(site[1])-1);
        }
        if(command.slice(0,3)==="bru"){
            control.changeColor(colorWall);
        }
    };
}(this));