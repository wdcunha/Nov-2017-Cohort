class CampaignsController < ApplicationController
  before_action :authenticate_user!, only: [:new, :create, :edit]
  before_action :find_campaign, only: [:show, :destroy, :edit, :update]
  before_action :authorize_user!, only: [:edit]


  def new
    @campaign = Campaign.new
  end

  def show
  end

  def create
    @campaign = Campaign.new campaign_params
    @campaign.user = current_user

    if @campaign.save
      flash[:notice] = 'Campaign created!'
      redirect_to campaign_path(@campaign)
    else
      render :new
    end
  end

  def destroy
    @campaign.destroy
    redirect_to campaigns_path, alert: 'Campaign deleted'
  end

  def edit
  end

  def update
    if @campaign.update campaign_params
      redirect_to campaign_path(@campaign)
    else
      render :edit
    end
  end
  
  private
  def find_campaign
    @campaign = Campaign.find params[:id]
  end

  def campaign_params
    params.require(:campaign).permit(:title, :description, :goal, :end_date)
  end

  def authorize_user!
    unless can? :manage, @campaign
      redirect_to root_path, alert: 'Unauthorized'
    end
  end
end




##
