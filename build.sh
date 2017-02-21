# !/bin/sh
mkdir -p public/vendors;

# angular
cp node_modules/angular/angular.min.js public/vendors;
cp node_modules/angular/angular.min.js.map public/vendors;

# angular-route
cp node_modules/angular-route/angular-route.min.js public/vendors;
cp node_modules/angular-route/angular-route.min.js.map public/vendors;

# bootstrap
cp node_modules/bootstrap/dist public/vendors;

# jQuery
cp node_modules/jquery/dist/jquery.min.js public/vendors;
