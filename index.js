
try{
    const result = await fetch('java_summary.txt');
    const text = await result.text();
}catch(err){
    console.log(err);
}