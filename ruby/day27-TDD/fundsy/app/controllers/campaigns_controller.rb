class CampaignsController < ApplicationController
  before_action :find_campaign, only: [:show, :destroy]

  def new
    @campaign = Campaign.new
  end

  def show
  end

  def create
    @campaign = Campaign.new campaign_params

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

  private
  def find_campaign
    @campaign = Campaign.find params[:id]
  end

  def campaign_params
    params.require(:campaign).permit(:title, :description, :goal, :end_date)
  end
end
