class BillSplitterController < ApplicationController

  def index

  end

  def calcs
    @amount = params[:amount].to_f
    @taxes = params[:taxes].to_f / 100
    @tip = params[:tip].to_f / 100
    @number_people = params[:number_people].to_i

    @taxCalc = (@taxes * @amount)
    @tipCalc = (@tip * (@amount + @taxCalc))

    @total = @tipCalc + @amount + @taxCalc

    @each_person = (@total / @number_people).round(2)
    render :index
  end

end
