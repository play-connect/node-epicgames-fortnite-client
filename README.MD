# node-epicgames-fortnite-client
The javascript client for Fortnite.

# Installation
```
npm i epicgames-fortnite-client
```

# Example
```javascript
const EGClient = require('epicgames-client').Client;
const FortniteClient = require('epicgames-fortnite-client').Client;

let eg = new EGClient({
    email: 'EMAIL',
    password: 'PASSWORD'
});

eg.init().then(async (success) => {
	
	if(success){
		
		if(await eg.login()){
			
            let fortnite = new FortniteClient(eg);

            if(await fortnite.init()){
                //`init` executing also login to account on which logged is `epicgames-client`
    
                let stats = await fortnite.getStatsBR('Kysune');
                console.log(stats);
    
            }
		
		}
	
	}
	
});
```

# Constructor options
```javascript
const FortniteClient = require('epicgames-fortnite-client').Client;
let fortnite = new FortniteClient({

	use_waiting_room: true, //false to ignore waiting room (epicgames load balancer)

	http: {
		//settings for lib https://github.com/request/request
	}

});
```

# Methods

## init()
> Initialize client

## login()
> Login to an account.

## getStatsBR(id[, time='alltime'])
> Returns an object of statistics for the Battle Royale mode. An object is divided on platforms with objects, which is divided on game's modes (solo/duo/squad).
* __id__ {_string_} - account's id or display name
* __time__ {_string_} - `weekly` or `alltime`

# License
MIT License

Copyright (c) 2018 Kysune

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.