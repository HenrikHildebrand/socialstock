class V1::BaseController < ActionController::API
    include ActionController::MimeResponds
    # before_action :authenticate_user!
    skip_before_action :verify_authenticity_token
    acts_as_token_authentication_handler_for User
end