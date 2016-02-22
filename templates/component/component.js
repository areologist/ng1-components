import {<%= name %>Component} from './<%= name %>.component';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const <%= name %> = angular.module('<%= name %>', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('<%= name %>', {
      url: '/<%= name %>',
      template: '<<%- name %>></<%- name %>>'
    })
  })
  .component('<%= name %>', <%= name %>Component);
