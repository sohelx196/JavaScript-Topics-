const student = {
    studentName : "Sohel Sheikh",
    studentBranch : "Data Science",

    studentCollage(){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                console.log("Sdits Khandwa");
                resolve(200)    
            },3000)
        })
    }   
};

