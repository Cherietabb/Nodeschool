
var myresult = 0;
for(i = 2; i < process.argv.length; i++) {
	myresult += Number(process.argv[i])
}
console.log(myresult);
