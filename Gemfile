source "https://rubygems.org"

gem "jekyll", ">=3.8.6"
gem 'wdm', '>= 0.1.0' if Gem.win_platform?

# Official Plugins
group :jekyll_plugins do
  gem "jekyll-paginate"
  gem "jekyll-redirect-from"
end

group :test do
  gem "html-proofer"
end

# Windows does not include zoneinfo files, so bundle the tzinfo-data gem
gem "tzinfo-data", platforms: [:mingw, :mswin, :x64_mingw, :jruby]
