const fs = require('fs');

function jsonReader(filePath,cb){

fs.readFile(filePath,'utf-8',(err, fileData) =>{

    if(err){
        return cb && cb(err);
    }else{
        try{
            const data = JSON.parse(fileData);
            return cb && cb(null, data);
        } catch (err){
             return cb && cb(err);
        }
    }
})}




jsonReader('./comment_wall.json',(err,data)=>{
if(err){
    console.log(err)
}else{
    data.id +=1;
    fs.writeFile('./comment_wall.json',JSON.stringify(data),err =>{
        if(err){
            console.log(err)
        }else{
            console.log("comment added!")
        }
    }
    )
}
}
)

