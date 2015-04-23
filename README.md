# meteor-jquery-marquee

Meteor packaging of [aamirafridi/jQuery.Marquee](https://github.com/aamirafridi/jQuery.Marquee).

This package is MIT Licensed. Do whatever you like with it but any responsibility for doing so is your own.

All rights to aamirafridi/jQuery.Marquee are with the original author.

## Usage

###HTML:
```html
<div class='marquee'>Lorem ipsum dolor sit amet, consectetur adipiscing elit END.</div>
```

or use this if you want to start the plugin with no options but want to use data attributes. You can use all the options listed above as data attributes. This is how you can use them:

```html
<div class='marquee' data-duration='5000' data-gap='10' data-dupilcated='true' >
    Lorem ipsum dolor sit amet, consectetur adipiscing elit END.
</div>
```

###CSS:
```css
.marquee {
  width: 300px; /* the plugin works for responsive layouts so width is not necessary */
  overflow: hidden;
  border:1px solid #ccc;
}
```

###How to apply plugin:
Do this in your template's `onRendered` block:
```javascript
/**
 * Example of starting a plugin with options.
 * I am just passing some of the options in the following example.
 * you can also start the plugin using $('.marquee').marquee(); with defaults
*/
$('.marquee').marquee({
  //speed in milliseconds of the marquee
  duration: 15000,
  //gap in pixels between the tickers
  gap: 50,
  //time in milliseconds before the marquee will start animating
  delayBeforeStart: 0,
  //'left' or 'right'
  direction: 'left',
  //true or false - should the marquee be duplicated to show an effect of continues flow
  duplicated: true
});
```

See more in the (original documentation)[https://github.com/aamirafridi/jQuery.Marquee/blob/master/README.md].

## Contributing

Anyone is welcome to contribute. Fork, make your changes, and then submit a pull request.
