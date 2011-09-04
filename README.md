jquery.tr
=========

jquery.tr is a [jQuery](http://jquery.com/) plugin which enables you to translate text on the client side.

Features
--------

### Uses a predefined dictionary

You can get or set the dictionary the plugin uses by calling `$.tr.dictionary`. It is a object made by key-value pairs, with the original sentence or string id as key, and the translated sentence as value (or a translating function, see below).

Alternatively, you may give an other dictionary when calling `$.tr.translator` which will be used instead of the global dictionary.

You may also use a hierarchy of dictionaries, by giving the keys to `$.tr.transaltor`.  

Note that you may still use AJAX to retrieve the dictionary, but the plugin itself does not rely on AJAX to translate (it's not its goal).

```javascript
$.getJSON('dictionary.php', function(data) {
	$.tr.dictionary(data);
});
```

### Translates into languages with several plurals

You can write generic sentences, but you may want to customize sentences involving numbers to be more grammatically correct. But some languages have up to six forms of plurals!

By giving functions as dictionary's values, you can achieve this easily. The function has to return a string, used as the translated sentence. Because the function takes the parameters given to the translator, it should uses them to return different strings.

### Replaces parameters in translations

Because the order of words may change between languages, the use of parameters is necessary. A parameter is indicated by a `&` followed by an identifier in the sentences. Give an associative map as second argument to the translator function, which contains identifiers as keys and replacement texts as values.

```javascript
var tr = $.tr.translator();
var status = tr('&object belongs to &category.', {
	object: item.object,
	category: categories[item.category].name
});
```

Alternatively, if identifiers are numbers, you may give the values directly to the translator function. However, don't overuse this syntax: the lack of semantics make it hard to read and maintain.

```javascript
var tr = $.tr.translator();
var greetings = tr('Hello &1!', name);
```

### Uses cookie information if jQuery.cookie is available

Simply include `jquery.cookie.js` before `jquery.tr.js` and that's it. With the cookie plugin, the language will be automatically saved and restored.

### Designed to be used by CouchApps

Last but not least, it has been designed with integration with CouchApps in mind.

See the related [jquery.couch.tr](https://github.com/Bloutiouf/jquery.couch.tr) project. 

API
-----

```javascript
// get dictionary
var dict = $.tr.dictionary();

// set dictionary
$.tr.dictionary(dict);

// get language
var lg = $.tr.language();

// set language
$.tr.language(lg);

// set default language if no previous language has been saved through cookies
$.tr.language(lg, true);

// get translator
var tr = $.tr.translator();
var tr = $.tr.translator('sub-dictionary', ...);
var tr = $.tr.translator(customDictionary, ...);

// using translator
alert(tr('Hello world!'));
```

Examples
--------

The [examples](https://github.com/Bloutiouf/jquery.tr/blob/master/examples) directory contains some examples:

* [event.html](https://github.com/Bloutiouf/jquery.tr/blob/master/examples/event.html) uses select's change event and cookies
* [plurals.html](https://github.com/Bloutiouf/jquery.tr/blob/master/examples/plurals.html) translates a sentence into languages with different plural rules
* [simple.html](https://github.com/Bloutiouf/jquery.tr/blob/master/examples/simple.html) is a basic example
* [subdictionaries.html](https://github.com/Bloutiouf/jquery.tr/blob/master/examples/subdictionaries.html) uses sub-dictionaries

Changelog
---------

### 1.1

Removes rest of the former event feature.

Misc
----

Licensed under a MIT license, see the [LICENSE file](https://github.com/Bloutiouf/jquery.tr/blob/master/LICENSE).

Official site: https://github.com/Bloutiouf/jquery.tr