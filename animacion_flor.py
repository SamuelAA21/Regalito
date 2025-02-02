import numpy as np
import matplotlib.pyplot as plt

# Parámetros de la flor
t = np.linspace(0, 2 * np.pi, 100)
r = 2 - 2 * np.sin(t) + np.sin(t) * (np.sqrt(np.abs(np.cos(t))) / (np.sin(t) + 1.4))

# Coordenadas polares a cartesianas
x = r * np.cos(t)
y = r * np.sin(t)

# Crear la figura
plt.figure(figsize=(6,6))
plt.plot(x, y, color='red', linewidth=2)
plt.fill(x, y, 'pink', alpha=0.6)

# Quitar ejes y mostrar
plt.axis("off")
plt.title("🌸 Una Flor para Ti 🌸", fontsize=15, color='purple')
plt.show()
