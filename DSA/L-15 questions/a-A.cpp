// converting small alphabet to capital alphabet

#include<iostream>
using namespace std;

char convert(char name)
{
    char ans= name - 'a' + 'A';
    return ans;
}
int main()
{
    system("cls");
    char name;
    cout<<"Enter any small alphabet: ";
    cin>>name;

    cout<<convert(name);
}


// #include<iostream>
// using namespace std;

// int main()
// {
//     system("cls");
//     char ch;
//     cout<<"Enter any small alphabet: ";
//     cin>>ch;

//     // converting
//     ch = ch - 'a' + 'A';
//     cout<<"Capital alphabet: "<<ch;
// }