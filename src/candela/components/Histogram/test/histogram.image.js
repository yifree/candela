import imageTest from '../../../util/imageTest';

imageTest({
  name: 'histogram',
  url: 'http://localhost:38000/examples/#histogram',
  selector: '#vis-element',
  threshold: 0.01
});
