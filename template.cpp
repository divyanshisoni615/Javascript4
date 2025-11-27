#include <iostream>
using namespace std;

template <class T>
void add(T a, T b)
{
    cout << "A+b=" << a + b << endl;
}

int main()
{
    int p = 10, q = 20;
    char w = 'r', t = 'o';
    float m=2.3,n=5.7;
    add(p, q);
    add(w, t);
    add(m,n);
    return 0;
}