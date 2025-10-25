// Factor of a number using for loop

#include<iostream>
using namespace std;

int main()
{
    system("cls");
    int n, fact=1;
    cout<<"Enter a number: ";
    cin>>n;
    for(int i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    cout<<"Factorial of "<<n<<" is "<<fact<<endl;
}