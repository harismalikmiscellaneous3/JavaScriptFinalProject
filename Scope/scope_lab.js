// Global Scope
var globalvar = "I am a global variable";
let globalLet = "I am also global, but scoped with let";
const globalConst = "I am a global constant";

{
    // Block Scope
    var blockVar = "I am a block-scoped var";
    let blockLet = "I am a block-scoped let";
    const blockConst = "I am a block-scoped const";

}
//Global Scope
console.log(globalvar);
console.log(globalLet);
console.log(globalConst);
 
// Block Scope
// console.log(blockVar);
// console.log(blockLet);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
}
show();
console.log(functionVar); 
console.log(functionLet); 
console.log(functionConst);