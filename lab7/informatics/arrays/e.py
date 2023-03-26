n = int(input())
ok = False
a = list(map(int, input().split()))
for i in range(1, n):
    if a[i] * a[i - 1] > 0:
        ok = True
        break
print("YES" if ok else "NO")