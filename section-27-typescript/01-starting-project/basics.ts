function inserta<T>(array: T[], value: T){
    const newArr = [value, ...array];
    return newArr
}

const demoArray = [1,2,3];
 const updatedArray = inserta(demoArray, -1);