# def titleize( x )
#    x.gsub( /\w+/ ) { |w| w.length > 3 ? w.capitalize : w.downcase }.capitalize
# end

str = "In the example, we need to consider ponctuations and small words."

def titlieze(title)
  stop_words = %w(in the of and or from to)
  title.capitalize.split.map { |w| stop_words.include?(w) ? w : w.capitalize }.join(' ')
end

p titlieze(str)
