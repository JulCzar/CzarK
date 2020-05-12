# CzarK

This is a module project to be used and provide easier access to DOM and Storages:

### How it works?
Instead of use:
```js
var item = JSON.parse(localStorage.getItem('key'));

sessionStorage.setItem('key', JSON.stringify({ data: [] }));

var elem  = document.getElementById('id');
var elem2 = document.querySelectorAll('query');
var elem3 = document.getElementsByClassName('class');

elem.addEventListener('mousemove', () => {});
```

Simply type:
```js
var item = get.Local('key');

set.Session('key', { data: [] });

var elem  = get.Id('id');
var elem2 = get.Queries('query');
var elem3 = get.Classes('class');

listen('mousemove', () => {}, elem);
```

and so on...

Making both, readability and maintenability easier!

Tip: you can add it to any webPack Project by using
```js
export {}
``` 
to the end of my file, exporting then the used, or all methods and classes, now you can import it from any other file of the project you are working at =)

Hope this work can help anyone as it do for me =)
