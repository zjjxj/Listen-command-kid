(function (global) {
    /**
     * 验证输入指令，生成错误提示样式
     */
    function verify(){
        if(inputValue.length>0){
            inputValue.map(function (data,index) {
                var steps=data.slice(7,data.length);
                var spanElem=$("#wrap").children[index];
                if((steps&&steps<1)||(steps&&steps>9)||controlArr.indexOf(data.slice(0,7))===-1){
                    spanElem.style.backgroundColor="red";
                    spanElem.style.borderRadius="12px";
                    if(!(controlArr.indexOf(data.slice(0,3))===-1)){
                        spanElem.style.backgroundColor="";
                        spanElem.style.borderRadius="";
                    }
                }else {
                    spanElem.style.backgroundColor="";
                    spanElem.style.borderRadius="";
                }
            })
        }
    }

    /**
     * 更新inputValue数组
     */
    function upDateInputValue(){
        inputValue=$("textarea").value.replace(/\n/g,"|").split("|");
        inputValue=inputValue.slice(0,inputValue.length-1);

    }
    /**
     * 更新提示行数列表
     */
    function upDateRemindRows() {
        var initSpan=document.createElement("span");
        initSpan.innerHTML=1;
        $("#wrap").appendChild(initSpan);
        inputValue.map(function (data,index) {
            var newSpan=document.createElement("span");
            newSpan.innerHTML=index+2;
            $("#wrap").appendChild(newSpan);
        })
    }

    /**
     * 验证器  验证输入指令,生成错误提示样式,更新inputValue数组
     * @param e 事件对象
     */
    global.verifier=function (e) {
        if(e.keyCode===13){
            $("#wrap").innerHTML="";
            upDateInputValue();
            upDateRemindRows();
            verify();
        }else if(e.keyCode==8){
            $("#wrap").innerHTML="";
            inputValue=$("textarea").value.replace(/\n/g,"|").split("|");
            inputValue.map(function (data,index) {
                var newSpan=document.createElement("span");
                newSpan.innerHTML=index+1;
                $("#wrap").appendChild(newSpan);
            });
            verify();
        }else if(e.keyCode===37){
            control.MovLef(1);
        }else if(e.keyCode===38){
            control.MovTop(1);
        }else if(e.keyCode===39){
            control.MovRig(1);
        }else if(e.keyCode===40){
            control.MovBot(1);
        }
    }
}(this));
