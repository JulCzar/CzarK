# CzarK

This is an project of module to be used and provide easy access to DOM:

### How it works?
Instead of use:
```js
var elem  = document.getElementById('id');
var elem2 = document.querySelectorAll('query');
var elem3 = document.getElementsByClassName('class');

elem.addEventListener('mousemove', () => {})
```

Simply type:
```js
var elem  = get.Id('id')
var elem2 = get.Queries('query')
var elem3 = get.Classes('class')

listen('mousemove', () => {}, elem)
```

and so on...

Making both, readability and maintenability easier!

Hope this work can help anyone as it do for me =)
