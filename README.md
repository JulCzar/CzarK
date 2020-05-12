# CzarK

This is a module project to be used and provide easier access to DOM and Storages:

### How it works?
Instead of use:
```js
var item = JSON.parse(localStorage.getItem('key'))

sessionStorage.setItem('key', JSON.stringify({ data: [] }))

var elem  = document.getElementById('id');
var elem2 = document.querySelectorAll('query');
var elem3 = document.getElementsByClassName('class');

elem.addEventListener('mousemove', () => {})
```

Simply type:
```js
var item = get.Local('key')

set.Session('key', { data: [] })

var elem  = get.Id('id')
var elem2 = get.Queries('query')
var elem3 = get.Classes('class')

listen('mousemove', () => {}, elem)
```

and so on...

Making both, readability and maintenability easier!

Hope this work can help anyone as it do for me =)
