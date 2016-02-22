# Angular 1.5 Component Generator

Gulp infrastructure for cranking out new components from CLI.
To be added to projects, customized, and extended.

Takes templates in `templates/` folder, interpolates provided component name,
and copies to `client/app/components/` (by default).

**Example**

To create an "awesome" component

```bash
gulp component --name awesome
```

**Notes**

Based on *Automation* section of Scott Moss's *Component-Based Architecture in AngularJS 1.x* course on [Frontend Masters](https://frontendmasters.com/).
