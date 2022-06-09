const idol = [
  {
    name: "sakura miyawaki",
    name_group: "HKT48",
  },
  {
    name: "aruno nakanishi",
    name_group: "NOGIZAKA46",
  },
  {
    name: "sakura endo",
    name_group: "HKT48",
  },
];

const newIdol = idol.filter((idol) => idol.name_group === "NOGIZAKA46");
const findIdol = idol.find((idol) => idol.name_group === "HKT48");
console.log(newIdol);
console.log(findIdol);
