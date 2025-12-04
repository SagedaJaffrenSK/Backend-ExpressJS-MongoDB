function getUserDetails(id){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve({ userRoll : 678 }); // API call
        }, 2000);
    });
}

function getUserSubjects(user){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ userSubID : "Maths" }); // API call
        }, 3000);
    });
}

function getUserMarks(userSub){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ marks : 95 }); // API call
        }, 4000);
    });
}

const myFun = async () => {
    console.log("124");

    const result = await getUserDetails("145");
    console.log(result);

    const userSub = await getUserSubjects(result);
    console.log(userSub);

    const userMarks = await getUserMarks(userSub);
    console.log(userMarks);

    console.log("789");
};

myFun();