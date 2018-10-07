var bar = new ProgressBar.Line(htmlbar, {
    strokeWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a57141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#FFEA82'},
    to: {color: '#009688'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  });

  
  bar.animate(0.95);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Line(cssbar, {
    strokeWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a57141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#FFEA82'},
    to: {color: '#009688'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  });
  
  bar.animate(0.85);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Line(jsbar, {
    strokeWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a57141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#FFEA82'},
    to: {color: '#009688'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  });
  
  bar.animate(0.7);  // Number from 0.0 to 1.0

  var bar = new ProgressBar.Line(pythonbar, {
    strokeWidth: 1,
    easing: 'easeInOut',
    duration: 1400,
    color: '#a57141',
    trailColor: '#eee',
    trailWidth: 1,
    svgStyle: {width: '100%', height: '100%'},
    from: {color: '#FFEA82'},
    to: {color: '#009688'},
    step: (state, bar) => {
      bar.path.setAttribute('stroke', state.color);
    }
  });
  
  bar.animate(0.5);  // Number from 0.0 to 1.0

// var bar = new ProgressBar.Line(htmlbar, {
//     strokeWidth: 1,
//     easing: 'easeInOut',
//     duration: 1400,
//     color: '#FFEA82',
//     trailColor: '#eee',
//     trailWidth: 1,
//     svgStyle: { width: '100%', height: '100%' }
// });

// bar.animate(0.8);  // Number from 0.0 to 1.0

// var bar = new ProgressBar.Line(htmlbar, {
//     strokeWidth: 1,
//     easing: 'easeInOut',
//     duration: 1400,
//     color: '#FFEA82',
//     trailColor: '#eee',
//     trailWidth: 1,
//     svgStyle: { width: '100%', height: '100%' }
// });

// bar.animate(0.8);  // Number from 0.0 to 1.0

// var bar = new ProgressBar.Line(htmlbar, {
//     strokeWidth: 1,
//     easing: 'easeInOut',
//     duration: 1400,
//     color: '#FFEA82',
//     trailColor: '#eee',
//     trailWidth: 1,
//     svgStyle: { width: '100%', height: '100%' }
// });
  
//   bar.animate(0.8);  // Number from 0.0 to 1.0

//   var bar = new ProgressBar.Line(htmlbar, {
//     strokeWidth: 1,
//     easing: 'easeInOut',
//     duration: 1400,
//     color: '#FFEA82',
//     trailColor: '#eee',
//     trailWidth: 1,
//     svgStyle: {width: '100%', height: '100%'}
//   });
  
//   bar.animate(0.8);  // Number from 0.0 to 1.0