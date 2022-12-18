//Selector

const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//Eventlistener on preesing key

keys.forEach(key=>{
    key.addEventListener("click", calculate);
});

function calculate(){
    let buttonText = this.innerText;
    console.log(buttonText);

    if(buttonText==="AC"){
        output.innerText="";
        result.innerText="0";
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        return;
    }

    if(buttonText === "DEL"){
        output.textContent = output.textContent.substr(0,output.textContent.length-1);
        return;
    }

    if(buttonText === "="){
        console.log("come to this later");
        result.innerText = eval(output.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";

    }

    if(buttonText === "^2"){
        let x = output.innerText;
        val = x*x;
        console.log(val);
        result.innerText = val;
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
       
    }

    if(buttonText === "^"){
        const numP = output.innerText;
        const numR = output.innerText;
        console.log(numP, numR);
        result.innerText = val;
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
       
    }

    if(buttonText === "%"){
        const numP = output.innerText;
        const pResult = (numP/100);
        result.innerText = pResult;
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";
       
    }



    else{
        output.textContent +=buttonText;
        return;

    }


}