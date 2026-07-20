#include <bits/stdc++.h>
using namespace std;

int searchInsert(int arr[], int n, int target)
{
    int start = 0;
    int end = n - 1;

    while (start <= end)
    {
        int mid = start + (end - start) / 2;

        if (arr[mid] == target)
        {
            return mid;
        }
        else if (arr[mid] < target)
        {
            start = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
    }

    return start;
}

int main()
{
    int arr[] = {2,4,6,8,10};
    int n = sizeof(arr)/sizeof(arr[0]);

    int target = 5;

    cout << searchInsert(arr, n, target);
}