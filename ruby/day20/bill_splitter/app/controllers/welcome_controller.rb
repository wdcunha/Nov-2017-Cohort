class WelcomeController < ApplicationController

	def home
	end

	def calculate
		@amount = params[:amount].to_f
		@tax = params[:tax].to_f / 100
		@tip = params[:tip].to_f / 100
		@number_of_people = params[:number_of_people].to_i

		@taxAmount = (@amount * @tax).round(2)
		@tipAmount = ((@amount + @taxAmount) * @tip).round(2)

		@total = @amount + @taxAmount + @tipAmount
		@each = (@total / @number_of_people).round(2)
		render :home
	end


end
