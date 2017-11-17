hsh = [{b:2}, {a:4, b:4}, {a:1}, {c:4}]

def pluck(arr,key)
 arr.map{|x| x[key]}
end

p pluck(hsh,pluck)
