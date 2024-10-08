const mongooseUrl = '';
machineLearning().then(()=>{
    console.log("wanderlust")
}).catch((err)=>{
    console.log(err)
})
async function main() {
    await mongoose.connect(mongooseUrl);
}