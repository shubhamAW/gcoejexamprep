---
sidebar_position: 3
---

# practical 2

Aim : Write a program that contains a string (char pointer) with a value \Hello World‘. The program should 
AND or and XOR each character in this string with 127 and display the result

Code -> 

``` cpp
#include <stdio.h>
#include <string.h>

int main()
{
    char str[24];

    int i, x;
    printf("Enter the string: ");
    scanf("%s", str);
    x = strlen(str);
    printf("xor operation \n");
    for (int i = 0; i < x; i++)
    {
        int original, modified[x];
        original = str[i];
        modified[i] = str[i] ^ 127;
        // print string in c

        for (int i = 0; i < x; i++)
        {
            printf("%c", modified[i]);
        }
    }
    printf("\nor operation \n");
    for (int i = 0; i < x; i++)
    {
        int original, modified[x];
        original = str[i];
        modified[i] = str[i] | 127;
        // print string in c

        for (int i = 0; i < x; i++)
        {
            printf("%c", modified[i]);
        }
    }
    printf("\nAND operation \n");
    for (int i = 0; i < x; i++)
    {
        int original, modified[x];
        original = str[i];
        modified[i] = str[i] & 127;
        // print string in c

        for (int i = 0; i < x; i++)
        {
            printf("%c", modified[i]);
        }
    }
}
```