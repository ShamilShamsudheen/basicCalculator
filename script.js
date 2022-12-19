function buttonClick(val)
{
    document.getElementById('display-screen').value+=val;

}
function clearButton()
{
    document.getElementById('display-screen').value="";
}
function equalClick()
{
    var text=document.getElementById('display-screen').value
    var result=eval(text)
    document.getElementById('display-screen').value=result
}