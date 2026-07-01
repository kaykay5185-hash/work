import pandas as pd

mydatafram = {
    'cars': ['BMW','marcidise','tyota'],
    'num': ['1','2','3']

}
print (mydatafram)

df = pd.DataFrame(mydatafram)

print (df)

a = [1,7,2]

ser = pd.Series(a, index=['a','b','c'])

print(ser)

print(ser['b'])

calorise = {"day1": 420, "day2": 380, "day3": 390}
myvar = pd.Series(calorise)

print(myvar)


myvar2 = pd.Series({"day1": 420, "day2": 380, "day3": 390} , index= ["day1","day2"])

print(myvar2)
