import './awesome.styl';
import {Awesome as controller} from './awesome.controller';
import template from './awesome.html';

export const awesomeComponent = ()=> {
  return {
    controller,
    template
  }
};
