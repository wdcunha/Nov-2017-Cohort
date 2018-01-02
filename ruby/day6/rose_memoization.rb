require 'benchmark'

#"Memoization" is caching the results of expensive method calls to prevent running expensive calls if a value already exists
# def my_expensive_method
#   one = 2
#
#   two = 3
#
#   three = 6
#   @my_expensive_method ||= one + two * three
# end
# #or
# def my_expensive_method2
#   one = 2
#
#   two = 3
#
#   three = 6
#   @my_expensive_method = one + two * three
# end
#
# p my_expensive_method
# p my_expensive_method
#
# p my_expensive_method2
# p my_expensive_method2

n = 10000000

# Run 1
Benchmark.bm do |x|
  x.report do
    n.times do
      def my_expensive_method2
        one = 2
        two = 3
        three = 6
        @my_expensive_method = one + two * three
      end
      # p my_expensive_method2
    end
  end
end

# Run 2
Benchmark.bm do |x|
  x.report do
    n.times do
      def my_expensive_method
        one = 2
        two = 3
        three = 6
        @my_expensive_method ||= one + two * three
      end
      # p my_expensive_method
    end
  end
end
