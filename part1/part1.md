### Part 1a.
1. "values added: 20"
2. "final result: 20" This is because varaibles declared with var are visible through blocks.
3. "values added: 20"
4. The code returns an error: "result" is not defined/no such variable.
5. The code returns an error: assignment to constant variable is not allowed.
6. The code returns an error: we get the same error as 5 (assignment to constant variable is not allowed)

### Part 1b.
1. The value of prices.length will be printed to the console, since i is incremented price.length times: **3**.
2. The final discounted price (the price of the final item, including discounts): 300 * 0.5 = **150**. 
3. The final rounded price (the price of the final item, inclulding discounts, rounded to the hundredths place). This is to ensure that we don't end up with weird prices after applying discounts like 23.4123: **150**
4. An array of each of the final prices. As we've seen from the previous questions, the final price of each item is calculated, and then each finalPrice is pushed to the discounted array and returned: **[50, 100, 150]**
5. The code causes an error: i is not defined; variabled defined by let are restricted by block scope and line 12 is outside of it.
6. The code causes an error: dicountedPrice is not defined; variabled defined by let are restricted by block scope and line 13 is outside of it.
7. (See question 1b3) The final rounded price (the price of the final item, inclulding discounts, rounded to the hundredths place). This is to ensure that we don't end up with weird prices after applying discounts like 23.4123. The variable is defined in the same scope as line 14. **150**
8. (See question 1b4) An array of each of the final prices. As we've seen from the previous questions, the final price of each item is calculated, and then each finalPrice is pushed to the discounted array and returned. **[50, 100, 150]**
9. (See question 1b5) The code causes an error: i is not defined; variabled defined by let are restricted by block scope and line 12 is outside of it.
10. The value of length (prices.length) will be printed to the console: **3**
11. An array of each of the discounted prices (without rounding). Constant objects can be changed, but they cannot be changed to reference a different object. Thus, the discounted array can have new discounted prices pushed to it, since it never changes its reference. **[50, 100, 150]**
12. Notations
    A. student.name
    B. student["Grad Year"]
    C. student.greeting()
    D. student["Favorite Teacher"].name
    E. student.courseLoad[0]
13. Arithmetic
    A. '32'
    B. 1
    C. 3
    D. '3null'
    E. 4
    F. 0
    G. '3undefined'
    H. NaN
14. Comparison
    A. true
    B. false
    C. true
    D. false
    E. false
    F. true
15. The == operator allow different types to convert before comparison, but the strict equajlity operator === checks the equality without type conversion.
16. See part1b-question16.js
17. **[2,4,6]** modifyArray takes callback as an input and performs the operation callback defines on each element of the input array. In this case, callback is doSomething(), which returns the input * 2. The new array is then returned. Therefore, each element of the original array [1,2,3] is doubled to get the output [2,4,6].
18. See part1b-question18.js
19. Code output:
1
4
3
2