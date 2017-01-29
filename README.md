# cba-bez-reklam

Skrypt który chowa wszystkie reklamy kiedy
hostujemy za darmo na hostingu cba.pl.
Możliwe że będzie działać na innych hostingach.
Warunkiem jest używanie znaczników `<div>` lub
`<iframe>` przez hosting.

Pamiętaj by skrypt umieścić na końcu strony
i aby dodać te znaczniki:
```html
<div id="stop_reklam"></div>
<!--kod strony-->
<div id="start_reklam"></div>
```
Pokazują one skryptowi gdzie znajduje
się kod strony.
