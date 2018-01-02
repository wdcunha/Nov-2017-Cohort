# http://awaxman11.github.io/blog/2013/08/05/what-is-the-difference-between-a-block/
# https://github.com/CodeCoreYVR/bootcamp_summary_notes/blob/master/week_02/ruby_methods_blocks_lambdas.md
# Block Examples

[1,2,3].each { |x| print x*2 }   # block is in between the curly braces
puts
[1,2,3].each do |x|
  print x*2                    # block is everything between the do and end
end
puts
# Proc Examples
pr = Proc.new { |x| puts x*2 }
[1,2,3].each(&pr)              # The '&' tells ruby to turn the proc into a block

puts

proc = Proc.new { puts "Hello World inside a proc" }
proc.call                     # The body of the Proc object gets executed when called

puts
# Lambda Examples
lam = lambda { |x| puts x*2 }
[1,2,3].each(&lam)
puts

lam = lambda { puts "Hello World inside a lambda" }
lam.call

puts

def multiple_procs(proc1, proc2)
  proc1.call
  proc2.call
end

a = Proc.new { puts "First proc" }
b = Proc.new { puts "Second proc" }

multiple_procs(a,b)


puts

proc2 = Proc.new { puts "Hello world" }
lam = lambda { puts "Hello World" }

p a = proc2   # a now equals p, a Proc instance
p proc2       # returns a proc object '#<Proc:0x007f96b1a60eb0@(irb):46>'

p proc2.class # returns 'Proc'
p lam.class  # returns 'Proc'

puts

p proc2   # returns '#<Proc:0x007f96b1032d30@(irb):75>'
p lam    # returns '<Proc:0x007f96b1b41938@(irb):76 (lambda)>'


puts

lam = lambda { |x| puts x }    # creates a lambda that takes 1 argument
lam.call(2)                    # prints out 2
# lam.call                       # ArgumentError: wrong number of arguments (0 for 1)
# lam.call(1,2,3)                # ArgumentError: wrong number of arguments (3 for 1)

puts

proc = Proc.new { |x| puts x } # creates a proc that takes 1 argument
proc.call(2)                   # prints out 2
p proc.call                      # returns nil
proc.call(1,2,3)               # prints out 1 and forgets about the extra arguments

puts "____________________"

def lambda_test
  lam = lambda { return }
  lam.call
  puts "Hello world"
end

lambda_test                 # calling lambda_test prints 'Hello World'

puts "____________________"

def proc_test
  proc = Proc.new { return }
  proc.call
  puts "Hello world"
end

proc_test                 # calling proc_test prints nothing


# Example of Proc objects preserving local context

def counter
  n = 0
  return Proc.new { n+= 1 }
end

a = counter
p a.call            # returns 1
p a.call            # returns 2

b = counter
p b.call            # returns 1

p a.call            # returns 3
p b.call            # returns 2


def first_value(hash)
  # p hash[:caraca]
  p hash.first[1]
end

# first_value {a: 1, b: 2}
# Or
first_value caraca: 74, b: 93, c: 105
