import math

def search(x, b, k):
	while x != b:
		x2 = round(x + k, 1)
		if F(x) > 0 and F(x2) < 0 or F(x) < 0 and F(x2) > 0:
			print(f'Уравнение имеет корень на отрезке [{x}; {x2}].')
		elif F(x) == 0:
			print(f'Уравнение имеет корень в точке {x}.')
		x = x2

def F(x):
	return math.pow(x, 2) - 2 * math.sin(x)

def main():
	x = -1.0	# начальная точка
	b = 2.0  	# конечная точка
	k = 0.1 	# шаг

	search(x, b, k)
	input()

if __name__ == "__main__":
	main()