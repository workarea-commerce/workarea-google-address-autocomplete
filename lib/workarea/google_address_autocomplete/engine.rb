module Workarea
  module GoogleAddressAutocomplete
    class Engine < ::Rails::Engine
      include Workarea::Plugin
      isolate_namespace Workarea::GoogleAddressAutocomplete
    end
  end
end
