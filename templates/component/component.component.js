import './<%= name %>.styl';
import {<%= upCaseName %> as controller} from './<%= name %>.controller';
import template from './<%= name %>.html';

export const <%= name %>Component = ()=> {
  return {
    controller,
    template
  }
};
