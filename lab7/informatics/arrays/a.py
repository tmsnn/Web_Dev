n = int(input())
x = list(map(int, input().split()))
for i in range(n):
    if i % 2 == 0:
        print(x[i], end = ' ')