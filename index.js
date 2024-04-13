function twoNumberSum(array,targetSum){
    for(let i=0;i < array.length-1; i++){
        let aux1=array[i]
            for(let j=i+1;j < array.length; j++){
                if(aux1+array[j]==targetSum){
                    return [aux1,array[j]]
                }
            }
    }
    return 0
}
const array = [3,5,-4,8,11,1,8,6]
const targetSum = 10

const result = twoNumberSum(array,targetSum)
if(result==0){
    console.log("No hay coincidencias")
}
else{
    console.log("El array resultante es: ["+result+"]")
}