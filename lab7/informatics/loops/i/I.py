import math

a = int(input())
cnt = 0
n = int(math.sqrt(a))
for i in range(1, n+1):
    if a % i == 0:
        if i * i == a:
            cnt += 1
        else:
            cnt += 2

print(cnt)