bookList = []

loop do
  print 'Type a book name: '
  book = gets.chomp
  break if book == "exit"
  bookList << book.split(" ").map { |word| word.capitalize }.join(" ")
end
#puts gets.chomp.split(" ").map { |word| word.capitalize }.join(" ")

#bookList.delete("exit")

print bookList.sort
