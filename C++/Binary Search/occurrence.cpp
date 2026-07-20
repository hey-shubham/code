#include <bits/stdc++.h>
using namespace std;

// First Occurrence
int firstOccurrence(int arr[], int n, int key)
{
    int start = 0;
    int end = n - 1;
    int ans = -1;

    while (start <= end)
    {
        int mid = start + (end - start) / 2;

        if (arr[mid] == key)
        {
            ans = mid;
            end = mid - 1;     // Left me search
        }
        else if (arr[mid] < key)
        {
            start = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
    }

    return ans;
}

// Last Occurrence
int lastOccurrence(int arr[], int n, int key)
{
    int start = 0;
    int end = n - 1;
    int ans = -1;

    while (start <= end)
    {
        int mid = start + (end - start) / 2;

        if (arr[mid] == key)
        {
            ans = mid;
            start = mid + 1;   // Right me search
        }
        else if (arr[mid] < key)
        {
            start = mid + 1;
        }
        else
        {
            end = mid - 1;
        }
    }

    return ans;
}

int main()
{
    int arr[] = {2, 4, 5, 7, 7, 7, 9, 11, 13};
    int n = sizeof(arr) / sizeof(arr[0]);
    int key = 7;

    cout << "First Occurrence = " << firstOccurrence(arr, n, key) << endl;
    cout << "Last Occurrence  = " << lastOccurrence(arr, n, key) << endl;

    return 0;
}