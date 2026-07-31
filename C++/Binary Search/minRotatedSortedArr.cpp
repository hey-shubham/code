#include <bits/stdc++.h>
using namespace std;

int findMinIndex(int arr[], int n)
{
    int start = 0;
    int end = n - 1;

    while (start < end)
    {
        int mid = start + (end - start) / 2;

        if (arr[mid] > arr[end])
        {
            start = mid + 1;
        }
        else
        {
            end = mid;
        }
    }

    return start;
}

int main()
{
    int arr[] = {8, 10, 12, 15, 2, 4, 6};

    int n = sizeof(arr) / sizeof(arr[0]);

    int index = findMinIndex(arr, n);

    cout << "Minimum Element : " << arr[index] << endl;
    cout << "Minimum Index   : " << index << endl;

    return 0;
}