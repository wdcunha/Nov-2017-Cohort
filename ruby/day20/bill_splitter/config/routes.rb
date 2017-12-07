Rails.application.routes.draw do

 	root 'welcome#home'
  post('/', { to: 'welcome#calculate' })

end
