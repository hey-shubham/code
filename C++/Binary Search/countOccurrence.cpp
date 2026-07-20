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
            end = mid - 1;
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
            start = mid + 1;
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
    int arr[] = {2, 4, 4, 4, 4, 5, 6};
    int n = sizeof(arr) / sizeof(arr[0]);

    int key = 4;

    int first = firstOccurrence(arr, n, key);
    int last = lastOccurrence(arr, n, key);

    if (first == -1)
    {
        cout << "Element Not Found";
    }
    else
    {
        int count = last - first + 1;

        cout << "First Occurrence = " << first << endl;
        cout << "Last Occurrence = " << last << endl;
        cout << "Count = " << count << endl;
    }

    return 0;
}