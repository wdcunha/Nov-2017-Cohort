Rails.application.routes.draw do

# get('/', { to: 'bill_splitter#index', as: :home })
get "/" => "bill_splitter#index", as: :home

post('/', { to: 'bill_splitter#calcs' })


end
