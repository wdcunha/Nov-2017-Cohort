require 'rails_helper'

RSpec.describe CampaignsController, type: :controller do

  describe '#new' do
    it 'renders the new template' do
      # The following will mimick a `GET` request to the
      # CampaignsController's new action.
      # GIVEN: Defaults...
      # WHEN: We make a get request
      get :new

      # THEN: We expect that the new template is rendered
      expect(response).to render_template(:new)
      # `response` is an object available in all controller specs
      # which gives access to the controller's response to the client.
      # It includes the template being rendered, status codes, errors, etc.

      # `render_template` is a rspec-rails matcher that checks that the
      # response object actually rendered a given template.
    end

    it 'sets an instance variable with a new campaign' do

      get :new
      # assigns check if one instance variable is assigned and '.to' is a method that can be written like this: .to(be_a_new(Campaign))
      expect(assigns(:campaign)).to be_a_new(Campaign)
      # `assigns(:campaign)` will check for the presence of an instance
      # variable named `@campaign` and will also return it if it exists.

      # `be_a_new` is an rspec matcher that will test that the given object
      # is an instance of the passed in class. In this case, it's testing
      # `assigns(:campaign) == Campaign.new`
    end
  end

  describe '#create' do
    context 'with valid parameters' do
      def valid_request
        post :create, params: {
          campaign: FactoryBot.attributes_for(:campaign)
        }
      end

      it 'creates a new campaign in the database' do
        count_before = Campaign.count
        valid_request
        count_after = Campaign.count

        expect(count_before).to eq(count_after - 1)
      end

      it 'redirects to the show page of that campaign' do
        valid_request
        expect(response).to redirect_to(campaign_path(Campaign.last))
      end

      it 'sets a flash message' do
        valid_request
        expect(flash[:notice]).to be
      end
    end
    context 'with invalid parameters' do
      def invalid_request
        post :create, params: {
          campaign: FactoryBot.attributes_for(:campaign).merge({title: nil})
        }
      end

      it 'doesn\'t create a campaign in the database' do
        count_before = Campaign.count
        invalid_request
        count_after = Campaign.count

        expect(count_before).to eq(count_after)
      end

      it 'renders the new template' do
        invalid_request
        expect(response).to render_template(:new)
      end
    end
  end

  describe '#show' do
    # it 'renders the show template' do
      # # GIVEN: There's a campaign in the db
      # campaign = FactoryBot.create(:campaign)
      #
      # # THEN: We make a request to show that campaign
      # get :show, params: { id: campaign.id }
      #
      # # THEN: It renders the show template
      # expect(response).to render_template(:show)
    def valid_request
      # GIVEN: There's a campaign in the db
      @campaign = FactoryBot.create(:campaign)

      # WHEN: We make a request to show that campaign
      get :show, params: { id: @campaign.id }
    end

    # /campaigns/20
    it 'assigns an instance variable to campaign whose id is in the params' do
      # # GIVEN: There's a campaign in the db
      # campaign = FactoryBot.create(:campaign)
      #
      # # WHEN: We make a request to show that campaign
      # get :show, params: { id: campaign.id }
      #
      # # THEN: It assigns instance variable equal to the shown campaign
      # expect(assigns(:campaign)).to eq(campaign)

      valid_request
      # THEN: It assigns instance variable equal to the shown campaign
      expect(assigns(:campaign)).to eq(@campaign)
    end
  end

  describe '#destroy' do
    it 'removes a record from the database' do
      # GIVEN: We have a campaign in the db
      campaign = FactoryBot.create(:campaign)

      count_before = Campaign.count

      # WHEN: We make a delete request with that campaign's id
      delete :destroy, params: {id: campaign.id}

      count_after = Campaign.count
      # THEN: There should be one less campaign in the db
      expect(count_after).to eq(count_before - 1)
    end

    it 'redirects to the index' do
      campaign = FactoryBot.create(:campaign)
      delete :destroy, params: {id: campaign.id}
      expect(response).to redirect_to(campaigns_path)
    end

    it 'alerts the user with a flash' do
      campaign = FactoryBot.create(:campaign)
      delete :destroy, params: {id: campaign.id}
      expect(flash[:alert]).to be
    end

  end

end
