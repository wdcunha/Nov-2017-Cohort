require 'rails_helper'

RSpec.describe CampaignsController, type: :controller do
  # `let` is a method that will define a local method with the name
  # of the symbol given as its first argument. The method also takes
  # a block which will act as that defined methods body.
  # The return value of the block will saved for later use. Anytime
  # the defined method is called again the saved value will be used instead.
  let(:user) { FactoryBot.create(:user) }
  # ð is a shorcut in RSPEC only that defines methods like below ð
  # def user
  #   @user ||= FactoryBot.create(:user)
  # end
  let(:campaign) { FactoryBot.create(:campaign) }

  # `describe` methods are used to a context to all of the tests
  # of the passed in block (do ... end).
  describe '#new' do
    context 'without signed in user' do
      it 'redirect the user to sessions#new page' do
        get :new
        expect(response).to redirect_to(new_session_path)
      end
    end

    context  'with signed in user' do
      before do
        request.session[:user_id] = user.id
      end

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
        expect(assigns(:campaign)).to(be_a_new(Campaign))
        # `assigns(:campaign)` will check for the presence of an instance
        # variable named `@campaign` and will also return it if it exists.

        # `be_a_new` is an rspec matcher that will test that the given object
        # is an instance of the passed in class. In this case, it's testing
        # `assigns(:campaign) == Campaign.new`
      end
    end
  end

  describe '#create' do
    def valid_request
      post :create, params: {
        campaign: FactoryBot.attributes_for(:campaign)
      }
    end

    context 'with user not signed in' do
      it 'redirects to the new session path' do
        valid_request
        expect(response).to redirect_to(new_session_path)
      end
    end

    context 'with user signed in' do
      before do
        request.session[:user_id] = user.id
      end

      context 'with valid parameters' do

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

        it 'associates the campaign with the signed in user' do
          valid_request
          expect(Campaign.last.user).to eq(user)
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
  end

  describe '#show' do
    def valid_request
      # GIVEN: There's a campaign in the db
      # ð made obselete by let(:campaign) {...}
      # @campaign = FactoryBot.create(:campaign)

      # WHEN: We make a request to show that campaign
      get :show, params: { id: campaign.id }
    end

    it 'renders the show template' do
      valid_request
      # THEN: It renders the show template
      expect(response).to render_template(:show)
    end

    # /campaigns/20
    it 'assigns an instance variable to campaign whose id is in the params' do
      valid_request
      # THEN: It assigns instance variable equal to the shown campaign
      expect(assigns(:campaign)).to eq(campaign)
    end
  end

  describe '#destroy' do
    it 'removes a record from the database' do
      # GIVEN: We have a campaign in the db
      # ð Made obselete by `let` refactor
      # campaign = FactoryBot.create(:campaign)
      campaign

      count_before = Campaign.count

      # WHEN: We make a delete request with that campaign's id
      delete :destroy, params: {id: campaign.id}

      count_after = Campaign.count
      # THEN: There should be one less campaign in the db
      expect(count_after).to eq(count_before - 1)
    end

    it 'redirects to the index' do
      # campaign = FactoryBot.create(:campaign)
      delete :destroy, params: {id: campaign.id}
      expect(response).to redirect_to(campaigns_path)
    end

    it 'alerts the user with a flash' do
      # campaign = FactoryBot.create(:campaign)
      delete :destroy, params: {id: campaign.id}
      expect(flash[:alert]).to be
    end
  end

  describe '#edit' do
    context 'with no user signed in' do
      it 'redirects the user to the new sessions path' do
        get :edit, params: {id: campaign.id}
        expect(response).to redirect_to(new_session_path)
      end
    end

    context 'with user signed in' do
      context 'with non-owner signed in' do
        before do
          request.session[:user_id] = user.id
        end

        it 'redirects to the home page' do
          get :edit, params: {id: campaign.id}
          expect(response).to redirect_to(root_path)
        end
        it 'alerts the user with a flash' do
          get :edit, params: {id: campaign.id}
          expect(flash[:alert]).to be
        end
      end

      context 'with owner signed in' do
        before do
          request.session[:user_id] = campaign.user.id
        end

        it 'renders the edit template' do
          get :edit, params: { id: campaign.id }
          expect(response).to render_template(:edit)
        end

        it 'assigns an instance variable to the campaign being edited' do
          get :edit, params: { id: campaign.id }
          expect(assigns(:campaign)).to eq(campaign)
        end
      end
    end
  end

  describe '#update' do
    context 'with valid parameters' do
      before do
        patch :update, params: {
          id: campaign.id,
          campaign: { title: 'abc' }
        }
      end

      it 'saves the changes' do
        # `reload` is an instance method of active record instances.
        # It can be used to refresh the data in a model instance if
        # it changes in the db by some other means.
        expect(campaign.reload.title).to eq('abc')
      end

      it 'redirects to the campaign show page' do
        expect(response).to redirect_to(campaign_path(campaign))
      end
    end

    context 'with invalid parameters' do
      it 'renders the edit template' do
        patch :update, params: {
          id: campaign.id,
          campaign: { title: '' }
        }

        expect(response).to render_template(:edit)
      end
    end
  end
end






##bump
