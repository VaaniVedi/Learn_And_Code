using System;

class SubarrayMeanCalculator
{
    static void Main()
    {
        var (arraySize, queryCount) = ReadInputSizes();
        var numbers = ReadArray(arraySize);
        var prefixSums = BuildPrefixSum(numbers);
        ProcessQueries(queryCount, prefixSums);
    }

    static (int, int) ReadInputSizes()
    {
        var inputValues = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
        return (inputValues[0], inputValues[1]);
    }

    static long[] ReadArray(int size)
    {
        return Array.ConvertAll(Console.ReadLine().Split(), long.Parse);
    }

    static long[] BuildPrefixSum(long[] numbers)
    {
        long[] prefixSums = new long[numbers.Length + 1];

        for (int index = 0; index < numbers.Length; index++)
        {
            prefixSums[index + 1] = prefixSums[index] + numbers[index];
        }

        return prefixSums;
    }

    static void ProcessQueries(int queryCount, long[] prefixSums)
    {
        for (int i = 0; i < queryCount; i++)
        {
            var range = Array.ConvertAll(Console.ReadLine().Split(), int.Parse);
            Console.WriteLine(CalculateMean(prefixSums, range[0], range[1]));
        }
    }

    static long CalculateMean(long[] prefixSums, int leftIndex, int rightIndex)
    {
        long subarraySum = prefixSums[rightIndex] - prefixSums[leftIndex - 1];
        return subarraySum / (rightIndex - leftIndex + 1);
    }
}
