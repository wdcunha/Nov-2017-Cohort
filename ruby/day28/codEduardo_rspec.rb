describe '#edit' do
    it 'renders the edit template' do
      @product = FactoryBot.create(:product)
      get :edit, params: {id: @product.id}

      expect(response).to render_template(:edit)
    end

    it 'sets an instance variable with a existing product' do
      @product = FactoryBot.create(:product)
      get :edit, params: {id: @product.id}

      expect(assigns(:product)).to eq(@product)
    end
  end

  describe '#update' do
    context 'with valid parameters' do
      def valid_request
        @product = FactoryBot.create(:product)
        patch :update , params: {id: @product.id, product:{
            title: 'This is a valid test',
            description: @product.description,
            price: @product.price,
            sale_price: @product.sale_price
            }
          }
      end

      it "updates title edited" do
        valid_request
          result = Product.last.title

        expect(result).to eq('This is a valid test')
      end

      it 'redirects to the show page of that product' do
      valid_request

        expect(response).to redirect_to(product_path(Product.last))
      end

    end
    context 'with invalid parameters' do
      def invalid_request
        @product = FactoryBot.create(:product)
        patch :update , params: {id: @product.id, product:{
            title: @product.title,
            description: @product.description,
            price: @product.price,
            sale_price: @product.price + 1
            }
          }
      end

      it 'doesn\'t change a product in the database' do
        @product = FactoryBot.create(:product)

        before = Product.last.sale_price

        patch :update , params: {id: @product.id, product:{
            title: @product.title,
            description: @product.description,
            price: @product.price,
            sale_price: @product.price + 1
            }
          }

        after = Product.last.sale_price

        expect(after).to eq(before)
      end

      it 'render the edit template' do
      invalid_request
      expect(response).to render_template(:edit)
      end


    end
  end
