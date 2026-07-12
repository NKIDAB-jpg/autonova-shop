export default function Home() {
  return (
    <main>
      <header>
        <h1>AutoNova</h1>
        <nav>
          Каталог | VIN | Бренды | Корзина
        </nav>
      </header>

      <section>
        <h2>
          Автозапчасти для вашего автомобиля
        </h2>

        <p>
          Найдите деталь по VIN или артикулу
        </p>

        <input
          placeholder="Введите VIN или артикул"
        />

        <button>
          Найти
        </button>
      </section>

      <section>
        <h2>Категории</h2>

        <div>
          🚗 Двигатель
        </div>

        <div>
          🛞 Подвеска
        </div>

        <div>
          ⚙️ Тормоза
        </div>

        <div>
          🔋 Аккумуляторы
        </div>
      </section>

    </main>
  );
}
