import _ from 'lodash'
import { Nijou as test } from './util'

console.log(test(1000))

function component() {
  const element = document.createElement('div');
  const array = ['Hello', 'webpack', '!!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(component());
