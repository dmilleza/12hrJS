let output

// collection of all of the different parts of the page
output = document.all
// HTMLAllCollection(36)

output = document.all[10]
// div.container

output = document.all.length
// 36

// get everything inside the HTML tag
output = document.documentElement

output = document.head
output = document.body

output = document.head.children
// HTMLCollection(7) [meta, meta, meta, meta, meta, link, title, viewport: meta, author: meta, description: meta, keywords: meta]

output = document.body.children
// HTMLCollection(2) [div.container, script]

output = document.doctype
// <!DOCTYPE html>

output = document.domain
// 127.0.0.1

output = document.URL
// http://127.0.0.1:5501/part6/02-dom-properties/index.html

output = document.characterSet
// UTF-8

output = document.contentType
// text/html

output = document.forms
// HTMLCollection [form#item-form, item-form: form#item-form]

output = document.forms[0].id
// item-form

output = document.forms[0].method
// get

// change id
// document.forms[0].id = 'new-id'

output = document.links[0].href
// https://google.com/

// change id and class
output = document.links[0].id = 'google-link'
output = document.links[0].className = 'google-class'

output = document.links[0].classList
// DOMTokenList ['google-class', value: 'google-class']



console.log(output)
