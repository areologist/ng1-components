import {<%= name %>} from './<%= name %>'
import {<%= upCaseName %>Controller} from './<%= name %>.controller';
import {<%= name %>Component} from './<%= name %>.component';
import template from './<%= name %>.html';

describe('<%= upCaseName %>', ()=>{
  let $rootScope,
  makeController;

  beforeEach(window.module(<%= name %>.name));
  beforeEach(inject((_$rootScope_)=>{
    $rootScope = _$rootScope_;
    makeController = ()=>{
      return new <%= upCaseName %>Controller();
    };
  }));

  describe('Module', ()=>{
    // test things about the component module
    // checking to see if it registers certain things and what not
    // test for best practices with naming too
    // test for routing
  });

  describe('Controller', ()=>{
    // test your controller here

    it('should have a name property [REMOVE]', ()=>{ // erase me if you remove this.name from the controller
      let controller = makeController();

      expect(controller).to.have.property('greeting');
    });
  });

  describe('Template', ()=>{
    // test the template
    // use Regexes to test that you are using the right bindings {{  }}

    it('should have name in template [REMOVE]', ()=>{
      expect(template).to.match(/{{\s?vm\.greeting\s?}}/g);
    });
  });


  describe('Component', ()=>{
      // test the component/directive itself
      let component = <%= name %>Component();

      it('should use the right template',()=>{
        expect(component.template).to.equal(template);
      });

      it('should use the right controller', ()=>{
        expect(component.controller).to.equal(<%= upCaseName %>Controller);
      });
  });
});
