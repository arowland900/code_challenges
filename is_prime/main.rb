def is_prime(num)
    (2...num).each do |n|
        if num % n == 0
            return false
        end
    end
    return true
end