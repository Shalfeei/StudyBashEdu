import math

def search(a, b, e):
	c = 0
	error = 0

	print(f'a = {a}; b = {b}; e = {e}')

	while b - a > e:
		c = (a + b) / 2
		error = (b - a) / 2
		
		if F(a) * F(c) <= 0:
			b = c
		else:
			a = c

	print(f'x = {round(c, 8)}, погрешность = {round(error, 8)}')

def F(x):
	return 3 * math.pow(x, 2) - 2 * math.sin(x)

def main():
	a = 0.6		  # начальная точка
	b = 0.8		  # конечная точка
	e = 0.0001    # точность

	search(a, b, e)
	input()

if __name__ == "__main__":
	main()