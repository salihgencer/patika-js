function getSecondLargest(nums) {
    // Complete the function
    
    let maxVal = Math.max(...nums);
    let secondVal = 0;
    let status = true;
    let i = 1;
    while(status){
        let newVal = maxVal - i;
        if(nums.includes(newVal)){
            secondVal = newVal;
            status = false;
        }
        i = i + 1;
    }
    console.log(maxVal);
    console.log(secondVal);
    return secondVal;
}


getSecondLargest([9,9,8,8,11,8,0,9,1]);
console.log("--------------------------------");
getSecondLargest([1,2,3,4,5,6,7,10]);
console.log("--------------------------------");
getSecondLargest([2,3,6,6,]);