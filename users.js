var expressObj = require('express')
var app = expressObj()

const users = [{ name: 'Aswin', age: 25 }, { name: 'Karthik', age: 26 }, {name : 'Naga', age: 24}, {name: 'Abhinaya', age: 25}];

app.get('/',function(request,response){
	response.send('Hi Bosss !!')
})

app.get('/users',function(request, response){
	response.json(users)

})

app.get('/users/:user', function(request,response){
	var usersArray = users
	var flag = false
	console.log(usersArray)
	for(var i in usersArray){
		console.log(usersArray[i].name);
		if(usersArray[i].name === request.params.user){
			response.json(usersArray[i]);
			flag = true
			return
		}
	}
	if(flag === false){
		response.status(404).send('Not Found')
	}
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
