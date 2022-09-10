let submitBtn = document.querySelector("button");
let input =  document.querySelector("input");
let label =  document.querySelector("label");
let errorSign =  document.querySelector(".error");



submitBtn.onclick = () => {
    let text = input.value;
    let atCount = 0;
    for(let i = 0;i<text.length;i++)
    {
        if(text[i] == "@")
        atCount++;
    }
    if(text.indexOf("@") > 1 && text.indexOf(".") > text.indexOf("@")+1 && atCount == 1)
    {
        input.style.border = " 2px solid lightgreen";
        errorSign.style.display = "none";
        label.style.display = "none";
    }
    else
    {
        input.style.border = "2px solid hsl(0, 93%, 68%)";
        errorSign.style.display = "flex";
        label.style.display = "flex";
    }
}