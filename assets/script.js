var a = ["Red", "Green", "Yellow", "Blue"];
document.getElementById("ans").innerHTML = a;
function add(){
    var array = ["Red", "Green", "Yellow", "Blue"];
    var c = document.getElementById("txt").value;
    array.splice(2, 0, c);
    document.getElementById("ans").innerHTML = array;
}
// function remove(){
//     alert(array)
// }