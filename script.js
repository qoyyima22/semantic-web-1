
function initValue() {
    
}

function convertCur (nilai1,inputCur,outputCur){
    var nilai1=document.getElementById("nilai1").value
    document.getElementById("demo").value=nilai1

    const curNowaday={
        Rupiah: {value:14177.50, symbol:'Rp'},
        USD: {value:1, symbol:"$"},
        Yen: {value:111.98, symbol: "&#xa5"},
        Euro: {value:0.88, symbol:"\u20AC"},
        Poundsterling:{value:0.757,symbol:"&#163"},
        "Australian Dollar":{value:1.411,symbol:"$"},
        "Canada Dollar":{value:1.329,symbol:"$"},
        "Switzerland Franc":{value:0.998,symbol:"&#67"},
        "Chinese Renminbi":{value:6.706,symbol:"&#165"},
        "Swedian Krona":{value:9.27,symbol:"&#107"}
    }
    var output=document.getElementById("output")
    var inputCur=document.getElementById("inputCur").value
    var outputCur=document.getElementById("outputCur").value
    var multiplier=0
    var multiplier2=0
    var flag1=false
    var flag2=false
    for (key in curNowaday){
        if (key===inputCur){
            multiplier=curNowaday[key].value
            flag1=true
        }
        if (key===outputCur){
            multiplier2=curNowaday[key].value
            var simbol=curNowaday[key].symbol
            flag2=true
        }
    }
    
    document.getElementById("demo2").value=multiplier
    document.getElementById("demo3").value=multiplier2
    var subOutput=(nilai1/multiplier*multiplier2)

    if(flag1===false||flag2===false||isNaN(subOutput)===true){
        output.innerHTML="Please check your input!!"
        return
    }
    if(subOutput<1){
        subOutput=subOutput.toString().slice(0,5)
    }
    else if (subOutput.toString().length>3&&subOutput>1){
        var temp=''
        for (var i=0;i<subOutput.toString().length;i++){
            if(subOutput.toString()[i-3]==="."){
                break;
            }
            if(subOutput.toString()[i]==="."){
                temp=temp+","
            }
            else if((Math.floor(subOutput).toString().length-(i))%3===0&&i!==0&&subOutput.toString()[i]!=="."&&i<=Math.floor(subOutput).toString().length){
                temp=temp+"."
                temp=temp+subOutput.toString()[i]
            }
            else{temp=temp+subOutput.toString()[i]}
        }
        subOutput=temp
    }
    
    output.innerHTML="Conversion result is :   "+ simbol+" "+subOutput
}
