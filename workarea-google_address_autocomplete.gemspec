$:.push File.expand_path('../lib', __FILE__)

# Maintain your gem's version:
require 'workarea/google_address_autocomplete/version'

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = 'workarea-google_address_autocomplete'
  s.version     = Workarea::GoogleAddressAutocomplete::VERSION
  s.authors     = ['Curt Howard']
  s.email       = ['choward@workarea.com']
  s.homepage    = 'https://github.com/workarea-commerce/workarea-google-address-autocomplete'
  s.summary     = 'Adds address autocomplete based on Google Places to the Workarea Commerce Platform'
  s.description = 'A Google Address Autocomplete plugin, made possible by ' +
                  "Google Maps API's Geocoding & Google Places Autocomplete, " +
                  'via the jQuery Geocomplete plugin.'
  s.files = `git ls-files`.split("\n")
  s.license = 'Business Software License'

  s.required_ruby_version = '>= 2.0.0'

  s.add_dependency 'workarea', '~> 3.x'
  s.add_dependency 'geocomplete_rails', '~> 1.6.5'
end
