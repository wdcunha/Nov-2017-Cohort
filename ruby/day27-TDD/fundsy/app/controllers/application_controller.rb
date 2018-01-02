class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  def current_user
    @current_user ||= User.find session[:user_id] if user_signed_in?
  end

  def user_signed_in?
    session[:user_id].present?
  end

  private
  def authenticate_user!
    unless user_signed_in?
      redirect_to new_session_path
    end
  end
end
