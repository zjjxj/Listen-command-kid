(function (global) {
    
    /**
     * 初始化网格地图
     */
    function createMap() {
        for (var i = 0; i < 10; i++) {
            $("#map").innerHTML += "<div class='grad'><span></span><span></span><span>" +
                "</span><span></span><span></span><span></span>" +
                "<span></span><span></span><span></span><span></span></div>"
        }
    }
    
    /**
     * 根据行数，列数，方向生成小人
     * @param rows 行数
     * @param cols 列数
     * @param dir  方向
     */
    global.showChess=function(rows, cols, dir) {  
        var elem = $("#chess");
        switch (dir) {
            case 1:
                elem.style.top = rows*51+"px";
                elem.style.left = cols*52+"px";
                break;
            case 2:
                elem.style.top = rows*51+"px";
                elem.style.left = cols*52+"px";
                elem.style.transform="rotate(90deg)";
                initDeg=90;
                break;
            case 3:
                elem.style.top = rows*51+"px";
                elem.style.left = cols*52+"px";
                elem.style.transform="rotate(180deg)";
                initDeg=180;
                break;
            case 4:
                elem.style.top = rows*51+"px";
                elem.style.left = cols*52+"px";
                elem.style.transform="rotate(270deg)";
                initDeg=270;
                break;
        }
    }
    
    /**
     * 界面初始化
     */
    global.init=function () {
        createMap();
        showChess(initRow, initCol, initDir);
    }
}(this));