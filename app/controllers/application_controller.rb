class ApplicationController < ActionController::Base
  include DeviseTokenAuth::Concerns::SetUserByToken
end
## CHANGED ::API TO ::BASE