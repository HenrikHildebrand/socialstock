class V1::BaseController < ActionController::API
    include ActionController::MimeResponds
    # before_action :authenticate_user!
    acts_as_token_authentication_handler_for User
end