import random
import time
import sys
sys.setrecursionlimit(10000)

def timeFunc(f, inputSize):
    numList = [random.randint(-100, 100) for i in range(inputSize)]

    print("Done generating random number list.")
    
    start = time.time()

    (startIndex, endIndex, maxSum) = f(numList)

    end = time.time()

    print(startIndex, endIndex, maxSum)

    print("Seconds elapsed for max sum:", end - start)

def timeFuncWithInput(f, numList):

    print("Done generating random number list.")
    
    start = time.time()

    (startIndex, endIndex, maxSum) = f(numList)

    end = time.time()

    print(startIndex, endIndex, maxSum)

    print("Seconds elapsed for max sum:", end - start)

# Solution below can be implemented more compactly as follows if you don't need start and end indices:

def maxSub(numList):
    def maxOfSumsStartingAtIndex(i):
        return max([sum(numList[i:j]) for j in range(i, len(numList))])
    return max([maxOfSumsStartingAtIndex(i) for i in range(len(numList))])

# Theta(n^3) solution below: For each startIndex, we iterate over all possible ending indices,
# taking the sum from startIndex to endIndex and checking it against the currentMax
#
# O(n^3) (Upper bound): sum will not perform more than n additions (n is the size of numList) and
# the if statement is O(1) so O(n) + O(1) = O(n) operations are performed in the inner loop, which
# is executed no more than n times.  So the inner loop has O(n)*O(n) = O(n^2) time complexity.  Since
# the outer loop is run n times, it has n*O(n^2) = O(n^3) time complexity.  The rest of the operations
# run in constant-time so the total time complexity is O(n^3) + O(1) = O(n^3).
#
# Omega(n^3) (Lower bound): For the first approximately n/2 start indices: 0, 1, 2, ..., n//2 - 1,
# at least n/4 numbers need to be added for the approximately n/4 end indices
# 3*n//4, 3n*//4 + 1, 3*n//4 + 2, ..., n-1, which means n/4*n/4*n/2 = n^3/32 = Omega(n^3) additions.

def maxSubarraySumNaive(numList):
    maxSumSeenSoFar = numList[0]
    maxStartIndex = 0
    maxEndIndex = 0
    
    for startIndex in range(len(numList)):                     # Calculate max starting with startIndex 
        for endIndex in range(startIndex, len(numList)):        
            sumOfSublist = sum(numList[startIndex:endIndex+1]) # sum is O(m) for list of size m
            if(sumOfSublist > maxSumSeenSoFar):                # O(1) below
                maxSumSeenSoFar = sumOfSublist
                maxStartIndex = startIndex
                maxEndIndex = endIndex
    
    return (maxStartIndex, maxEndIndex, maxSumSeenSoFar)

# Theta(n^2) solution below: Depending on startIndex, inner loop is run 1, 2, 3, ..., or n times;
# Each time the inner loop is run, Theta(1) operations is performed:
# Run 1 + 2 + ... + n = 1/2*n^2+1/2*n times = Theta(n^2)
# Total Ops: Theta(1)*Theta(n^2) = Theta(n^2)

def maxSubarraySumStandard(numList):
    maxSumSeenSoFar = numList[0]
    maxStartIndex = 0
    maxEndIndex = 0
    
    for startIndex in range(len(numList)):
        sumOfSublist = 0   # reset sum for each startIndex
        for endIndex in range(startIndex, len(numList)): # run n-startIndex times
            sumOfSublist += numList[endIndex]   # keep track of running sum instead: O(1) now 
            if(sumOfSublist > maxSumSeenSoFar):
                maxSumSeenSoFar = sumOfSublist
                maxStartIndex = startIndex
                maxEndIndex = endIndex
    
    return (maxStartIndex, maxEndIndex, maxSumSeenSoFar)

# Divide and conquer approach (O(nlgn)): For even n, has recurrence relation T(n) = 2T(n/2) + O(1)
def maxSubarraySumDC(numList):
    if(len(numList) == 1):
        return (0,0,numList[0])
    
    splitIndex = len(numList) // 2
    firstHalf = numList[:splitIndex]
    secondHalf = numList[splitIndex:]
    lastIndexOfFirstHalf = splitIndex-1

    # get the largest subarray sum in first half ending with its last index    
    maxSumEndingAtEndOfFirstHalfSoFar = firstHalf[lastIndexOfFirstHalf]
    sumEndingAtEndOfFirstHalf = firstHalf[lastIndexOfFirstHalf]
    maxStartingIndexAcrossSoFar= lastIndexOfFirstHalf

    for startIndex in range(lastIndexOfFirstHalf-1,-1,-1):
        # get the sums starting at the end and working backward
        sumEndingAtEndOfFirstHalf += firstHalf[startIndex]
        if(sumEndingAtEndOfFirstHalf > maxSumEndingAtEndOfFirstHalfSoFar):
            maxSumEndingAtEndOfFirstHalfSoFar = sumEndingAtEndOfFirstHalf
            maxStartingIndexAcrossSoFar = startIndex


    # get the largest subarray sum in second half starting with the first index
    maxSumStartingAtStartOfSecondHalfSoFar = secondHalf[0]
    sumStartingAtStartOfSecondHalf = secondHalf[0]
    maxEndingIndexAcrossSoFar = 0

    for endIndex in range(1,len(secondHalf)): # endIndex is with respect to secondHalf
        sumStartingAtStartOfSecondHalf += secondHalf[endIndex]
        if(sumStartingAtStartOfSecondHalf > maxSumStartingAtStartOfSecondHalfSoFar):
            maxSumStartingAtStartOfSecondHalfSoFar = sumStartingAtStartOfSecondHalf
            maxEndingIndexAcrossSoFar = endIndex

    maxAcrossSum = maxSumEndingAtEndOfFirstHalfSoFar + maxSumStartingAtStartOfSecondHalfSoFar
    # By inductive hypothesis: maxSumFirstHalf stores max subarray sum contained in first half
    (maxStartIndexFirstHalf, maxEndIndexFirstHalf, maxSumFirstHalf) = maxSubarraySumDC(firstHalf)
    # By inductive hypothesis: maxSumSecondHalf stores max subarray sum contained in second half
    (maxStartIndexSecondHalf, maxEndIndexSecondHalf, maxSumSecondHalf) = maxSubarraySumDC(secondHalf)

    # get max of three sums
    maxOfSums = max(maxAcrossSum, maxSumFirstHalf, maxSumSecondHalf)
    if(maxOfSums == maxAcrossSum):
        # return ending index with respect to its position in numList
        return (maxStartingIndexAcrossSoFar, maxEndingIndexAcrossSoFar+splitIndex, maxAcrossSum)
    elif(maxOfSums == maxSumFirstHalf):
        return (maxStartIndexFirstHalf, maxEndIndexFirstHalf, maxSumFirstHalf)
    else:
        # return startIndex and endIndex with respect to its position in numList
        return (maxStartIndexSecondHalf+splitIndex, maxEndIndexSecondHalf+splitIndex, maxSumSecondHalf)
    
# And now for the grand finale: An O(n) solution using memoization!
# Keep track of max sum ending at index i-1 and max sum of subarray numList[:i]
# As with D&C: subarray with max sum of numList[:i+1] falls in one of the following three categories
#    It does not include index i (first half with D&C): Use your previously computed max sum of subarray numList[:i]
#    Only uses number at index i (second half with D&C): Simple: max subarray sum is numList[i] 
#    Uses index i and previous ones (crossing with D&C): max subarray must be max sum ending at index i-1 + numList[i]  

def maxSubarraySumDynamic(numList):
    maxSubarraySumSoFar = numList[0]
    maxSumEndingAtLastIndex = numList[0]
    maxSumOverallStartingIndex = 0
    maxSumOverallEndingIndex = 0

    startingIndexForMaxSumEndingAtLastIndex = 0
    
    for i in range(1,len(numList)):
        if(maxSumEndingAtLastIndex > 0):
            maxSumEndingAtLastIndex += numList[i]
        else:
            # Starting afresh at end index can only result in larger sum 
            maxSumEndingAtLastIndex = numList[i]
            startingIndexForMaxSumEndingAtLastIndex = i

        if(maxSumEndingAtLastIndex > maxSubarraySumSoFar):
            maxSubarraySumSoFar = maxSumEndingAtLastIndex
            maxSumOverallStartingIndex = startingIndexForMaxSumEndingAtLastIndex
            maxSumOverallEndingIndex = i

    return (maxSumOverallStartingIndex, maxSumOverallEndingIndex, maxSubarraySumSoFar)
            
                

def main():
    print("Naive (O(n^3)):", maxSubarraySumNaive([1, -2, 2, -1, 8, -3]))
    timeFunc(maxSubarraySumNaive,500)
    timeFunc(maxSubarraySumNaive,1000)

    #print(maxSub([1, -2, 2, -1, 8, -3]))
    
    print("Standard (O(n^2)):", maxSubarraySumStandard([1, -2, 2, -1, 8, -3]))
    timeFunc(maxSubarraySumStandard,4000)
    timeFunc(maxSubarraySumStandard,8000)

    print("Divide and Conquer (O(nlgn)):", maxSubarraySumDC([1, -2, 2, -1, 8, -3]))
    timeFunc(maxSubarraySumDC,200000)
    timeFunc(maxSubarraySumDC,400000)

    print("Dynamic (O(n)):", maxSubarraySumDynamic([1, -2, 2, -1, 8, -3]))
    timeFunc(maxSubarraySumDynamic,500000)
    timeFunc(maxSubarraySumDynamic,1000000) 
    

    # Testing different implementations on randomly generated lists: should always agree
    ra = [random.randint(-1000,1000) for i in range(100)]
    print(maxSub(ra))
    print(maxSubarraySumNaive(ra))
    print(maxSubarraySumStandard(ra))
    print(maxSubarraySumDC(ra))
    print(maxSubarraySumDynamic(ra))
    
main()
