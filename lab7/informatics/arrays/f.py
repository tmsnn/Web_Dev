n = int(input())
cnt = 0
a = list(map(int, input().split()))
for i in range(1, n - 1):
    if a[i] > a[i - 1] and a[i] > a[i + 1]:
        cnt += 1
print(cnt)