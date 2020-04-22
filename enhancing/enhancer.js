module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  if (item.enhancement < 20) {
    item.enhancement++;
  }
  return { ...item };
}

function fail(item) {
  const { enhancement } = item;

  if (enhancement < 15) {
    item.durability -= 5;
  }
  else if (enhancement >= 15) {
    item.durability -= 10;
  }

  if (enhancement > 16) {
    item.enhancement--;
  }

  return { ...item };
}

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  const { enhancement, name } = item;

  if (enhancement > 0) {
    item.name = `[+${enhancement}] ${name}`;
  }
  return { ...item };
}