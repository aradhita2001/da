function rectangleArea(height, width) {
    if (width < 0)
        return "wrong input";
    if (height < 0)
        return false;
    return width * height;
}
var vo = undefined;
console.log(rectangleArea(5, 8));
var arr = [1, 3, "sf"];
console.log(arr);
var str = [1, 3, 4, 5, 6];
for (var i in str) {
    str[i] = "q";
}
console.log(str);
var num = rectangleArea(3, 5);
