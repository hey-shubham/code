// write a program to check whether the given character is vowel or consonant.

#include<iostream>
using namespace std;

int main()
{
    system("cls");
    char c;
    cout<<"enter any character: ";
    cin>>c;
    if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u')
        {
        cout<<"it is a vowel."<<endl;
        }
    else
        {
        cout<<"it is a consonant."<<endl;
        }
};
