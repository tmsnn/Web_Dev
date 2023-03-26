def mini(a, b, c, d):
    print(min(a, b, c, d))

a = list(map(int, input().split()))
mini(*a)