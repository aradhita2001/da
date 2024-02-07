function rectangleArea(height: number , width: number){
    if(width < 0) return "wrong input";
    if(height < 0) return false;
    return width * height;
}

let vo : void = undefined;

console.log(rectangleArea(5,8));


// let arr : number[]|string[] = [4,6,"fdsf"];
// let arr : (String | number)[] = [4,"dfv", 6];
let arr : Array<number|string> = [1,3,"sf"];
console.log(arr);


let str : any[] = [1,3,4,5,6];

for(let i in str){
    str[i] = "q";
}

console.log(str);

let num : number = rectangleArea(3,5);

function optionalFunction (name:string, email?:string, id?:number){
    console.log(name);
    console.log(email);
    console.log(id);
}

optionalFunction("Aradhita", "dadf", 34);
optionalFunction("yubraj", 45);