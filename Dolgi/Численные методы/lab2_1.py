import math

def search(a, b):
	m = FF(a)
	M = FF(b)
	if (m > M):
		M = m
		m = FF(b)

	q = 1 - m / M
	x = a

	print(f'x0 = {a}')

	for i in range(1, 5):
		_abs = abs(F(x) / M)
		x = x - F(x) / M
		error = _abs * q / (1 - q)
		print(f'x{i} = {round(x, 8)}; |x{i} - x{i-1}| = {round(_abs, 8)}; ' + 
			f'погрешность = {round(error, 8)}')


def F(x):
	return math.pow(x, 2) - 2 * math.sin(x)

def FF(x):
	return 2 * x - 2 * math.cos(x)

def main():
	a = 1.4		# начальная точка
	b = 1.5  	# конечная точка

	search(a, b)
	input()

if __name__ == "__main__":
	main()