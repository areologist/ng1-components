import {awesomeComponent} from './awesome.component';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const awesome = angular.module('awesome', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('awesome', {
      url: '/awesome',
      template: '<awesome></awesome>'
    })
  })
  .component('awesome', awesomeComponent);
