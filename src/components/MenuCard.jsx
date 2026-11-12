function MenuCard({ name, price, desc = "오늘의 메뉴" }) {
  return (
    <article className="menu-card">
      <h3>{name}</h3>
      <p className="price">{price}원</p>
      <p className="desc">{desc}</p>
    </article>
  );
}

export default MenuCard;
