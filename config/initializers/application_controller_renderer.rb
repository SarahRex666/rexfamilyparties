# Be sure to restart your server when you modify this file.

# ActiveSupport::Reloader.to_prepare do
#   ApplicationController.renderer.defaults.merge!(
#     http_host: 'example.org',
#     https: false
#   )
# end

ActiveSupport::Reloader.to_prepare do
    ApplicationController.renderer.defaults.merge!(
      http_host: 'http://localhost:3000',
      https: false
    )
  end