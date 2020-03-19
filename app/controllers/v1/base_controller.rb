class V1::BaseController < ActionController::API
    include ActionController::MimeResponds

    before_action :authenticate_user!

end